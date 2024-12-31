import React from 'react';

interface NewYearMessageProps {
  show: boolean;
}

export function NewYearMessage({ show }: NewYearMessageProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${
      show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-full'
    }`}>
      <div className="text-center">
        <h1 className="text-8xl font-bold">
          <span className="block mb-4 text-white animate-[bounce_1.5s_ease-in-out_infinite]">
            Happy
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 
            animate-[pulse_2s_ease-in-out_infinite] text-9xl">
            New Year
          </span>
          <span className="block mt-4 text-7xl bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 
            bg-clip-text text-transparent animate-[bounce_2s_ease-in-out_infinite]">
            2025!
          </span>
        </h1>
      </div>
    </div>
  );
}