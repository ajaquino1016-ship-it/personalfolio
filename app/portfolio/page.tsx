"use client";

import Link from "next/link"; 
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import Particles from "@/components/magicui/particles"; // Check mo kung tama ang path na ito
import { 
  GlobeIcon, 
  InputIcon,
  IdCardIcon,
  PersonIcon
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: PersonIcon,
    name: "About",
    description: "Aaron James Aquino | BSIT 2nd Year College at AMA Fairview. Passionate about building modern web applications.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-transparent" />, 
  },
  {
    Icon: InputIcon,
    name: "Projects",
    description: "Currently Working this as my first Project",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-transparent" />,
  },
  {
    Icon: GlobeIcon,
    name: "Services",
    description: "Still learning",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-transparent" />,
  },
  {
    Icon: IdCardIcon,
    name: "Contacts",
    description: "Working on it",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-transparent" />,
  },
];

export default function PortfolioPage() {
  return (
    // "relative" at "overflow-hidden" ay kailangan para sa Particles
    <main className="relative min-h-screen bg-black p-6 md:p-12 overflow-hidden">
      
      {/* 1. PARTICLES - Dapat nasa z-0 at absolute */}
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        quantity={150}
        staticity={30}
        ease={50}
        color="#ffffff"
        refresh
      />

      {/* 2. CONTENT - Dapat nasa z-10 para lumutang sa ibabaw ng particles */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="flex justify-start mb-10">
          <Link 
            href="/" 
            className="group cursor-pointer transition-transform hover:translate-x-1 active:scale-95"
          >
            <h1 className="bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent text-xl md:text-2xl font-bold text-left drop-shadow-sm">
              Back to Home
            </h1>
            <div className="h-[2px] w-0 bg-white/30 transition-all duration-500 group-hover:w-full" />
          </Link>
        </div>
        
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}