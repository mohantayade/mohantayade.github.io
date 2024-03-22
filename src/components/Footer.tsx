import { GithubIcon, InstagramIcon,  Linkedin,  TwitchIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div className='px-16 h-30 w-full '>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-2  my-10'>
       <div className='items-center justify-center flex gap-1'>
       <InstagramIcon/>
        <Link href='https://www.instagram.com/mohan_tayade_/?hl=en' className='flex gap-1 text-lg items-center'>
        Instagram
         </Link>
       </div>



        <div className='items-center justify-center flex gap-1'>
        <Linkedin/>
        <Link href='https://www.linkedin.com/in/mohan-tayade/' className='flex gap-1 text-lg items-center'>
       linkedin
         </Link>
        </div>



         <div className='items-center justify-center flex gap-1'>
         <GithubIcon/>
        <Link href='https://github.com/mohantayade'  className='flex gap-1 text-lg items-center'>
        GitHub
         </Link>
         </div>

<div className='items-center justify-center flex gap-1'>
<TwitchIcon/>
        <Link href='https://twitter.com/@mohandevcode'  className='flex gap-1 text-lg items-center'>
         Twitter
         </Link>
</div>
         
      </div>
      <div>
      <h3 className='text-center py-5'>Handcrafted by me ⓒ Mohan Tayade</h3>
      </div>
      
    </div>
  )
}

export default Footer
