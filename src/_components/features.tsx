import React from 'react'
import { EB_Garamond} from "next/font/google";
import CTABUTTON from './cta-button';
import Image from 'next/image';
import { CookieIcon } from 'lucide-react';
const font = EB_Garamond({
    subsets:["cyrillic", "cyrillic-ext", "greek","greek-ext","latin","latin-ext","vietnamese"]
})
const cards =[
  {
    "title": "Native Integrations",
    "description": "One-click integrations with your entire tech stack, ad platforms, and data warehouses."
  },
  {
    "title": "Cookieless Tracking",
    "description": "You heard right — we are not using any cookies. Track more users, more accurately."
  },
  {
    "title": "Meet Marlo",
    "description": "Marlo is an AI analyst that analyzes your dashboards, finds new growth opportunities."
  }
]
const Features = () => {
  return (
    <div className='py-5 pt-10'>
          <h3 className={`${font.className} text-center text-[7vw] sm:text-[3.4vw] leading-none`}>
              Insights that move pipeline - not just pixels
            </h3>
            <p className='text-zinc-500 text-center mx-auto leading-none max-w-xl  py-2 '>Marlo&apos; AI agents work aground the check to uncover revenue signals, analyze your GTM engine , and deliver actions - not just data</p>
             <CTABUTTON text='Learn more' className='mx-auto mt-2'/>
             <div className="cards flex flex-wrap items-center justify-around gap-5 py-2 pt-10">
                   <div className="card flex mx-auto h-fit min-h-[420px] rounded-xl flex-1 max-w-[400px] bg-[#e3f3eb] shadow-md p-4   flex-col ">
                    <div className="top flex-1 w-full gap-2 px-2 relative overflow-hidden flex items-center justify-center">
                      <div className="left-circle sm:flex hidden opacity-60 shrink-0 bg-white p-7 rounded-full">
                        <div className='rounded-full bg-gradient-to-tl from-[#7afdbc] shadow-md p-2 flex items-center justify-center relative to-[#ecf3ef] '>
                      <img src="https://imgs.search.brave.com/DOLppDak62hL22FuKysxCIuPVGCMx-X_o6S5R3_V87Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIxLzA1/OS84Mjcvbm9uXzJ4/L2NoYXRncHQtbG9n/by1jaGF0LWdwdC1p/Y29uLW9uLXdoaXRl/LWJhY2tncm91bmQt/ZnJlZS12ZWN0b3Iu/anBn"
                      className='w-4.5 h-4.5 object-contain mix-blend-multiply opacity-80'
                      alt="" />
                        </div>
                      </div>
                      <div className="main-circle shrink-0 bg-white p-15 rounded-full">
                        <div className='rounded-full bg-gradient-to-tl from-[#7afdbc] shadow-md p-3 flex items-center justify-center relative to-[#ecf3ef] '>
                          <Image src={'/logo.png'} width={50} height={50} className='rotate-90 p-2 opacity-80' alt='logo'/>
                        </div>
                      </div>
             <div className="right-circle sm:flex hidden shrink-0 opacity-60 bg-white p-7 rounded-full">
                        <div className='rounded-full bg-gradient-to-tl from-[#7afdbc] shadow-md p-2 flex items-center justify-center relative to-[#ecf3ef] '>
                      <img src="https://brandlogos.net/wp-content/uploads/2025/02/deepseek_logo_icon-logo_brandlogos.net_s5bgc.png"
                      className='w-4.5 h-4.5 object-contain mix-blend-multiply opacity-80'
                      alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="bottom flex flex-col py-4 items-center">
                      <p className={`${font.className} text-2xl font-semibold`}>
                        Meet Marlo
                      </p>
                      <p className='text-center max-w-sm  text-zinc-500'>
                        Marlo is an AI analyst that analyzes your dashboards, finds new growth opportunities.
                      </p>
                    </div>
                   </div>
                     <div className="card flex mx-auto h-fit min-h-[420px] rounded-xl flex-1 max-w-[400px]  bg-[#FFF7E0] shadow-md p-4   flex-col ">
                    <div className="top flex-1 gap-2 px-2 relative flex-col flex pt-10">
                         <div className="main-toast z-10 flex h-fit items-center gap-3 bg-white pl-3 pr-7 py-4 rounded-full shadow-md">
                           <div className='bg-gradient-to-tl from-yellow-500 to-yellow-100 p-3 rounded-full'>
                            <CookieIcon/>
                           </div>
                          <div >
                             <p className={`${font.className} text-xl font-semibold leading-none`}>No cookies here</p>
                           <p className=' text-zinc-500'>We dont&apos;t need cookies to make</p>
                          </div>
                         </div>
                               <div className="sub-toast -translate-y-[60%] z-[5] scale-80 opacity-70 flex h-fit items-center gap-3 bg-white pl-3 pr-7 py-4 rounded-full shadow-md">
                          <div className='opacity-0 pointer-none:'>
                             <p className={`${font.className} text-xl font-semibold leading-none`}>No cookies here</p>
                           <p className=' text-zinc-500'>We dont&apos;t need cookies to make</p>
                          </div>
                         </div>
                                 <div className="sub-toast -translate-y-[122%] scale-50 opacity-50 flex h-fit items-center gap-3 bg-white pl-3 pr-7 py-4 rounded-full shadow-md">
                          <div className='opacity-0 pointer-none:'>
                             <p className={`${font.className} text-xl font-semibold leading-none`}>No cookies here</p>
                           <p className=' text-zinc-500'>We dont&apos;t need cookies to make</p>
                          </div>
                         </div>
                    </div>
                    <div className="bottom flex flex-col py-4 items-center">
                      <p className={`${font.className} text-2xl font-semibold`}>
                     Cookieless Tracking
                      </p>
                      <p className='text-center max-w-sm  text-zinc-500'>
                        You heard right — we are not using any cookies. Track more users, more accurately.
                      </p>
                    </div>
                   </div>
                     <div className="card flex mx-auto h-fit min-h-[420px] rounded-xl flex-1 max-w-[400px]  w-full bg-[#FBEEFF] shadow-md p-4 px-0   flex-col ">
                    <div className="top flex-1 overflow-hidden gap-2 relative flex-col flex ">
                        <img src="/card-carsol.png" className='object-cover' alt="" />
                    </div>
                    <div className="bottom px-4 flex flex-col py-4 items-center">
                      <p className={`${font.className} text-2xl font-semibold`}>
                     {cards[0].title}
                      </p>
                      <p className='text-center max-w-sm  text-zinc-500'>
                     {cards[0].description}
                      </p>
                    </div>
                   </div>
             </div>
    </div>
  )
}

export default Features