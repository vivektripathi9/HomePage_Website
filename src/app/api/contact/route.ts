import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if SMTP environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP configuration is missing");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailSubject = subject 
      ? `New Contact Form: ${subject} - ${name}`
      : `New Contact Form Submission from ${name}`;

    // Recipient email - send to your business email
    const recipientEmail = process.env.SMTP_USER; // vivek@pinakkaa.com

    await transporter.sendMail({
      from: `"SCENT Website Contact" <${process.env.SMTP_USER}>`,
      to: recipientEmail, // All form submissions go to vivek@pinakkaa.com
      replyTo: email, // Reply button will go to the person who filled the form
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f1f2e; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #1f1f2e;">Name:</strong> <span style="color: #555;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #1f1f2e;">Email:</strong> <span style="color: #555;"><a href="mailto:${email}" style="color: #ef4444; text-decoration: none;">${email}</a></span></p>
            ${phone ? `<p style="margin: 10px 0;"><strong style="color: #1f1f2e;">Phone:</strong> <span style="color: #555;"><a href="tel:${phone.replace(/\s/g, '')}" style="color: #ef4444; text-decoration: none;">${phone}</a></span></p>` : ''}
            ${subject ? `<p style="margin: 10px 0;"><strong style="color: #1f1f2e;">Subject:</strong> <span style="color: #555;">${subject}</span></p>` : ''}
          </div>
          <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border-left: 4px solid #ef4444; border-radius: 4px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #1f1f2e;">Message:</strong></p>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 4px; font-size: 12px; color: #666;">
            <p style="margin: 0;">This email was sent from the SCENT website contact form.</p>
            <p style="margin: 5px 0 0 0;">You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}

