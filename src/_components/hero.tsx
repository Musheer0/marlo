import React from 'react'
import { EB_Garamond} from "next/font/google";
import CTABUTTON from './cta-button';

const font = EB_Garamond({
    subsets:["cyrillic", "cyrillic-ext", "greek","greek-ext","latin","latin-ext","vietnamese"]
})
const reports = [
    {
        label: '70%',
        info: 'faster reporting'
    },
    {
        label:'200+',
        info: 'marketing teams'
    }
]
const Hero = () => {
  return (
    <div className='w-full flex  pt-10 h-full min-h-screen'>
        <div className="left flex-1 flex flex-col ">
            <h1 className={`${font.className} text-[10vw] sm:text-[5.4vw] leading-none`}>
                AI-Powered  <span className='opacity-30'>marketing</span> intellingence Turn chaos intro clarity
            </h1>
            <p className='text-zinc-700 leading-none max-w-xl py-10 '>
                Marlo&apos;s Ai agents hiddent revenue opportunities,automate deep reporting , and give you real time account level insights
            </p>
            <div className="actions flex-wrap flex items-center gap-3">
               <CTABUTTON/>
                <button className='hover:underline px-4 py-2 uppercase cursor-pointer'>See how it works</button>
            </div>
            <div className="reports flex items-center gap-2 py-6">
                {reports.map((report, i)=>{
                    return(
                        <div key={i} className=' flex flex-col p-2 border-zinc-700 px-5 text-zinc-700 border rounded-xl items-center  py-4'>
                    <p className={`${font.className} text-3xl leading-none`}>{report.label}</p>
                    <p className='text-sm'>{report.info}</p>
                </div>
                    )
                })}
            </div>
            
        </div>
        <div className="right flex-1  h-full   max-w-1/2 hidden lg:flex items-center justify-center p-5">
            <img src="/hero-bg.png" className='w-[70%] mt-4 h-1/2 ' alt="" />
        </div>
    </div>
  )
}

export default Hero