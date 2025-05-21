"use client"
import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {motion, useAnimationControls } from 'framer-motion'
const links = [
    {
        label:'Product',
        href:''
    },
        {
        label:'Pricing',
        href:''
    },
        {
        label:'Resources',
        href:''
    },
        {
        label:'Blogs',
        href:''
    },
        {
        label:'Sign-in',
        href:''
    },

]
const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);
    const navbarAnimationControls = useAnimationControls()
    useEffect(()=>{
      if(isOpen){
        navbarAnimationControls.start({
            height:'100%',
            opacity:1
        })
      }
      else{
               navbarAnimationControls.start({
            height:'0%',
            opacity:0.7
        })
      }
    },[isOpen])
  return (
    <nav className='flex items-center justify-between'>
     <div className="logo flex items-center gap-1 justify-center">
           <Image src={'/logo.png'} width={32} height={32} alt='logo' className=' rotate-90'/>
           <p className='text-xl pt-2'>Marlo</p>
     </div>
    <div className="links  hidden  items-center gap-2 lg:flex bg-zinc-950 pl-5 overflow-hidden rounded-lg lg:rounded-t-none" >
    
        <ul className='flex items-center gap-10 p-2 lg:flex-row flex-col    justify-between text-zinc-100  '>
            {links.map((link)=>{
                return(
                    <li key={link.label}>
                        <a href={link.href} className='hover:underline'>{link.label}</a>
                    </li>
                )
            })}
        <button className='bg-yellow-500 px-5 rounded-lg py-2'>Sign-up</button>
        </ul>
    </div>

    {/* responsive links */}
    {!isOpen && <button
    onClick={()=>{
        setIsOpen(true)
    }}
    className='p-2 hover:bg-zinc-900/10 rounded-lg'><MenuIcon/></button>}
  <motion.div
  animate={navbarAnimationControls}
  initial={{
    height:0,
    opacity:0.7
  }}
   transition={
       {   type: "spring",
          damping: 20,
          stiffness: 100,}
        }
  className="links top-0 z-50 left-0 lg:hidden   lg:w-fit w-full lg:flex-row flex-col lg:relative flex fixed items-center gap-2 lg:h-fit h-full bg-zinc-950 pl-5 overflow-hidden " >
        <button onClick={()=>{
            setIsOpen(!isOpen)
        }} className='text-white w-full cursor-pointer p-5 flex- items-end justify-end'>
            <XIcon className='ml-auto'/>
        </button>
        <ul className='flex items-center gap-10 p-2 lg:flex-row flex-col    justify-between text-zinc-100  '>
            {links.map((link)=>{
                return(
                    <li key={link.label}>
                        <a href={link.href} className='hover:underline'>{link.label}</a>
                    </li>
                )
            })}
        <button className='bg-yellow-500 px-5 rounded-lg py-2'>Sign-up</button>
        </ul>
    </motion.div>
    </nav>
  )
}

export default Navbar