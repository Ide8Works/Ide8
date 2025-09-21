const WhatWeBuildSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 py-8 px-4 md:py-12 md:px-0 bg-white h-screen">
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-aglight">
          what all we <span className="text-5xl lg:text-6xl font-agheavy text-[#ffa800]">build</span>
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg font-courier">
          <span className="italic">these are just us,</span> working hard <br className="hidden md:block" /> to get your work done
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 ">
        <img
          src="/media/memes/DogLaptop.png"
          className="w-52 sm:w-48 md:w-60 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
          alt="Dog working on laptop"
        />
        <img
          src="/media/memes/MonkeyLaptop.png"
          className="w-52 sm:w-48 md:w-60 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
          alt="Monkey working on laptop"
        />
        <img
          src="/media/memes/CapybaraLaptop.png"
          className="w-52 sm:w-48 md:w-60 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
          alt="Capybara working on laptop"
        />
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
