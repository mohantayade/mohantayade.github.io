"use client"
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { HoverEffect } from "./ui/card-hover-effect";

import { BackgroundBeams } from "./ui/background-beams";


export function Skill() {
  return (
    <div className="sm:my-20 md:my-44">
   <BackgroundBeams />
      <h2 className="text-center text-4xl font-bold">SKILL 🧠</h2>
<div className="max-w-5xl mx-auto px-8 ">
     

   
     <HoverEffect items={projects}  />
     
   </div>
    </div>
    
    
  )
}



export const projects = [
  {
    title: "FRONT-END",
    description:
      "Proficient in HTML, CSS, and Sass, with a keen eye for design and usability. Experienced in version control with Git and adept at collaborating on GitHub. Specialized in Tailwind CSS for streamlined and efficient styling solutions. Additionally, skilled in React JS for building dynamic and interactive web applications. 🎨👨‍💻✨",
    link: "#",
  },
  {
    title: "BACK-END",
    description:
      "Experienced in JavaScript development with expertise in utilizing Express for backend development, MongoDB and Mongoose for database management, and Next.js for building powerful and efficient server-side rendered React applications. 🚀💻🔥",
    link: "#",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Passionate about design, particularly in UX, UI, and web realms. Proficient in crafting visually appealing and user-friendly experiences. Skilled in utilizing Figma, Photoshop, Webflow, and Sketch to bring design concepts to life with precision and creativity. 🎨💻✨",
    link: "#",
  },
 
];

