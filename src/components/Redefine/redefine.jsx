export default function RedefineHeading() {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight text-[#2A2A35]" style={{ fontFamily: "serif" }}>
        Redefine Your Look
      </h2>
      <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-300">
        <span className="h-px w-10 sm:w-12 bg-black" />
        <span className="text-pink-400 text-lg sm:text-xl">❀</span>
        <span className="h-px w-10 sm:w-12 bg-black" />
      </div>
      <p className="max-w-2xl text-xs sm:text-sm text-[#5f5f6b] px-2">
        Beauty without limits. Our services are bold, precise, and tailored to make you unforgettable.
      </p>
    </div>
  );
}
