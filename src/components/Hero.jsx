import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] overflow-hidden rounded-2xl bg-black/90 border border-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-black/40 to-black/80" />

      <div className="relative z-10 p-6 md:p-10 text-white flex flex-col items-start justify-end h-full">
        <div className="flex items-center gap-2 text-emerald-400 mb-3">
          <Rocket className="h-5 w-5" />
          <span className="text-sm font-medium tracking-wide uppercase">Live Training Monitor</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Track fine-tuning progress in real time
        </h1>
        <p className="mt-3 md:mt-4 text-white/70 max-w-2xl">
          A modern, minimal interface inspired by Weights & Biases. Quickly scan run status, metrics, and progress at a glance.
        </p>
      </div>
    </section>
  );
}
