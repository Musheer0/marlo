import Image from 'next/image';
import React from 'react'
const menuLinks = [
  [
    { label: "Products", href: "#" },
    { label: "Features", href: "#" },
    { label: "Sign up", href: "#" },
    { label: "Career", href: "#" },
    { label: "Integration", href: "#" },
  ],
  [
    { label: "Company", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact", href: "#" },
  ],
  [
    { label: "Resources", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Style Guide", href: "#" },
    { label: "FAQs", href: "#" },
  ],
];
const Footer = () => {
  return (
   <footer className='flex items-start justify-between pb-10 py-20'>
    <div className="company">
     <div className="logo flex items-start gap-1">
       <Image src='/logo.png' width={65} height={70} className='rotate-90' alt='logo'/>
        <h4 className='text-[5vw] leading-none'>
            Marlo
        </h4>
     </div>
        <p className='text-sm max-w-lg text-zinc-600'>Marlo&apos;s  Ai agents surface hidden revenue opportunities, automate deep reporting, and give you real time account-level insights.</p>
    </div>
    <div className="links flex items-start gap-40">
        {menuLinks.map((menu,i)=>{
            return(
                <div key={i}>
                  <ul  className='flex flex-col gap-5'>
                      {menu.map((link,i)=>{
                        return(
                            <li key={i} className='hover:underline'>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        )
                    })}
                  </ul>
                </div>
            )
        })}
    </div>
   </footer>
  )
}

export default Footer