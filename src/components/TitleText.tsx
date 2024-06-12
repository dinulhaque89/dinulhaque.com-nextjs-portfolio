"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVarient } from "@/lib/motion";

const TitleText = ({ title }: { title: string }) => {
    return (
      <motion.h2
        variants={textVarient}
        initial="hidden"
        animate="show"
        className="text-purple mt-20 mb-5 text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-900 via-purple-400 to-white font-bold md:text-[64px] text-center"
      >
        {title}
      </motion.h2>
    );
  };

export default TitleText;