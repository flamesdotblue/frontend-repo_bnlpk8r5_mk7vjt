import React from 'react';
import { CheckCircle2, Pause, Play, XCircle, Zap } from 'lucide-react';

const runs = [
  { id: 'ft_8721', project: 'gpt4-mini', status: 'running', step: 1280, total: 5000, loss: 0.58, acc: 0.73, gpu: 86, eta: '24m' },
  { id: 'ft_8718', project: 'resnet50', status: 'paused', step: 940, total: 3000, loss: 0.71, acc: 0.65, gpu: 0, eta: '—' },
  { id: 'ft_8702', project: 'llama-2', status: 'completed', step: 3000, total: 3000, loss: 0.49, acc: 0.79, gpu: 72, eta: '0m' },
  { id: 'ft_8699', project: 'unet-v2', status: 'failed', step: 220, total: 2000, loss: 1.24, acc: 0.39, gpu: 0, eta: '—' },
];

function StatusBadge({ status }) {
  const map = {
    running: { label: 'Running', icon: Play, cls: 'bg-emerald-500/10 text-emerald-400' },
    paused: { label: 'Paused', icon: Pause, cls: 'bg-amber-500/10 text-amber-400' },
    completed: { label: 'Completed', icon: CheckCircle2, cls: 'bg-blue-500/10 text-blue-400' },
    failed: { label: 'Failed', icon: XCircle, cls: 'bg-rose-500/10 text-rose-400' },
  };
  const item = map[status] ?? map.running;
  const Icon = item.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${item.cls}`}>
      <Icon className="h-3.5 w-3.5" />
      {item.label}
    </span>
  );
}

function ProgressBar({ value, max }) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
  return (
    <div className="w-full h-2 rounded bg-white/10 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function RunTable() {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-medium">Recent Runs</h3>
          <p className="text-white/60 text-sm">Quickly scan status, progress, and key metrics</p>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm border border-white/10">
          <Zap className="h-4 w-4 text-emerald-400" />
          Refresh
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-white/60">
            <tr>
              <th className="text-left font-medium pb-2 pr-4">Run ID</th>
              <th className="text-left font-medium pb-2 pr-4">Project</th>
              <th className="text-left font-medium pb-2 pr-4">Status</th>
              <th className="text-left font-medium pb-2 pr-4">Progress</th>
              <th className="text-left font-medium pb-2 pr-4">Loss</th>
              <th className="text-left font-medium pb-2 pr-4">Accuracy</th>
              <th className="text-left font-medium pb-2 pr-4">GPU</th>
              <th className="text-left font-medium pb-2">ETA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {runs.map((r) => (
              <tr key={r.id} className="text-white/90">
                <td className="py-3 pr-4 font-mono text-xs md:text-sm">{r.id}</td>
                <td className="py-3 pr-4">{r.project}</td>
                <td className="py-3 pr-4"><StatusBadge status={r.status} /></td>
                <td className="py-3 pr-4 w-[200px]">
                  <div className="flex items-center gap-3">
                    <ProgressBar value={r.step} max={r.total} />
                    <span className="text-white/60 text-xs w-12 text-right">{Math.round((r.step / r.total) * 100)}%</span>
                  </div>
                </td>
                <td className="py-3 pr-4">{r.loss.toFixed(2)}</td>
                <td className="py-3 pr-4">{Math.round(r.acc * 100)}%</td>
                <td className="py-3 pr-4">{r.gpu}%</td>
                <td className="py-3">{r.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
