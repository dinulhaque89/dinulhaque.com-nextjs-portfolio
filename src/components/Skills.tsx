"use client";
import React from "react";
import TitleText from "./TitleText";
import { textVarient } from "@/lib/motion";
import { motion } from "framer-motion";
import { techStack } from "../../data/index";

const Skills = () => {
  return (
    <div id="skills">
      <TitleText title="Skills" />
      <motion.p
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="text-white text-center text-lg p-10 md:px-[25%]   "
      >
       
      </motion.p>
      <motion.div
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 items-center justify-center flex-wrap mt-10"
      >
        {techStack.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="flex flex-col justify-center items-center bg-white border-[1px] border-purple w-40 h-40 p-5 rounded-xl hover:bg-purple transition duration-1000 ease-in-out">
              <img
                src={skill.logo}
                className="w-16 h-16 object-cover"
                alt=""
              />
            </div>
            <h2 className="text-white font-bold text-xl">{skill.name}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;