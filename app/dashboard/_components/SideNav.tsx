"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        // {
        //     name:'Billing',
        //     icon:WalletCards,
        //     path:'/dashboard/billing'
        // },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/settings'
        },

    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className="h-screen relative p-6 glass-sidebar text-white">
        <div className='flex items-center gap-3 px-2'>
            <div className='p-2 bg-gradient-to-br from-primary to-fuchsia-500 rounded-xl shadow-lg shadow-primary/20'>
                <Image src={'/logo.svg'} alt='logo' width={30} height={30} className='brightness-0 invert' />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                AI Content
            </span>
        </div>
        
        <div className='mt-10 px-2'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path} key={menu.name}>
                    <div className={`flex gap-3 mb-4 p-4 rounded-xl
                    cursor-pointer items-center transition-all duration-300 group
                    ${path==menu.path 
                        ? 'bg-gradient-to-r from-primary/20 to-fuchsia-500/20 border border-white/10 text-white shadow-[0_0_20px_rgba(79,70,229,0.2)]' 
                        : 'text-white/50 hover:text-white hover:bg-white/5'}
                    `}>
                        <menu.icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 
                            ${path==menu.path ? 'text-primary' : ''}`}/>
                        <h2 className='text-sm font-medium tracking-wide'>{menu.name}</h2>
                        {path==menu.path && (
                            <div className='ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#4F46E5]' />
                        )}
                    </div>
                </Link>
            ))}
        </div>

        <div className='absolute bottom-8 left-0 w-full px-6'>
             <UsageTrack/>
        </div>
    </div>
  )
}

export default SideNav