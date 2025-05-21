import React from 'react'
import { EB_Garamond} from "next/font/google";
import CTABUTTON from './cta-button';
const font = EB_Garamond({
    subsets:["cyrillic", "cyrillic-ext", "greek","greek-ext","latin","latin-ext","vietnamese"]
})
const MARLOINACTION = () => {
  return (
 <div className='py-10 flex justify-between'>
        <div className="header">
            <div className="left">
                     <h3 className={`${font.className} text-5xl`}>
             Ready to see <br/>Marlo in actions?
            </h3>
             <p className='text-sm text-zinc-400 py-5'>
                    See how Marlo turns noisy GTM data into revenue-driving clarity <br/> in minutes - not months
                </p>
                      <div className="actions flex items-center gap-3">
               <CTABUTTON text='learn more'/>
                <button className='hover:underline px-4 py-2 uppercase cursor-pointer'>See how it works</button>
            </div>
            </div>
            <div className="right">
               
            </div>
        </div>
        <div className='md:flex mx-auto  hidden lg:px-20  lg:bg-[#FDD402] rounded-lg'>
          <img src="/action.jpg" className='h-[350px] rotate-90 object-cover' alt="" />
        </div>
    </div>
  )
}

export default MARLOINACTION