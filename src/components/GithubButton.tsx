import React from 'react';
import { Github } from 'lucide-react';

interface GithubButtonProps {
  url: string;
}

export function GithubButton({ url }: GithubButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-sm 
        text-white px-4 py-2 rounded-full border border-white/10 shadow-lg 
        transition-all duration-300 flex items-center gap-2 group"
    >
      <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span>By R1N-NY44</span>
    </a>
  );
}