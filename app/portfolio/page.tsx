"use client";

import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { 
  BellIcon, 
  FileTextIcon, 
  GlobeIcon, 
  InputIcon,
  CalendarIcon 
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-black" />, // Pure black background
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-black" />,
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-black" />,
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when someone shares a file.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-black" />,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent text-5xl font-bold mb-10 text-center">
         About
        </h1>
        
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}