import React from 'react';
import { Activity, Cpu, AlertTriangle, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="flex-1 min-w-[180px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-white/80">
        <Icon className="h-5 w-5 text-emerald-400" />
        <span className="text-sm">{label}</span>
      </div>
      {trend && (
        <span className={`text-xs px-2 py-0.5 rounded-full ${trend > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
  </div>
);

export default function SummaryCards() {
  // Static sample data for UI showcase
  const stats = [
    { icon: Activity, label: 'Active Runs', value: '7', trend: 17 },
    { icon: Cpu, label: 'Avg GPU Util', value: '82%', trend: 4 },
    { icon: AlertTriangle, label: 'Failures (24h)', value: '1', trend: -50 },
    { icon: Clock, label: 'Last Update', value: '3s ago' },
  ];

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </section>
  );
}
