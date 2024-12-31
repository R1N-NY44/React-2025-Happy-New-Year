import React, { useEffect, useRef } from 'react';

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.alpha = 1;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1;
        this.alpha -= 0.01;
      }
    }

    let particles: Particle[] = [];
    const colors = ['#ffff00', '#ff00ff', '#00ffff', '#ff0000', '#00ff00', '#0000ff'];

    function createFirework(x: number, y: number) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y, color));
      }
    }

    function animate() {
      if (!ctx) return;
      // Clear the canvas with transparency instead of black
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (Math.random() < 0.05) {
        createFirework(
          Math.random() * canvas.width,
          Math.random() * canvas.height * 0.5
        );
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      particles = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  );
}