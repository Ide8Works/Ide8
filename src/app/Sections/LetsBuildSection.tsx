const LetsBuildSection = () => {
  return (
    <section className="w-screen flex lg:flex-row flex-col items-center justify-center px-10 sm:px-20 lg:px-36 py-28 gap-10">
      <div className="flex flex-col items-center justify-center text-center lg:text-right gap-3 w-full lg:w-1/2">
        <h1 className="font-aglight text-3xl md:text-5xl lg:text-6xl">
          Let’s build it{" "}
          <span className="font-agheavy text-[#ffa800]">together</span>!
        </h1>
        <h2 className="font-courier">
          Whether it’s a stunning <span className="italic">website</span>, a
          bold <span className="italic">brand</span>, or scroll-stopping{" "}
          <span className="italic">content</span> — you’ve just landed in the{" "}
          <span className="italic">right place</span>.
        </h2>
      </div>
      <div className="grid grid-cols-2 w-full lg:w-1/2 gap-3">
        <div className="bg-[#ffa800] rounded-lg border-2 border-black p-20"></div>
        <div className="bg-white rounded-lg border-2 border-black p-20"></div>
        <div className="bg-white rounded-lg border-2 border-black p-20"></div>
        <div className="bg-[#ffa800] rounded-lg border-2 border-black p-20"></div>
      </div>
    </section>
  );
};

export default LetsBuildSection;
