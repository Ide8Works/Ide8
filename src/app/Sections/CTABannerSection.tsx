import GlowingButton from "../Components/GlowingButton";
import Particles from "../Components/Particles";

const CTABannerSection = () => {
  return (
    <div className="w-screen flex items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-20">
      <div className="bg-black flex flex-col gap-4 sm:gap-6 items-center w-full h-full rounded-xl py-16 sm:py-24 md:py-32 lg:py-40 drop-shadow-xl relative overflow-hidden">
        <div className="h-full w-full absolute top-0 left-0 -z-10 opacity-50">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={15}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 w-full items-center px-4 sm:px-8">
          <h1 className="font-aglight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2 text-center text-white leading-tight">
            Dont <span className="font-agheavy">end up</span> with the idea in
            mind
          </h1>
          <h2 className="font-courier text-white text-sm sm:text-base md:text-lg text-center px-2">
            <span className="italic">If you scrolled this far,</span> It&lsquo;s
            time to START OFF!
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 font-courier mt-2 sm:mt-4 w-full px-4">
          <GlowingButton>Whatsapp</GlowingButton>
          <GlowingButton>Call</GlowingButton>
          <GlowingButton>Email</GlowingButton>
        </div>
      </div>
    </div>
  );
};

export default CTABannerSection;
