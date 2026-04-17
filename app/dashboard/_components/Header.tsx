import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 glass-panel sticky top-0 z-50 flex justify-between items-center px-8'>
      <div className='flex gap-2 items-center p-2 border rounded-full bg-white/50 px-4 group transition-all hover:border-primary/30'>
        <Search className='text-primary group-hover:scale-110 transition-transform cursor-pointer'/>
        <input type='text' placeholder='Search...'
        className='outline-none bg-transparent text-sm font-medium placeholder:text-gray-400 w-full'
        />
      </div>
      <div className='flex gap-5 items-center'>
        <div className='hidden md:flex gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20'>
            <span className='text-xs font-semibold text-primary'>✨ Premium Plan</span>
        </div>
        <UserButton appearance={{ elements: { userButtonAvatarBox: 'border-2 border-primary/20 shadow-sm hover:border-primary transition-all duration-300' } }} />
      </div>
    </div>
  )
}

export default Header