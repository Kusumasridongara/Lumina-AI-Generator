"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen gradient-mesh selection:bg-primary/30 scroll-smooth">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
                <Sparkles className="w-6 h-6 text-white" />
             </div>
             <span className="text-xl font-black tracking-tight text-slate-900">
               AI Generator
             </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
             <a href="#features" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Features</a>
             <a href="#pricing" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Pricing</a>
             <a href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Docs</a>
             <Link href="/dashboard">
               <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-sm font-bold transition-all hover:shadow-xl hover:shadow-slate-200">
                 Launch App
               </Button>
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        {/* ... (Hero content remains same) ... */}
        <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
               <span className="text-xs font-black text-primary uppercase tracking-widest">New Engine v4.0</span>
               <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              Produce Content <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-fuchsia-500 to-primary bg-[length:200%_auto] animate-gradient">with AI Magic.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12">
                The ultimate AI-powered content generator for modern creators. 
                Transform your ideas into high-quality blogs, social posts, and ad copies in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/dashboard">
                  <Button className="rounded-2xl bg-primary hover:bg-primary/90 text-white px-10 py-8 text-lg font-bold shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1">
                    Start Creating Free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="#features">
                   <Button variant="ghost" className="rounded-2xl text-slate-600 px-10 py-8 text-lg font-bold hover:bg-white/50 border border-transparent hover:border-slate-200 transition-all">
                     View Templates
                   </Button>
                </a>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 pb-32 scroll-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Smart Templates', desc: 'Over 50+ specialized templates for every content niche.', icon: Box, color: 'from-blue-500 to-indigo-600' },
            { title: 'Lightning Fast', desc: 'Generate long-form content in under 5 seconds with Gemini 1.5.', icon: Zap, color: 'from-amber-400 to-orange-500' },
            { title: 'Neural Precision', desc: 'Advanced AI models crafted for human-like natural language.', icon: Cpu, color: 'from-emerald-400 to-teal-600' },
            { title: 'Instant Export', desc: 'Copy, edit, and export your content directly to your platform.', icon: Sparkles, color: 'from-primary to-fuchsia-600' }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg shadow-inherit`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 pb-32 scroll-mt-32">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Simple, transparent pricing</h2>
           <p className="text-slate-500 font-medium text-lg">Choose the plan that's right for your content needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="glass-panel p-10 rounded-[2.5rem] border-slate-200">
             <h3 className="text-xl font-bold text-slate-800 mb-2">Free</h3>
             <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-slate-900">$0</span>
                <span className="text-slate-500 text-sm font-bold">/month</span>
             </div>
             <ul className="space-y-4 mb-10">
                {[ '10,000 Words/Month', '50+ Content Templates', 'Unlimited Download / Copy', '1 Month of History' ].map(f => (
                  <li key={f} className="flex gap-3 text-slate-600 font-medium text-sm">
                    <Sparkles className="w-4 h-4 text-primary" /> {f}
                  </li>
                ))}
             </ul>
             <Link href="/dashboard" className="block text-center w-full py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-all">
                Get Started
             </Link>
          </div>

          {/* Monthly Plan */}
          <div className="glass-panel p-10 rounded-[2.5rem] border-primary/30 bg-primary/5 shadow-2xl shadow-primary/10 relative overflow-hidden">
             <div className="absolute top-5 right-5 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Most Popular</div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">Monthly</h3>
             <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-slate-900">$9.99</span>
                <span className="text-slate-500 text-sm font-bold">/month</span>
             </div>
             <ul className="space-y-4 mb-10">
                {[ '1,00,000 Words/Month', '50+ Content Templates', 'Unlimited Download / Copy', 'Lifetime History Access' ].map(f => (
                  <li key={f} className="flex gap-3 text-slate-600 font-medium text-sm">
                    <Sparkles className="w-4 h-4 text-primary" /> {f}
                  </li>
                ))}
             </ul>
             <Link href="/dashboard" className="block text-center w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20">
                Subscribe Now
             </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative p-12 md:p-20 overflow-hidden rounded-[3rem] text-center bg-slate-950 border border-white/10 shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-fuchsia-500/20 blur-3xl opacity-50" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                Ready to boost <br />
                <span className="text-primary">your workflow?</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-12">
                Join 10,000+ creators using AI Generator to scale their content production and save hours of work every day.
              </p>
              <Link href="/dashboard">
                <Button className="rounded-2xl bg-white hover:bg-slate-100 text-slate-950 px-12 py-8 text-xl font-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Get Started for Free
                </Button>
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
}