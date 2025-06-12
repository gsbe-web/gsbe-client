import { ScrollIconToggle } from "@components/Home";
import { motion } from "framer-motion";

export const WelcomeAnimation = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.video
        animate={{ opacity: 1 }}
        autoPlay={true}
        className="absolute top-0 left-0 hidden h-full w-full object-cover md:block"
        initial={{ opacity: 0 }}
        loop={true}
        muted={true}
        src="/videos/Gsbeui.mp4"
        transition={{ duration: 1 }}
      />
      <img
        alt="background-image"
        className="absolute top-0 left-0 block h-full w-full object-cover md:hidden"
        src="/images/bground.webp"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30" />
      <div className="relative z-1 flex flex-col items-center justify-center gap-6 md:top-1/4">
        <span className="tracking-extra-wide mt-52 text-center text-4xl leading-tight font-black text-white uppercase">
          Welcome to the Ghana Society <br /> of Biomedical Engineers (GSBE)
        </span>
        <span className="pb-8 text-center text-2xl leading-normal font-light tracking-wider text-[#F4CE50]">
          Empowering Healthcare Through Innovation And Engineering
        </span>
      </div>
      <div className="absolute bottom-[7%] left-1/2">
        <ScrollIconToggle />
      </div>
    </div>
  );
};
