import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="green-pink-gradient w-full p-[1px]
        rounded-[20px] shadow-card cursor-pointer"
        >
          <div
            options={{ max: 45, scale: 1, Speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white font-bold text-center text-[20px]">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm skilled Frontend Developer with 2-year experience building stable
        resbonsive react websites in fast-based and collaborative environment
        .Highly skilled in HTML5 , CSS3 , Bootstrap , TailwindCSS , Javascript ,
        Typescript , React js , Figma , Github .
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center pb-20">
        {services.map((service, index) => (
          <>
            <ServiceCard key={service.title} index={index} {...service} />
          </>
        ))}
      </div>
      {/* <p className={styles.sectionSubText}>My Skills</p>
      <h2 className={`${styles.sectionHeadText} pb-4`}>technologies.</h2> */}
    </>
  );
};

export default SectionWrapper(About, "about");
