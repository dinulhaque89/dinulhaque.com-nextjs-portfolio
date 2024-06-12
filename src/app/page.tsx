"use client";



import HeroSection from "./hero/page";
import { NavbarDemo } from "@/components/Navbar"
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "../../data";
import TitleText from "@/components/TitleText";
import Skills from "@/components/Skills";




export default function Home() {
  return (
  
        
    
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <HeroSection />
        <Grid />

        <Skills />
        <TitleText title="Recent Projects" />
        <RecentProjects />
        

        {/* <Clients /> */}
        
        <TitleText title="Work Experience" />

        <Experience />
        
        <TitleText title="My Approach" />

        <Approach />
        

        <Footer />
        

    </div>
  </main>
    
    
    
    
    
    
    
  )
  
}
