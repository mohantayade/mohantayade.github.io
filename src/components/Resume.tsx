"use client";
import React from "react";
// import { BackgroundBeams } from "./ui/background-beams";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/moving-border";
import Link from "next/link";
export function Resume() {
  return (
    
          <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Explore the journey of a web developer.
        </h1>
        
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Empowering the web with innovative solutions.
        
        </p>
        
      </div>
      <div className="text-center mt-3">
        <Link href='https://google.com' className="z-40"><Button className="text-base ">Download Resume</Button></Link>
        </div>
     
    </div>
    
  
  );
}
