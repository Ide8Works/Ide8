interface WhyCardProps {
  icon?: string;
  heading?: string;
  subheading?: string;
}

const WhyCard = ({ icon, heading, subheading }: WhyCardProps) => {
  return (
    <div className="bg-[#ffa800] px-4 sm:px-6 py-6 sm:py-8 lg:py-10 flex flex-col gap-4 sm:gap-6 lg:gap-8 rounded-sm sm:rounded-lg md:rounded-xl items-center drop-shadow-sm shadow-black min-h-[200px] sm:min-h-[280px] lg:min-h-[320px]">
      <div className="bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border border-white flex-shrink-0">
        <img
          src={icon}
          className="h-full w-full rounded-full object-cover"
          alt={heading}
        />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 items-center text-center flex-1">
        <h1 className="font-agheavy text-xl sm:text-2xl lg:text-3xl tracking-tight">
          {heading}
        </h1>
        <h2 className="font-courier text-xs sm:text-sm leading-tight tracking-tight">
          {subheading}
        </h2>
      </div>
    </div>
  );
};

export default WhyCard;
