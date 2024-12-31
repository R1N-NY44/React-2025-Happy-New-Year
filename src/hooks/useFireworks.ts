import { useState, useEffect } from 'react';

export function useFireworks() {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const isNewYearEve = now.getDate() === 31 && now.getMonth() === 11;
    const isNewYearDay = now.getDate() === 1 && now.getMonth() === 0;

    const shouldShowFireworks =
      (isNewYearEve && currentHour === 23 && currentMinute >= 58) ||
      (isNewYearDay && currentHour === 0 && currentMinute <= 2);

    setShowFireworks(shouldShowFireworks);
  }, []);

  const triggerFireworks = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 10000);
  };

  return { showFireworks, triggerFireworks };
}