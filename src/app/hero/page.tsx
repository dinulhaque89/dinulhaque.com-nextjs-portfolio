"use client";

import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import MagicButton from "@/components/MagicButton";
import { Mail } from "lucide-react";
import Link from 'next/link';
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HeroSection() {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background with dots */}
      <div className="absolute inset-0 bg-dot-white/[0.2] -z-10" />
      
      {/* Spotlights */}
      <div className="relative">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <HeroHighlight className="w-full flex flex-col justify-start items-center p-4 sm:p-8 pb-32">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 sm:w-[200px] sm:h-[200px] mt-32 sm:mt-20"
        >
          <div className="absolute inset-0 -z-10">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleColor="#fff"
              className="w-full h-full"
              particleDensity={100}
            />
          </div>
          <Image
            src="/2022.jpeg"
            alt="Profile Picture"
            fill
            className="rounded-full object-cover"
            priority
          />
        </motion.div>

        {/* Name with Lamp Effect */}
        <div className="h-[14rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent opacity-50 [--conic-position:from_70deg_at_center_top]"
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
            />
          </div>
          
          {/* Name and gradients */}
          <div className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
            Dinul Haque
          </div>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>

        {/* Role Title with Highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="-mt-32 sm:-mt-16 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center"
        >
          <Highlight className="text-white px-4 font-bold max-w-4xl leading-none lg:leading-tight text-center mx-auto">
            Full Stack Software Engineer | DevOps Specialist
          </Highlight>
        </motion.h1>

        {/* Description */}
        <motion.div className="mt-6 mb-3 max-w-[90%] sm:max-w-[80%] md:max-w-2xl mx-auto">
          <TextGenerateEffect
            words="Crafting robust and scalable solutions with a decade of IT experience."
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-neutral-200"
          />
        </motion.div>

        {/* CTA Button */}
        <MagicButton
          title="View Projects"
          className="mt-12 sm:mt-8 w-[80%] sm:w-auto max-w-[300px]"
        />

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 w-full max-w-[90%] sm:max-w-2xl mx-auto">
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <FaReact className="text-xl sm:text-2xl text-blue-400" />
            <span className="text-white/70 text-sm sm:text-base">React</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <SiNextdotjs className="text-xl sm:text-2xl text-white" />
            <span className="text-white/70 text-sm sm:text-base">Next.js</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <FaNodeJs className="text-xl sm:text-2xl text-green-500" />
            <span className="text-white/70 text-sm sm:text-base">Node.js</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <SiMongodb className="text-xl sm:text-2xl text-green-400" />
            <span className="text-white/70 text-sm sm:text-base">MongoDB</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <SiTypescript className="text-xl sm:text-2xl text-blue-500" />
            <span className="text-white/70 text-sm sm:text-base">TypeScript</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <SiTailwindcss className="text-xl sm:text-2xl text-cyan-400" />
            <span className="text-white/70 text-sm sm:text-base">Tailwind</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <FaAws className="text-xl sm:text-2xl text-orange-500" />
            <span className="text-white/70 text-sm sm:text-base">AWS</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <FaDocker className="text-xl sm:text-2xl text-blue-500" />
            <span className="text-white/70 text-sm sm:text-base">Docker</span>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-8">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10 transition-colors w-12 h-12 sm:w-14 sm:h-14"
            asChild
          >
            <Link 
              href="https://github.com/dinulhaque89" 
              target="_blank"
              className="group"
            >
              <GithubIcon className="h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10 transition-colors w-12 h-12 sm:w-14 sm:h-14"
            asChild
          >
            <Link 
              href="https://linkedin.com/in/dinulhaque" 
              target="_blank"
              className="group"
            >
              <LinkedinIcon className="h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10 transition-colors w-12 h-12 sm:w-14 sm:h-14"
            asChild
          >
            <Link 
              href="mailto:dinul.haque89@gmail.com"
              className="group"
            >
              <Mail className="h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>

        {/* Location */}
        <HoverCard>
          <HoverCardTrigger>
            <p className="text-xl md:text-3xl text-white flex items-center gap-2 mt-0 sm:mt-8">
              <span>📍</span> London, UK
            </p>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Based in London</h4>
                <p className="text-sm">
                  Available for remote work and local opportunities in the UK
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </HeroHighlight>
    </div>
  );
}

const techStack = [
  { name: 'React', icon: <FaReact className="text-2xl text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-2xl text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-2xl text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-2xl text-green-400" /> },
];

const socialLinks = [
  { 
    href: "https://github.com/dinulhaque89", 
    icon: <GithubIcon className="h-6 w-6 sm:h-7 sm:w-7" />,
    label: "GitHub"
  },
  { 
    href: "https://linkedin.com/in/dinulhaque", 
    icon: <LinkedinIcon className="h-6 w-6 sm:h-7 sm:w-7" />,
    label: "LinkedIn"
  },
  { 
    href: "mailto:dinul.haque89@gmail.com", 
    icon: <Mail className="h-6 w-6 sm:h-7 sm:w-7" />,
    label: "Email"
  },
];

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}





