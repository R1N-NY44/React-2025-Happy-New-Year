import React from 'react';
import { Sparkles } from 'lucide-react';

interface FireworksButtonProps {
  onClick: () => void;
}

export function FireworksButton({ onClick }: FireworksButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-sm 
        text-white px-4 py-2 rounded-full border border-white/10 shadow-lg 
        transition-all duration-300 flex items-center gap-2 group"
    >
      <Sparkles className="w-5 h-5 group-hover:animate-spin" />
      <span>Launch Fireworks</span>
    </button>
  );
}