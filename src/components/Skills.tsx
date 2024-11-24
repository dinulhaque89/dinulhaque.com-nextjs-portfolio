"use client";
import React from "react";
import TitleText from "./TitleText";
import { textVarient } from "@/lib/motion";
import { motion } from "framer-motion";
import { categorizedTechStack } from '../../data';

const Skills = () => {
  return (
    <div id="skills">
      <TitleText title="Skills" />
      <motion.p
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="text-white text-center text-lg p-10 md:px-[25%]"
      >
        Comprehensive technical expertise across multiple domains
      </motion.p>

      {Object.entries(categorizedTechStack).map(([category, tools]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl text-white/80 capitalize text-center mb-8">
            {category}
          </h3>
          <motion.div
            variants={textVarient}
            initial="hidden"
            whileInView="show"
            className="flex flex-wrap justify-center gap-8"
          >
            {tools.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col justify-center items-center gap-5"
              >
                <div className="flex flex-col justify-center items-center bg-white border-[1px] border-purple w-40 h-40 p-5 rounded-xl hover:bg-purple transition duration-1000 ease-in-out">
                  <img
                    src={skill.logo}
                    className="w-16 h-16 object-cover"
                    alt={skill.name}
                  />
                </div>
                <h2 className="text-white font-bold text-xl">{skill.name}</h2>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;