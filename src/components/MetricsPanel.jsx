import React from 'react';

function Sparkline({ points = [] }) {
  // Normalize points into a simple SVG path
  const width = 240;
  const height = 60;
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = Math.max(max - min, 1e-6);
  const step = width / Math.max(points.length - 1, 1);
  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / range) * height;
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#spark)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function MetricsPanel() {
  // Sample metric series
  const loss = [1.0, 0.92, 0.88, 0.83, 0.78, 0.72, 0.68, 0.64, 0.61, 0.58, 0.55, 0.53];
  const acc = [0.42, 0.47, 0.51, 0.56, 0.6, 0.63, 0.66, 0.69, 0.71, 0.73, 0.75, 0.77];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Validation Loss</h3>
            <p className="text-white/60 text-sm">Lower is better</p>
          </div>
          <div className="text-emerald-400 font-semibold">{loss[loss.length - 1].toFixed(2)}</div>
        </div>
        <div className="mt-4">
          <Sparkline points={loss} />
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Accuracy</h3>
            <p className="text-white/60 text-sm">Higher is better</p>
          </div>
          <div className="text-cyan-300 font-semibold">{Math.round(acc[acc.length - 1] * 100)}%</div>
        </div>
        <div className="mt-4">
          <Sparkline points={acc} />
        </div>
      </div>
    </section>
  );
}
