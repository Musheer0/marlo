import React from 'react'
import { EB_Garamond} from "next/font/google";
import CTABUTTON from './cta-button';
const font = EB_Garamond({
    subsets:["cyrillic", "cyrillic-ext", "greek","greek-ext","latin","latin-ext","vietnamese"]
})
const GTM = () => {
  return (
    <div className='pt-20 pb-5'>
      <h3 className={`${font.className} text-center text-[7vw] sm:text-[3.4vw] leading-none`}>
              All your GTM data in one place
            </h3>
             <CTABUTTON text='Learn more' className='mx-auto my-10 mb-20'/>
            <div className="product-screenshot p-3 px-[3.5rem] w-full overflow-hidden bg-zinc-300 rounded-xl shadow-lg">
              <img src="/gtm.jpg" className='rounded-lg object-cover translate-y-[3.5rem] shadow-md' alt="" />
            </div>
    </div>
  )
}

export default GTM