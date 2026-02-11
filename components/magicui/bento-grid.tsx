import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Siguraduhin na may 'export' keyword dito
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

// Siguraduhin na may 'export' keyword din dito
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
      // "All Black" Style na may manipis na border katulad ng image mo
      "bg-black border border-white/[0.1]", 
      "transform-gpu dark:bg-black",
      className,
    )}
  >
    {/* Nilinis ang background layer */}
    <div className="absolute inset-0 z-0">{background}</div>
    
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* Icon: Mas subtle na slate color */}
      <Icon className="h-10 w-10 origin-left transform-gpu text-slate-500 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white" />
      
      {/* Text styles na match sa image */}
      <h3 className="text-xl font-semibold text-slate-200">
        {name}
      </h3>
      <p className="max-w-lg text-slate-500 text-sm">
        {description}
      </p>
    </div>

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
    
    {/* Subtle glow pag na-hover */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.03]" />
  </div>
);