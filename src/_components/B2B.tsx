import React from 'react'
import { EB_Garamond} from "next/font/google";
import CTABUTTON from './cta-button';
const font = EB_Garamond({
    subsets:["cyrillic", "cyrillic-ext", "greek","greek-ext","latin","latin-ext","vietnamese"]
})
const cards = [
  {
    "title": "Qualified Deals",
    "description": "This quarter"
  },
  {
    "title": "CAC",
    "description": "This quarter"
  },
  {
    "title": "Inbound Deal ACV",
    "description": "This quarter"
  },
  {
    "title": "Inbound Pipeline",
    "description": "This quarter"
  }
]
const B2B = () => {
  return (
    <div className='py-10'>
        <div className="header flex  justify-between">
            <div className="left flex-1">
                     <h3 className={`${font.className} text-5xl`}>
             B2B marketing and <br/> sales teams love Marlo
            </h3>
            <CTABUTTON text='learn more' className='my-3'/>
            </div>
            <div className="right max-w-sm">
                <p>
                    Marlo&apos;s helps Marketing teams report on pipeline from the first imppresion to closed won and slaes teams to automate their manual workflows with AI workflows
                </p>
            </div>
        </div>
        <div className="cards w-full py-10">
         <div className="flex items-center w-full gap-4 flex-wrap mx-auto">
        {/* Qualified Deals */}
        <div className="bg-yellow-100 flex-1 h-[250px] p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-600">Qualified Deals</p>
          <p className="text-xs text-green-500">+5%</p>
          <p className="text-5xl font-semibold pt-10">$6.3M</p>
        </div>

        {/* CAC */}
        <div className="bg-green-100 flex-1 h-[250px]  p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-600">CAC</p>
          <p className="text-xs text-teal-500">-45%</p>
          <p className="text-5xl font-semibold pt-10">$308.34</p>
        </div>

        {/* Inbound Deal ACV */}
        <div className="bg-purple-100 flex-1 h-[250px]   p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-600">Inbound Deal ACV</p>
          <p className="text-xs text-purple-500">+15%</p>
          <p className="text-5xl font-semibold pt-10">$272.2K</p>
        </div>

        {/* Inbound Pipeline */}
        <div className="bg-yellow-100 flex-1 h-[250px]  p-6 rounded-xl shadow-sm">
          <p className="text-sm text-gray-600">Inbound Pipeline</p>
          <div className="relative w-50 h-40 mx-auto my-2">
            <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
              <path
                className="text-yellow-300"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="75, 100"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-semibold pt-10">$15.0M</span>
            </div>
          </div>
        </div>
      </div>

        </div>
    </div>
  )
}

export default B2B