import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // EFFECT: Semi-transparent black na may blur para makita ang Particles sa likod
      "bg-black/40 border border-white/[0.1] backdrop-blur-md", 
      "transform-gpu transition-all duration-300 hover:border-white/[0.2] hover:bg-black/60",
      className,
    )}
  >
    {/* Background layer */}
    <div className="absolute inset-0 z-0">{background}</div>
    
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* Icon: Small and minimalist katulad ng niliitan natin kanina */}
      <Icon className="h-8 w-8 origin-left transform-gpu text-slate-500 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white" />
      
      {/* Name and Description: Naka-match sa minimalist sizes */}
      <h3 className="text-xl font-bold text-slate-200">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-slate-500">
        {description}
      </p>
    </div>

    {/* Button/CTA layer */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-slate-400 hover:text-white">
        <a href={href} className="flex items-center">
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    
    {/* HOVER GLOW: Puting anino na lalabas pag itinapat ang mouse, gaya sa main page button */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.05]" />
  </div>
);