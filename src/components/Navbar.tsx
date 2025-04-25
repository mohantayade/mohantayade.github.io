'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Button } from "./ui/moving-border"


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href='/' className="dark:text-white text-black">Home</Link>
{/* YE Hide Kel Ahe For future Update */}
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/" className="text-white">Web Development</HoveredLink>
            <HoveredLink href="/" className="text-white">UI/UX Design</HoveredLink>
            <HoveredLink href="/" className="text-white">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/" className="text-white">Branding</HoveredLink>
          </div>
        </MenuItem> */}

        <MenuItem setActive={setActive} active={active} item="Playlist">
          <div className=" text-xs lg:text-sm grid grid-rows-1 lg:grid-cols-2 gap-4 p-2">
            
            <ProductItem
              title="AstroJS Course"
              href="https://www.youtube.com/playlist?list=PLIkZcFWx6huR1EDzBWyMQaI6iXYZ4Bcyb"
              src="https://i.ytimg.com/vi/1Ezaza6TXzI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCnG8WwIKuW14DjKDLbD0GgKxW7WQ"
              description="Astro Js Course In Hindi You Can Learn Astrojs Framework basic To Advance In this Course"
            />
         
            
            <ProductItem
              title="React-Native Course"
              href="https://www.youtube.com/playlist?list=PLIkZcFWx6huTSua4G4d5IEsQ0FdbZN6ck"
              src="https://i.ytimg.com/vi/peiMgw5CXEA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5JO-A5dpgA0UedBm7FBJSdvvl-A"
              description="This Course Is For Creating Android App With Your React Snippet And Learn The React Native Basic to Advance"
            />
            <ProductItem
              title="Tech Tips"
              href="https://www.youtube.com/playlist?list=PLIkZcFWx6huSD4vqXuOWwJ7VyFXK2j0py"
              src="https://i.ytimg.com/vi/uy8k7AYaAuc/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAYLOBzD3g8KPnVIlv66lcro287Sw"
              description="In This Playlist Any New Tips trick Video Uploaded Regarding To Coding"
            />
            <ProductItem
              title="New Course Coming Soon"
              href="https://www.youtube.com/channel/UCEqbbAqz0oStaFxPrkdY_jw"
              src="https://yt3.googleusercontent.com/KQQZdA-7p9Y6nydAeWOolXJL38tJ-HoX0aVZjfr7pZiyUvHs1ljkHtDWLZMg0idTeuMBotJhj48=s88-c-k-c0x00ffffff-no-rj"
              description="New Course Coming Soon You Can Follow Instagram For More INFO"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink className="text-white" href="https://twitter.com/@mohandevcode">Twitter</HoveredLink>
            <HoveredLink className="text-white" href="https://github.com/mohantayade">GitHub</HoveredLink>
            <HoveredLink className="text-white" href="https://www.linkedin.com/in/mohan-tayade/">Linkdin</HoveredLink>
            <HoveredLink className="text-white" href="https://www.instagram.com/mohan_tayade_/?hl=en">instagram</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
