"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import anime from "animejs/lib/anime.es.js";

const BASE_SPEED = 0.00045;
const BREATHE_DURATION = 8000;
const DRIFT_DURATION = 13000;

interface WaveLayer {
  yRatio: number;
  amplitude: number;
  frequency: number;
  speedMult: number;
  opacity: number;
  color: string;
  lineWidth: number;
  phase: number;
}

const WAVE_LAYERS: WaveLayer[] = [
  { yRatio: 0.12, amplitude: 45, frequency: 0.0022, speedMult: 0.65, opacity: 0.030, color: "212,175,55", lineWidth: 0.8, phase: 0.00 },
  { yRatio: 0.26, amplitude: 80, frequency: 0.0019, speedMult: 1.00, opacity: 0.052, color: "212,175,55", lineWidth: 1.2, phase: 2.09 },
  { yRatio: 0.42, amplitude: 55, frequency: 0.0034, speedMult: 1.38, opacity: 0.038, color: "220,182,60", lineWidth: 1.0, phase: 4.18 },
  { yRatio: 0.56, amplitude: 100, frequency: 0.0015, speedMult: 0.72, opacity: 0.026, color: "195,155,38", lineWidth: 1.5, phase: 1.05 },
  { yRatio: 0.70, amplitude: 42, frequency: 0.0048, speedMult: 1.65, opacity: 0.048, color: "240,200,70", lineWidth: 0.8, phase: 3.30 },
  { yRatio: 0.84, amplitude: 68, frequency: 0.0026, speedMult: 0.90, opacity: 0.030, color: "180,143,33", lineWidth: 1.1, phase: 5.00 },
];

function drawWave(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  layer: WaveLayer,
  elapsed: number,
  ampScale: number,
  vertDrift: number
): void {
  const baseY = layer.yRatio * height + vertDrift;
  const amp = layer.amplitude * ampScale;
  const phase = layer.phase + elapsed * BASE_SPEED * layer.speedMult;
  const step = 5;

  const points: [number, number][] = [];
  for (let x = -step; x <= width + step; x += step) {
    points.push([x, baseY + Math.sin(x * layer.frequency + phase) * amp]);
  }
  if (points.length < 2) return;

  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length - 1; i++) {
    const mx = (points[i][0] + points[i + 1][0]) / 2;
    const my = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], mx, my);
  }
  ctx.lineTo(points[points.length - 1][0], points[points.length - 1][1]);

  const grad = ctx.createLinearGradient(0, 0, width, 0);
  grad.addColorStop(0, `rgba(${layer.color},0)`);
  grad.addColorStop(0.10, `rgba(${layer.color},${layer.opacity})`);
  grad.addColorStop(0.50, `rgba(${layer.color},${layer.opacity * 1.2})`);
  grad.addColorStop(0.90, `rgba(${layer.color},${layer.opacity})`);
  grad.addColorStop(1, `rgba(${layer.color},0)`);

  ctx.save();
  ctx.strokeStyle = grad;
  ctx.lineWidth = layer.lineWidth * 5;
  ctx.globalAlpha = 0.18;
  ctx.shadowBlur = 14;
  ctx.shadowColor = `rgba(${layer.color},0.25)`;
  ctx.stroke();

  ctx.lineWidth = layer.lineWidth;
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 4;
  ctx.shadowColor = `rgba(${layer.color},0.18)`;
  ctx.stroke();
  ctx.restore();
}

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const params = { amplitudeScale: 1.0, verticalDrift: 0 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animes: anime.AnimeInstance[] = [];

    animes.push(
      anime({
        targets: params,
        amplitudeScale: [0.78, 1.22],
        duration: BREATHE_DURATION,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      }),
      anime({
        targets: params,
        verticalDrift: [-13, 13],
        duration: DRIFT_DURATION,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      })
    );

    let startTime: number | null = null;

    function render(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const layer of WAVE_LAYERS) {
        drawWave(ctx!, canvas!.width, canvas!.height, layer, elapsed, params.amplitudeScale, params.verticalDrift);
      }

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      animes.forEach((a) => a.pause());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}