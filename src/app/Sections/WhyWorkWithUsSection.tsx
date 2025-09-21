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
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-aglight">
          why work <span className="font-agheavy text-[#ffa800]">with us</span>
        </h1>
        <h2 className="font-courier text-lg text-center leading-tight w-2/3">
          Because good work isn’t just about design — it’s about{" "}
          <span className="italic">trust</span>,{" "}
          <span className="italic">delivery</span>, and{" "}
          <span className="italic">results</span>.
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 px-24">
        {content.map((ele, index) => (
          <WhyCard
            key={index}
            icon={ele.icon}
            heading={ele.heading}
            subheading={ele.subheading}
          />
        ))}
        <div className="bg-[#ffa800] px-6 py-10 flex flex-col gap-8 rounded-xl items-center drop-shadow-sm shadow-black relative">
          <h1 className="font-courier text-center">
            sara kaam khud thodi karoge
          </h1>
          <img src="/media/memes/MrBeanIrritated.png" className="absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

interface WhyCardProps {
  icon?: string;
  heading?: string;
  subheading?: string;
}

const WhyCard = ({ icon, heading, subheading }: WhyCardProps) => {
  return (
    <div className="bg-[#ffa800] px-6 py-10 flex flex-col gap-8 rounded-xl items-center drop-shadow-sm shadow-black">
      <div className="bg-white rounded-full w-28 h-28 border border-white">
        <img src={icon} className="h-full w-full rounded-full" />
      </div>
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="font-agheavy text-3xl">{heading}</h1>
        <h2 className="font-courier text-sm leading-tight">{subheading}</h2>
      </div>
    </div>
  );
};

export default WhyWorkWithUsSection;
