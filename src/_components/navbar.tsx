import Image from 'next/image'
import React from 'react'

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
  return (
    <nav className='flex  items-center justify-between'>
     <div className="logo hidden sm:flex items-center gap-1 justify-center">
           <Image src={'/logo.png'} width={32} height={32} alt='logo' className=' rotate-90'/>
           <p className='text-xl pt-2'>Marlo</p>
     </div>
    <div className="links absolute top-0 left-0 sm:w-fit w-full sm:relative flex items-center gap-2 bg-zinc-950 pl-5 overflow-hidden rounded-lg rounded-t-none" >
        <ul className='flex items-center gap-10 p-2  text-zinc-100  '>
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
    </nav>
  )
}

export default Navbar