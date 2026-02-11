"use client";

import React from "react";
import Link from "next/link";
import Particles from "../components/magicui/particles";

export default function Home() {
  const newLocal = "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-white to-slate-500 bg-clip-text text-[6vw] font-bold leading-none text-transparent";
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Content Layer - Naka z-10 para laging nasa ibabaw */}
      <div className="z-10 flex flex-col items-center gap-8 text-center px-4">
        <h1 className={newLocal}>
          Aaron James Aquino
        </h1>

        {/* Eto ang importante: Ang Link component para sa navigation */}
        <Link href="/portfolio">
          <button className="px-10 py-4 rounded-full bg-white text-black font-semibold text-lg transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg shadow-white/10">
            View Portfolio
          </button>
        </Link>
      </div>

      {/* Background Layer - pointer-events-none para hindi humarang sa click */}
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