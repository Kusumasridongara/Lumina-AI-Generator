import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
      <div className='p-6 h-full glass-panel flex flex-col gap-4 cursor-pointer 
      transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] 
      hover:border-primary/50 group rounded-2xl relative overflow-hidden'>
          
          <div className='absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors' />
          
          <div className='p-3 bg-white shadow-sm rounded-xl w-fit transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg'>
              <Image src={item.icon} alt='icon' width={40} height={40} className='aspect-square object-contain' />
          </div>
          
          <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-lg tracking-tight text-slate-800 group-hover:text-primary transition-colors'>
                {item.name}
              </h2>
              <p className='text-slate-500 text-sm leading-relaxed line-clamp-3'>
                {item.desc}
              </p>
          </div>

          <div className='mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0'>
              Try Now →
          </div>
      </div>
    </Link>
  )
}

export default TemplateCard