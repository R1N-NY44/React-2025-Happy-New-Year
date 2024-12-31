import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYear = new Date('2025-01-01T00:00:00');
      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds, isComplete: false });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, isComplete: true });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}