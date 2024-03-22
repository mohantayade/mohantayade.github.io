"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { Button } from "./ui/moving-border";
import Link from "next/link";
function ProjectPage() {
  return (
    
      <div className="py-12 border-r-gray-700 w-full">
        <div className="flex justify-center">
<h2 className="text-4xl font-bold">PROJECT
🔥</h2>
        </div>
        <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-7 sm:px-10 md:px-24 ">
            <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10  bg-white dark:bg-zinc-900">
        <Image
          src={`/exom.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-lg "
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          E-com Project
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
        <button className="px-10 bg-gray-800 rounded-[30px]">GitHub</button>
        <Button>Live View</Button>   
        </div>
        
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/exom.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          E-com Project
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
        <button className="px-10 bg-gray-800 rounded-[30px]">GitHub</button>
        <Button>Live View</Button>   
        </div>
        
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/exom.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          E-com Project
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
        <button className="px-10 bg-gray-800 rounded-[30px]">GitHub</button>
        <Link href='https://google.com'><Button>Live View</Button></Link>
           
        </div>
        
      </BackgroundGradient>

      
            </div>
        
        </div>
      
    </div>
    
  )
}

export default ProjectPage
