import React from 'react';

interface FlipCardProps {
  digit: number;
  label: string;
}

export function FlipCard({ digit, label }: FlipCardProps) {
  const formattedDigit = digit.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center mx-2">
      <div className="relative w-24 h-32">
        <div className="absolute w-full h-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl">
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl font-bold text-white">{formattedDigit}</span>
          </div>
          <div className="absolute w-full h-[1px] bg-white/20 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <span className="mt-2 text-white/80 text-sm uppercase tracking-widest">{label}</span>
    </div>
  );
}