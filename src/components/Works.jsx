import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex justify-between flex-col"}
        >
          <div className="">

          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={image}
              className={"w-full h-full object-cover rounded-2xl"}
            />
            <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-3/5 h-3/5 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-secondary text-[14px] mt-2 ">{description}</p>
          </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className="cursor-pointer">
                <BsBoxArrowUpRight onClick={() => window.open(live_demo_link, "_blank")}/>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects .</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"}
        >
          Following projects showing my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories on github and live demos in it. It reflects my ability to
          creating react responsive websites.
        </motion.p>
      </div>
      <div className="flex mt-20 gap-7 flex-wrap mb-24">
        {projects.map((project, index) => (
          <>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
