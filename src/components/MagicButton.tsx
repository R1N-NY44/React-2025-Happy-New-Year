import React from 'react';
import { Wand2 } from 'lucide-react';

interface MagicButtonProps {
  onClick: () => void;
}

export function MagicButton({ onClick }: MagicButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-sm 
        w-12 h-12 rounded-full border border-white/10 shadow-lg 
        transition-all duration-300 flex items-center justify-center group"
      title="Change Background"
    >
      <Wand2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </button>
  );
}