import GlowingButton from "../Components/GlowingButton";
import Particles from "../Components/Particles";

const CTABannerSection = () => {
  return (
    <div className=" w-screen flex items-center justify-center p-20">
      <div className="bg-black flex flex-col gap-6 items-center w-full h-full rounded-xl py-40 drop-shadow-xl">
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
        <div className="flex flex-col gap-1 w-full items-center">
          <h1 className="font-aglight text-5xl w-1/2 text-center text-white">
            Dont <span className="font-agheavy">end up</span> with the idea in
            mind
          </h1>
          <h2 className="font-courier text-white">
            <span className="italic">If you scrolled this far,</span> It&lsquo;s
            time to START OFF!
          </h2>
        </div>
        <div className="flex items-center justify-center gap-6 font-courier mt-4">
          <GlowingButton>Whatsapp</GlowingButton>
          <GlowingButton>Call</GlowingButton>
          <GlowingButton>Email</GlowingButton>
        </div>
      </div>
    </div>
  );
};

export default CTABannerSection;
