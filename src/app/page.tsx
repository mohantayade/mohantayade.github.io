import HeroSection from "@/components/HeroSection";
import ProjectPage from "@/components/ProjectPage";
import { Skill } from "@/components/Skill";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <div className="">
      <HeroSection/>
      <ProjectPage/>
      <Skill/>
      </div>
      
    </main>
  );
}
