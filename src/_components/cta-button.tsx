import { ArrowRight } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const CTABUTTON = ({text,className}:{text?:string,className?:string}) => {
  return (
   <button className={twMerge(
    className,
    'text-white flex items-center gap-2 cursor-pointer hover:opacity-90 bg-zinc-950 pl-4  pr-2 py-2 rounded-full uppercase'
   )}>
                  <span className='pr-4'>  {text ? text: 'Book a Demo'}</span>
                    <span className='p-1.5 rounded-full bg-yellow-500'>
                        <ArrowRight/>
                    </span>
                </button>
  )
}

export default CTABUTTON