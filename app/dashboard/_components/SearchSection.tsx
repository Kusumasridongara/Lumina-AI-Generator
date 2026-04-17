import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='relative overflow-hidden p-16 flex flex-col justify-center items-center text-center'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5' />
        <div className='relative z-10 max-w-2xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 bg-clip-text'>
                Create Magic with AI
            </h2>
            <p className='text-slate-500 text-lg mb-8 font-medium'>
                Choose from over 50+ templates to generate high-quality content instantly.
            </p>
            
            <div className='glass-panel p-2 rounded-2xl flex items-center gap-3 px-6 shadow-xl shadow-primary/5 border-primary/10 transition-all hover:border-primary/30 group'>
                <Search className='text-primary w-6 h-6 group-hover:scale-110 transition-transform' />
                <input type="text" placeholder='What do you want to create today?'
                onChange={(event)=>onSearchInput(event.target.value)}
                className='bg-transparent py-3 w-full outline-none text-slate-800 placeholder-slate-400 font-semibold'
                />
            </div>
            
            <div className='mt-8 flex flex-wrap justify-center gap-2'>
                {['Blog Post', 'Social Media', 'Code Helper', 'SEO'].map(tag => (
                   <span key={tag} className='px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:border-primary/50 hover:text-primary transition-all cursor-pointer'>
                     {tag}
                   </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SearchSection