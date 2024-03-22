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

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev" className="text-white">Web Development</HoveredLink>
            <HoveredLink href="/interface-design" className="text-white">UI/UX Design</HoveredLink>
            <HoveredLink href="/seo" className="text-white">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding" className="text-white">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            
            <ProductItem
              title="Algochurn"
              href=""
              src=""
              description="Prepare for tech interviews like never before."
            />
         
            
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink className="text-white" href="/email">Email</HoveredLink>
            <HoveredLink className="text-white" href="/github">GitHub</HoveredLink>
            <HoveredLink className="text-white" href="/linkdin">Linkdin</HoveredLink>
            <HoveredLink className="text-white" href="/instagram">instagram</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
