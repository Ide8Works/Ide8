const WhatWeBuildSection = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-10 h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-aglight">
          what all we <span className="font-agheavy text-[#ffa800]">build</span>
        </h1>
        <h2 className="font-courier text-lg">
          <span className="italic">these are just us,</span> working hard to get
          your work done
        </h2>
      </div>
      <div className="flex gap-2">
        <img src="/media/memes/DogLaptop.png" className="h-50" />
        <img src="/media/memes/MonkeyLaptop.png" className="h-50" />
        <img src="/media/memes/CapybaraLaptop.png" className="h-50" />
      </div>
    </div>
  );
};

export default WhatWeBuildSection;
