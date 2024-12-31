import React from 'react';
import { FlipCard } from './FlipCard';

interface CountdownDisplayProps {
  hours: number;
  minutes: number;
  seconds: number;
  show: boolean;
}

export function CountdownDisplay({ hours, minutes, seconds, show }: CountdownDisplayProps) {
  return (
    <div className={`transition-all duration-1000 ease-in-out transform ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[200%]'
    }`}>
      <div className="flex space-x-4">
        <FlipCard digit={hours} label="Hours" />
        <FlipCard digit={minutes} label="Minutes" />
        <FlipCard digit={seconds} label="Seconds" />
      </div>
      <h2 className="text-center mt-8 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
        bg-clip-text text-transparent">
        New Year 2025
      </h2>
    </div>
  );
}