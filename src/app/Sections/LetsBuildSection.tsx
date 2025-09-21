const LetsBuildSection = () => {
  return (
    <section className="w-full py-8 md:py-10 lg:py-12 px-4 md:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl 2xl:max-w-7xl mx-auto">
        
        {/* Left text content */}
        <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="font-aglight text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Let’s build it{" "}
            <span className="font-agheavy text-[#ffa800]">together</span>!
          </h1>
          <h2 className="font-courier text-base sm:text-lg lg:text-xl max-w-md">
            Whether it’s a stunning <span className="italic">website</span>, a
            bold <span className="italic">brand</span>, or scroll-stopping{" "}
            <span className="italic">content</span> — you’ve just landed in the{" "}
            <span className="italic">right place</span>.
          </h2>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-2 w-full lg:w-1/2 gap-3">
          <div className="bg-[#ffa800] rounded-lg border-2 border-black p-12 sm:p-16 lg:p-20"></div>
          <div className="bg-white rounded-lg border-2 border-black p-12 sm:p-16 lg:p-20"></div>
          <div className="bg-white rounded-lg border-2 border-black p-12 sm:p-16 lg:p-20"></div>
          <div className="bg-[#ffa800] rounded-lg border-2 border-black p-12 sm:p-16 lg:p-20"></div>
        </div>
      </div>
    </section>
  );
};

export default LetsBuildSection;
