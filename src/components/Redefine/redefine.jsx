export default function RedefineHeading() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className="text-3xl font-semibold leading-tight text-[#2A2A35] sm:text-[42px]" style={{ fontFamily: "serif" }}>
        Redefine Your Look
      </h2>
      <div className="flex items-center justify-center gap-4 text-gray-300">
        <span className="h-px w-12 bg-black" />
        <span className="text-pink-400 text-xl">❀</span>
        <span className="h-px w-12 bg-black" />
      </div>
      <p className="max-w-2xl text-sm text-[#5f5f6b]">
        Beauty without limits. Our services are bold, precise, and tailored to make you unforgettable.
      </p>
    </div>
  );
}
