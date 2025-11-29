"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DetailsModal from "@/components/Modal/DetailsModal";

const posts = [
  {
    title: "We prepared something special for you this holiday",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipis cing elit.",
    images: [
      "/beautiful-woman-with-towel-holding-lily.jpg",
      "/elegant-makeup-portrait.jpg",
      "/young-woman-getting-beauty-treatment-her-eyebrows.jpg",
      "/woman-relaxing-with-facial-mask-spa.jpg",
      "/br1.jpg",
    ],
    author: "SCENT Team",
    date: "January 15, 2025",
    comments: "Comment (01)",
    featured: true,
  },
  {
    title: "Latest makeup trends you can pull off",
    images: [
      "/elegant-makeup-portrait.jpg",
      "/beautiful-young-woman-wearing-sari.jpg",
      "/br2.jpg",
      "/m (1).jpg",
      "/m (2).jpg",
    ],
    author: "SCENT Team",
    date: "January 12, 2025",
  },
  {
    title: "Brands that are changing beauty",
    images: [
      "/hairdresser-taking-care-her-client.jpg",
      "/female-hairdresser-using-hairbrush-hair-dryer.jpg",
      "/young-woman-relaxing-spa-salon.jpg",
      "/m (3).jpg",
      "/m (4).jpg",
    ],
    author: "SCENT Team",
    date: "January 10, 2025",
  },
  {
    title: "Best tips for munu beauty",
    images: [
      "/young-woman-getting-beauty-treatment-her-eyebrows.jpg",
      "/woman-relaxing-with-facial-mask-spa.jpg",
      "/beautiful-woman-with-towel-holding-lily.jpg",
      "/m (5).jpg",
      "/m (6).jpg",
    ],
    author: "SCENT Team",
    date: "January 8, 2025",
  },
];

