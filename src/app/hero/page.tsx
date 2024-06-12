"use client";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import MagicButton from "@/components/MagicButton";
import { Mail } from "lucide-react"
import { techStack } from '../../../data';


import Link from 'next/link';
import {Button} from "@/components/ui/button"

export default function HeroSection() {


  return (
    <div id="home">
      <div className="pb-20 pt-36">
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
        </div>
      </div>

      <HeroHighlight className="w-full flex flex-col justify-start items-center p-8 pb-32">
        <div className="flex flex-col items-center mt-0">
          <Image
            src="/2022.jpeg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="h-[14rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
              <div className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="mt-1 text-2xl font-bold text-black-700 dark:text-white text-center md:text-9xl"
          >
            <Highlight className="text-white dark:text-white md:text-9xl text-2xl px-4  lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
              Full Stack Software Engineer | DevOps Specialist
            </Highlight>
          </motion.h1>
          <TextGenerateEffect 
            className="text-center text-[40px]  lg:text-6xl md:text-9xl"
          
            words="Crafting robust and scalable solutions with a decade of experience."
          />
          <div className="mt-8 flex space-x-4">
            <a href="#projects">
          <MagicButton
            title="View Projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
              />
              </a>
          </div>
          <div className="flex justify-center space-x-4 mt-10">
            {/* <Link className="block p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600" href="#">
              <TwitterIcon className="h-8 w-8" />
            </Link> */}
            <Link className="block p-3 rounded-full bg-gray-600 text-white hover:bg-blue-900" href="https://www.linkedin.com/in/dinul-haque-devops/">
              <LinkedinIcon className="h-8 w-8" />
            </Link>
            <Link className="block p-3 rounded-full bg-gray-600 text-white hover:bg-blue-900" href="https://github.com/dinulhaque89">
              <GithubIcon className="h-8 w-8" />
            </Link>
            <Link className="block p-3 rounded-full bg-gray-600 text-white hover:bg-blue-900" href="mailto:princ3mo3@gmail.com">
              <Mail className="h-8 w-8" />
            </Link>
          </div>
          <p className="text-3xl px-4 text-white mt-10">📍 London, UK</p>
        </div>
        <section className="mt-8 bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 py-12 w-full">
                <div className="container mx-auto flex items-center">
                    <h2 className="text-2xl font-semibold text-white mr-8">Tech Stack</h2>
                    <div className="flex flex-wrap items-center">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center mx-4 mb-4 hover:scale-110 transform transition duration-300"
                            >
                                <img src={tech.logo} alt={`${tech.name} Logo`} className="h-12 mb-2 invert" />
                                <span className="text-white text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



      </HeroHighlight>
    </div>
  );


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
  

  
  
  
}

