'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 0.4,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [0.85, 0.85, 0.85],
      markerColor: [0.91, 0.36, 0.17],
      glowColor: [0.95, 0.95, 0.96],
      markers: [
        { location: [59.9, 10.8], size: 0.08 },
        { location: [51.5, -0.1], size: 0.05 },
        { location: [52.2, 21.0], size: 0.05 },
        { location: [55.7, 12.5], size: 0.04 },
        { location: [60.4, 5.3], size: 0.04 },
      ],
    });

    let running = true;
    const animate = () => {
      if (!running) return;
      phi += 0.002;
      globe.update({ phi });
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      running = false;
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ aspectRatio: '1', width: '100%', height: '100%' }}
    />
  );
}