export default function InspirationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [imageIndices, setImageIndices] = useState({});
  const [mounted, setMounted] = useState(false);

  const featured = posts.find((post) => post.featured);
  const sidePosts = posts.filter((post) => !post.featured);

  const getCurrentImage = (post) => {
    const index = imageIndices[post.title] || 0;
    return post.images[index % post.images.length];
  };

  // Ensure component is mounted before starting animations (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate images every 3 seconds (only after mount)
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setImageIndices((prevIndices) => {
        const newIndices = { ...prevIndices };
        posts.forEach((post) => {
          const currentIndex = newIndices[post.title] || 0;
          newIndices[post.title] = (currentIndex + 1) % post.images.length;
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted]);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const getPostContent = (post) => {
    if (post.title === "We prepared something special for you this holiday") {
      return (
        <div className="space-y-6">
          <div>
            <p className="mb-4">
              We prepared something special for you this holiday season! At SCENT Salon, we believe every celebration deserves a touch of elegance and glamour. This holiday, we're offering exclusive beauty packages designed to make you shine at every gathering.
            </p>
            <p className="mb-4">
              From festive makeup looks to glamorous hair styling, our expert team is ready to help you look your absolute best. Our holiday collection includes everything you need to feel confident and beautiful during this special time of year.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Special Holiday Services
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li><strong>Holiday Glam Makeup:</strong> Professional makeup application with shimmer and sparkle perfect for parties and celebrations. Includes long-lasting foundation, dramatic eye makeup, and festive lip colors.</li>
              <li><strong>Festive Hair Styling:</strong> Elegant updos, glamorous curls, and sophisticated styles that complement your holiday outfits. Our stylists create looks that last all night.</li>
              <li><strong>Nail Art for the Season:</strong> Custom holiday-themed nail designs with seasonal colors, patterns, and embellishments. Choose from classic reds, elegant golds, or festive patterns.</li>
              <li><strong>Complete Beauty Packages:</strong> Full-service packages combining makeup, hair styling, and nail art for a complete transformation. Perfect for special events and celebrations.</li>
              <li><strong>Gift Vouchers Available:</strong> Share the gift of beauty with your loved ones. Our gift vouchers are perfect for friends and family who deserve pampering.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Holiday Beauty Tips
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Book your appointment at least 2 weeks in advance to secure your preferred date and time</li>
              <li>Come with clean hair and face for the best results</li>
              <li>Bring photos of looks you love to help our stylists understand your vision</li>
              <li>Consider a trial run before your main event to ensure you're completely satisfied</li>
              <li>Ask about our long-lasting products that will keep you looking fresh throughout your celebration</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-700">
              Book your appointment now and let us help you celebrate in style! Our team is ready to create a look that makes you feel confident and beautiful this holiday season.
            </p>
          </div>
        </div>
      );
    } else if (post.title === "Latest makeup trends you can pull off") {
      return (
        <div className="space-y-6">
          <div>
            <p className="mb-4">
              Discover the latest makeup trends that are perfect for you! Our beauty experts have curated the hottest looks of the season that you can easily pull off. Whether you prefer natural beauty or bold statements, we have trends that will complement your unique style.
            </p>
            <p className="mb-4">
              Our professional makeup artists stay updated with the latest techniques and products from around the world, ensuring you get access to cutting-edge beauty trends right here in Bangalore.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Trending Looks This Season
            </h3>
            <ul className="space-y-3 list-none text-gray-700">
              <li>
                <strong>Natural Glow:</strong> Achieve that dewy, fresh-faced look with lightweight foundations and illuminating products. This trend focuses on enhancing your natural beauty rather than covering it up. Perfect for everyday wear and special occasions.
              </li>
              <li>
                <strong>Bold Lips:</strong> Make a statement with vibrant colors like deep reds, bright corals, and rich berries. Bold lips are back in style and work beautifully when paired with minimal eye makeup. Our lip colors are long-lasting and transfer-resistant.
              </li>
              <li>
                <strong>Smoky Eyes:</strong> Classic elegance with a modern twist. Updated smoky eye looks use softer colors and blended techniques for a more wearable, sophisticated appearance. Perfect for evening events and special occasions.
              </li>
              <li>
                <strong>Graphic Liners:</strong> Express your creativity with bold, artistic eyeliner designs. From winged looks to geometric patterns, graphic liners allow you to showcase your personality. This trend is perfect for those who love to experiment.
              </li>
              <li>
                <strong>Glass Skin:</strong> The ultimate Korean beauty trend that creates a luminous, poreless appearance. This look focuses on skincare and light-reflecting products to achieve a natural, glowing complexion that looks like glass.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Expert Tips for Trying New Trends
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Start with one feature at a time - don't try to incorporate all trends at once</li>
              <li>Consider your skin tone and undertones when selecting colors</li>
              <li>Practice new techniques at home before wearing them to important events</li>
              <li>Invest in quality brushes and tools for better application</li>
              <li>Book a makeup consultation to learn which trends work best for your face shape and features</li>
              <li>Always prep your skin with proper skincare before applying makeup</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-700">
              Our makeup artists will help you find the perfect trend that complements your features and style. Book a makeup consultation today and let us guide you through the latest beauty trends!
            </p>
          </div>
        </div>
      );
    } else if (post.title === "Brands that are changing beauty") {
      return (
        <div className="space-y-6">
          <div>
            <p className="mb-4">
              Explore the revolutionary brands that are transforming the beauty industry! At SCENT Salon, we partner with innovative brands that are setting new standards in beauty and wellness. We carefully select our product partners to ensure you receive only the best quality treatments and results.
            </p>
            <p className="mb-4">
              Our commitment to excellence means we only work with brands that share our values of quality, innovation, and customer satisfaction. Each brand in our portfolio has been chosen for its unique contribution to the beauty industry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Featured Brands at SCENT Salon
            </h3>
            <ul className="space-y-4 list-none text-gray-700">
              <li>
                <strong>Schwarzkopf Professional:</strong> Cutting-edge hair care technology with advanced formulas for color, styling, and treatment. Known for their innovative color systems and professional-grade products that deliver salon-quality results.
              </li>
              <li>
                <strong>Olaplex:</strong> Revolutionary hair repair system that works at the molecular level to rebuild broken disulfide bonds in hair. This groundbreaking treatment can transform damaged, over-processed hair into healthy, strong strands.
              </li>
              <li>
                <strong>Estée Lauder:</strong> Luxury skincare and makeup with decades of research and innovation. Their advanced anti-aging technologies and high-performance makeup products are trusted by professionals worldwide.
              </li>
              <li>
                <strong>Kérastase:</strong> Premium hair treatments and styling products backed by scientific research. Their personalized approach to hair care addresses specific concerns with targeted solutions for every hair type.
              </li>
              <li>
                <strong>Casmara:</strong> Professional skincare solutions from Spain, known for their innovative mask treatments and advanced formulations. Their products combine natural ingredients with cutting-edge technology.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Why We Choose These Brands
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>All brands undergo rigorous testing and meet our high quality standards</li>
              <li>Products are backed by scientific research and professional expertise</li>
              <li>Brands share our commitment to sustainability and ethical practices</li>
              <li>Regular training ensures our team stays updated with latest techniques</li>
              <li>Products deliver consistent, reliable results for our clients</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-700">
              Experience the difference that quality products make in your beauty routine. Visit SCENT Salon to discover how these innovative brands can transform your hair and skin.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <div>
            <p className="mb-4">
              Best tips for maintaining your beauty routine! Our experts share their insider secrets to help you look and feel your best every day. These tried-and-tested tips have been gathered from years of experience in the beauty industry.
            </p>
            <p className="mb-4">
              A consistent beauty routine is the foundation of looking and feeling great. Whether you're a beauty enthusiast or just starting your journey, these tips will help you establish habits that support your natural beauty.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Essential Beauty Tips
            </h3>
            <ul className="space-y-3 list-none text-gray-700">
              <li>
                <strong>Skincare First:</strong> A good skincare routine is the foundation of all beauty. Cleanse, tone, and moisturize twice daily. Use products suited to your skin type and don't skip sunscreen - it's your best defense against premature aging. Consider adding serums and treatments that address your specific concerns like acne, dryness, or fine lines.
              </li>
              <li>
                <strong>Nail Care:</strong> Keep your nails healthy and beautiful with regular maintenance. Moisturize your cuticles daily, file nails in one direction to prevent splitting, and give your nails a break from polish occasionally. Professional manicures and pedicures not only look great but also promote nail health.
              </li>
              <li>
                <strong>Hair Maintenance:</strong> Regular trims every 6-8 weeks keep your hair looking fresh and prevent split ends. Use quality shampoos and conditioners suited to your hair type. Avoid excessive heat styling and always use heat protectant products. Deep conditioning treatments once a week can restore moisture and shine.
              </li>
              <li>
                <strong>Hydration:</strong> Drink plenty of water for glowing skin. Aim for at least 8 glasses daily. Proper hydration helps maintain skin elasticity, reduces the appearance of fine lines, and gives your complexion a natural radiance. Herbal teas and water-rich foods also contribute to your hydration goals.
              </li>
              <li>
                <strong>Sleep Well:</strong> Beauty sleep is real! Aim for 7-9 hours of quality sleep each night. During sleep, your body repairs and regenerates skin cells. Use a silk or satin pillowcase to reduce friction and prevent hair breakage. Establish a bedtime routine that helps you wind down.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Additional Pro Tips
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Always remove makeup before bed to prevent clogged pores and breakouts</li>
              <li>Exfoliate 2-3 times per week to remove dead skin cells and reveal brighter skin</li>
              <li>Protect your hair from sun damage with UV-protective products or hats</li>
              <li>Eat a balanced diet rich in vitamins and antioxidants for healthy skin and hair</li>
              <li>Manage stress through relaxation techniques - stress can affect your skin and hair health</li>
              <li>Get regular professional treatments to address specific concerns and maintain results</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-700">
              Visit SCENT Salon for personalized beauty advice and treatments tailored to your needs. Our expert team can help you create a customized routine that works for your lifestyle and goals.
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight text-[#2E2E2E]"
            style={{ fontFamily: "serif" }}
          >
            Insights & Inspiration
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 sm:w-12 bg-black" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-10 sm:w-12 bg-black" />
          </div>
          <p className="max-w-3xl text-xs sm:text-sm md:text-base text-[#555] px-2">
            Explore tips, trends, and stories that elevate your beauty and lifestyle.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {featured && (
            <article className="bg-white flex flex-col text-left">
              <div className="relative h-[240px] sm:h-[300px] md:h-[360px] w-full overflow-hidden rounded-2xl bg-[#f5f5f5]">
                <Image
                  src={getCurrentImage(featured)}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-700"
                  priority
                />
              </div>
              <div className="w-full space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs text-[#777]">
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {featured.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {featured.comments}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2E2E2E]" style={{ fontFamily: "serif" }}>{featured.title}</h3>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed">{featured.excerpt}</p>
                <button
                  onClick={() => handleReadMore(featured)}
                  className="mt-2 sm:mt-4 border border-[#2E2E2E] bg-transparent px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#2E2E2E] transition hover:bg-[#2E2E2E] hover:text-white"
                >
                  Read more
                </button>
              </div>
            </article>
          )}

          <div className="space-y-4 sm:space-y-6 w-full">
            {sidePosts.map((post) => (
              <article key={post.title} className="flex gap-3 sm:gap-4">
                <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={getCurrentImage(post)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-cover transition-opacity duration-700"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 sm:gap-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-[#777]">
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-[#2E2E2E]" style={{ fontFamily: "serif" }}>{post.title}</h4>
                  <button
                    onClick={() => handleReadMore(post)}
                    className="w-max border border-[#2E2E2E] bg-transparent px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-[#2E2E2E] transition hover:bg-[#2E2E2E] hover:text-white"
                  >
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedPost && (
        <DetailsModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPost(null);
          }}
          title={selectedPost.title}
          content={getPostContent(selectedPost)}
          image={getCurrentImage(selectedPost)}
          type="blog"
          date={selectedPost.date}
          author={selectedPost.author}
        />
      )}
    </section>
  );
}
