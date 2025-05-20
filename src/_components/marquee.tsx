"use client"
import {motion} from 'framer-motion'
import React from 'react'
const companies = [
  {
    "name": "ChatGPT",
    "image_url": "https://static.cdnlogo.com/logos/c/52/chatgpt.svg"
  },
  {
    "name": "Spotify",
    "image_url": "https://www.kindpng.com/picc/m/108-1084830_spotify-logo-png-download-transparent-png.png"
  },
  {
    "name": "Uber",
    "image_url": "https://www.kindpng.com/picc/m/338-3385200_uber-logo-hd-png-download.png"
  },
  {
    "name": "Nividia",
    "image_url": "https://imgs.search.brave.com/QE41F2xw_77ga0-qXsBWD1j-4AI7qA7WKAdON1Nqgac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E0L05WSURJQV9s/b2dvLnN2Zw"
  },
  {
    "name": "Hue",
    "image_url": "/hue.png"
  },
  {
    "name": "Google Nest",
    "image_url": "/googlenest.png"
  }
]
const Marquee = () => {
  return (
   <div className='mask-gradient overflow-hidden w-full'>
     <motion.div 
      animate={{ x: ["0%", "-105.5%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
    className='flex  items-center justify-between gap-[8.5rem] overflow-visible'>
        {[...companies,...companies].map((company,i)=>{
            return(
                <div title={company.name} key={i} className='flex shrink-0 items-center gap-2'>
                        <img src={company.image_url} className=' h-10 object-cover' alt={company.name} />
                </div>
            )
        })}
    </motion.div>
   </div>
  )
}

export default Marquee