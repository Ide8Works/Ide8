const LetsBuildSection = () => {
  const images = [
    "/media/Grid1.png",
    "/media/Grid2.png",
    "/media/Grid3.png",
    "/media/Grid4.png",
  ];

  return (
    <section className="w-screen flex lg:flex-row flex-col items-center justify-center px-10 sm:px-20 lg:px-36 py-28 gap-10">
      <div className="flex flex-col items-center justify-center text-center lg:text-right gap-3 w-full lg:w-1/2">
        <h1 className="font-aglight text-3xl md:text-5xl lg:text-6xl tracking-tight">
          Let’s build it{" "}
          <span className="font-agheavy text-[#ffa800]">together</span>!
        </h1>
        <h2 className="font-courier tracking-tight text-sm sm:text-lg">
          Whether it’s a stunning <span className="italic">website</span>, a
          bold <span className="italic">brand</span>, or scroll-stopping{" "}
          <span className="italic">content</span> — you’ve just landed in the{" "}
          <span className="italic">right place</span>.
        </h2>
      </div>
      <div className="grid grid-cols-2 w-full lg:w-1/2 gap-3 pointer-events-none">
        {images.map((img, index) => (
          <div
            key={index}
            className={`rounded-lg ${
              index == 2 || index == 1 ? "bg-[#ffa800]" : "bg-white"
            } py-10 md:py-8 flex items-center justify-center border-2`}
          >
            <img src={img} alt={`Service image`} className="w-24" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LetsBuildSection;
