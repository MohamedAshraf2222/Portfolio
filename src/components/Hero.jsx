import ComputerCanvas from "./canvas/Computers";
import { styles } from "../styles";
import { MotionConfig, motion } from "framer-motion";

// import {Loader} from './Loader'
const Hero = () => {
  return (
    <>
      <div className="relative mx-auto w-full h-screen aaa">
        <div
          className={`${styles.paddingX}
          absolute inset-0 top-[120px] 
          max-w-7xl flex flex-row
          items-start gap-5 mx-auto z-[1]
      `}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eef]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="">
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className="text-[#915eef]">Mohamed</span>{" "}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop React Websites in fast-based
              <br className="sm:block hidden" /> and collaborative environment .
            </p>
          </div>
        </div>
        <ComputerCanvas />
        <div className="absolute flex justify-center items-center w-full bottom-8 xs:bottom-3 cursor-pointer z-10">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                className="bg-secondary mb-1 w-3 h-3 rounded-full"
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
