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

      <div className="relative flex w-full flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
            Stories of Transformation
          </h2>
          <p className="text-sm sm:text-base text-gray-500 px-2">
            From subtle enhancements to bold makeovers, our clients' experiences reflect our commitment to care and excellence.
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-300">
            <span className="h-px w-10 sm:w-12 bg-black" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-10 sm:w-12 bg-black" />
          </div>
        </div>

        <div className="w-full rounded-2xl sm:rounded-[32px] border border-white/60 bg-white/90 p-6 sm:p-8 md:p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/author.png"
              alt="Hosea Hill"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            <span className="text-xl sm:text-2xl text-[#f48b8b]">"</span> Suscipit nobis quo ut qui rerum. Quia fugit voluptate quis totam. Iure qui dolorem quisquam placeat facilis ut et. Nisi et necessitatibus sequi cumque. Quasi laudantium asperiores et qui voluptas odio. Eum quo nam distinctio. Aut atque perspiciatis nobis id non modi maxime repellendus et.<span className="text-xl sm:text-2xl text-[#f48b8b]">"</span>
          </p>
          <div className="mt-4 sm:mt-6 space-y-1">
            <p className="text-base sm:text-lg font-semibold text-[#1f1f2e]">Hosea Hill</p>
            <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">Client</p>
          </div>
        </div>
      </div>
    </section>
  );
}
