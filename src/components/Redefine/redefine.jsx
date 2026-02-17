export default function RedefineHeading() {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-light leading-tight text-[#2A2A35] tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
        Redefine your look
      </h2>
      <div className="decorative-flower-divider flex items-center justify-center gap-3 sm:gap-4 text-gray-300">
        <span className="h-px w-10 sm:w-12 bg-black" />
        <span className="text-pink-400 text-lg sm:text-xl">❀</span>
        <span className="h-px w-10 sm:w-12 bg-black" />
      </div>
      <p className="description-main max-w-2xl px-2">
        Beauty without limits. Our services are bold, precise, and tailored to make you unforgettable.
      </p>
    </div>
  );
}
