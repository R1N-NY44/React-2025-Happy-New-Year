import React from 'react';
import { Fireworks } from './components/Fireworks';
import { FireworksButton } from './components/FireworksButton';
import { MagicButton } from './components/MagicButton';
import { CountdownDisplay } from './components/CountdownDisplay';
import { NewYearMessage } from './components/NewYearMessage';
import { useFireworks } from './hooks/useFireworks';
import { useBackgroundImage } from './hooks/useBackgroundImage';
import { useCountdown } from './hooks/useCountdown';

export default function App() {
  const { showFireworks, triggerFireworks } = useFireworks();
  const { backgroundUrl, changeBackground } = useBackgroundImage();
  const timeLeft = useCountdown();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black 
      flex items-center justify-center overflow-hidden">
      {/* Background with smooth transition */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${backgroundUrl}')` }}
        />
      </div>

      {showFireworks && <Fireworks />}

      {/* Glassmorphism card */}
      <div className="relative backdrop-blur-xl bg-black/30 p-12 rounded-2xl border border-white/10 
        shadow-2xl overflow-hidden min-h-[400px] min-w-[600px] flex items-center justify-center">
        <CountdownDisplay 
          hours={timeLeft.hours}
          minutes={timeLeft.minutes}
          seconds={timeLeft.seconds}
          show={!timeLeft.isComplete}
        />
        <NewYearMessage show={timeLeft.isComplete} />
      </div>

      <MagicButton onClick={changeBackground} />
      <FireworksButton onClick={triggerFireworks} />
    </div>
  );
}