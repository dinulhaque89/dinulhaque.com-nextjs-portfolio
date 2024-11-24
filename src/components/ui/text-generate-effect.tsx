"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Split into individual words and maintain proper spacing
  const formattedWords = words.split(' ').map((word, i) => (
    <motion.span
      key={i}
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: i * 0.1,
      }}
    >
      {word}
      {/* Improved spacing between words */}
      <span className="inline-block mx-[0.25em] sm:mx-[0.35em] md:mx-[0.5em]" aria-hidden="true"> </span>
    </motion.span>
  ));

  return (
    <div 
      ref={scope}
      className={cn(
        "flex flex-wrap justify-center items-center gap-1 leading-snug tracking-wide",
        "text-lg sm:text-xl md:text-2xl lg:text-3xl", // Responsive font sizes
        className
      )}
    >
      {formattedWords}
    </div>
  );
};
