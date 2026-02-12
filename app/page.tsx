"use client";

import React from "react";
import Link from "next/link";
import Particles from "../components/magicui/particles";

export default function Home() {
  
  const responsiveName = "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-500 bg-clip-text text-5xl sm:text-7xl md:text-8xl lg:text-7xl font-bold leading-none text-transparent drop-shadow-sm px-4";

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      
      <div className="z-9 flex flex-col items-center gap-7 text-center px-4">
        <h1 className={responsiveName}>
          Aaron James Aquino
        </h1>

        <Link href="/portfolio">
          <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
            View Portfolio
          </button>
        </Link>
      </div>

      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        quantity={150}
        staticity={30}
        ease={50}
        color="#ffffff"
        refresh
      />
    </main>
  );
}