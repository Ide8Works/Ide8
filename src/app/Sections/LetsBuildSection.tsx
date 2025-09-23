const LetsBuildSection = () => {
  const images = [
    "/media/service3.png",
    "/media/service2.png",
    "/media/service4.png",
    "/media/service1.png",
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
            className={`rounded-lg bg-[#ffa800] py-10  md:py-12 flex items-center justify-center`}
          >
            <img
              src={img}
              alt={`Service image`}
              className="object-cover w-3/4 h-3/4 scale-x-125 scale-y-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LetsBuildSection;
