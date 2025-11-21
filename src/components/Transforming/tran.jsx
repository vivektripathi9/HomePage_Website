"use client";

import Image from "next/image";

export default function TransformationStories() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0">
        <Image
          src="/z2.png"
          alt="Background"
          fill
          className="object-contain object-right opacity-30"
          priority
        />
      </div>

      <div className="relative flex w-full flex-col items-center gap-8 px-20 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-[#1f1f2e] sm:text-[42px]" style={{ fontFamily: "serif" }}>
            Stories of Transformation
          </h2>
          <p className="text-gray-500">
            From subtle enhancements to bold makeovers, our clients’ experiences reflect our commitment to care and excellence.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <span className="h-px w-12 bg-black" />
            <span className="text-pink-400 text-xl">❀</span>
            <span className="h-px w-12 bg-black" />
          </div>
        </div>

        <div className="w-full rounded-[32px] border border-white/60 bg-white/90 p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/author.png"
              alt="Hosea Hill"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-lg text-gray-600">
            <span className="text-2xl text-[#f48b8b]">“</span> Suscipit nobis quo ut qui rerum. Quia fugit voluptate quis totam. Iure qui dolorem quisquam placeat facilis ut et. Nisi et necessitatibus sequi cumque. Quasi laudantium asperiores et qui voluptas odio. Eum quo nam distinctio. Aut atque perspiciatis nobis id non modi maxime repellendus et.<span className="text-2xl text-[#f48b8b]">”</span>
          </p>
          <div className="mt-6 space-y-1">
            <p className="text-lg font-semibold text-[#1f1f2e]">Hosea Hill</p>
            <p className="text-sm uppercase tracking-wide text-gray-400">Client</p>
          </div>
        </div>
      </div>
    </section>
  );
}
