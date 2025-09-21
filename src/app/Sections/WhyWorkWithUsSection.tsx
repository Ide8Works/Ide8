import WhyCard from "../Components/WhyCard";

const content = [
  {
    heading: "Trust",
    subheading:
      "We honor every promise, ensuring you get reliable work without excuses or delays.",
    icon: "/media/memes/CatPinkyPromise.png",
  },
  {
    heading: "Quality",
    subheading:
      "We deliver top-notch designs that not only look great but also drive real results.",
    icon: "/media/memes/CatThumbsUp.png",
  },
  {
    heading: "Clarity",
    subheading:
      "We keep you informed at every step, ensuring transparency and clear communication.",
    icon: "/media/memes/CatSwag.png",
  },
];

const WhyWorkWithUsSection = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center flex-col gap-8 sm:gap-10 lg:gap-12 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col items-center gap-2 sm:gap-3 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-aglight text-center">
          why work <span className="font-agheavy text-[#ffa800]">with us</span>
        </h1>
        <h2 className="font-courier text-sm sm:text-base md:text-lg text-center leading-tight w-full sm:w-5/6 md:w-4/5 lg:w-2/3 px-4">
          Because good work isn't just about design — it's about{" "}
          <span className="italic">trust</span>,{" "}
          <span className="italic">delivery</span>, and{" "}
          <span className="italic">results</span>.
        </h2>
      </div>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-4 max-w-7xl mx-auto">
          {content.map((ele, index) => (
            <WhyCard
              key={index}
              icon={ele.icon}
              heading={ele.heading}
              subheading={ele.subheading}
            />
          ))}
          <div className="bg-[#ffa800] px-4 sm:px-6 py-6 sm:py-8 lg:py-10 flex flex-col gap-4 sm:gap-6 lg:gap-8 rounded-xl items-center drop-shadow-sm shadow-black relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
            <h1 className="font-courier text-center text-sm sm:text-base lg:text-base mt-2 sm:mt-4">
              sara kaam khud thodi karoge
            </h1>
            <div className="flex-1 flex items-end justify-center absolute bottom-0 lg:right-0 w-fit">
              <img
                src="/media/memes/MrBeanIrritated.png"
                className="max-h-[150px] sm:max-h-[225px] lg:max-h-[300px] lg:rounded-br-xl w-auto object-contain"
                alt="Mr Bean Irritated"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUsSection;
