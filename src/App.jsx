import React from 'react';
import Hero from './components/Hero';
import SummaryCards from './components/SummaryCards';
import MetricsPanel from './components/MetricsPanel';
import RunTable from './components/RunTable';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B0C10] via-[#0E1117] to-[#0B0C10] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10 space-y-6">
        <Hero />
        <SummaryCards />
        <MetricsPanel />
        <RunTable />
      </div>
    </div>
  );
}

export default App;
