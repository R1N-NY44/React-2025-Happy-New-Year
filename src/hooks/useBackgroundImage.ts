import { useState } from 'react';

// Curated list of beautiful New Year themed images
const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2960', // City Fireworks
  'https://images.unsplash.com/photo-1514862200813-45f467a32cd4?q=80&w=2960', // Tokyo Night
  'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2960', // Temple Night
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2960', // Mountain Night
  'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=2960', // City Lights
  'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2960', // Japanese Temple
  'https://images.unsplash.com/photo-1483425571841-9662f86c7154?q=80&w=2960', // Celebration
];

export function useBackgroundImage() {
  const [backgroundUrl, setBackgroundUrl] = useState(BACKGROUND_IMAGES[0]);
  const [lastIndex, setLastIndex] = useState(0);

  const changeBackground = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
    } while (newIndex === lastIndex); // Ensure we don't show the same image twice

    setLastIndex(newIndex);
    setBackgroundUrl(BACKGROUND_IMAGES[newIndex]);
  };

  return { backgroundUrl, changeBackground };
}