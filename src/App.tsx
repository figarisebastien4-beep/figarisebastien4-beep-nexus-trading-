/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import PricingModal from './components/PricingModal';
import { Activity, TrendingUp, Shield, BarChart3 } from 'lucide-react';

export default function App() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30">
      <Header onUpgradeClick={() => setIsPricingOpen(true)} />

      <main className="p-6 max-w-7xl mx-auto" id="app-main">
        {/* Placeholder Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Profit Total', value: '+12.4%', icon: <TrendingUp className="text-cyan-500" /> },
            { label: 'Bots Actifs', value: '3', icon: <Activity className="text-cyan-500" /> },
            { label: 'Sécurité', value: 'Optimale', icon: <Shield className="text-cyan-500" /> },
            { label: 'Volume 24h', value: '€1.2M', icon: <BarChart3 className="text-cyan-500" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl" id={`stat-${i}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 mb-8" id="dashboard-hero">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Bienvenue sur MangaForge Trading</h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Votre interface de trading tout-en-un. Utilisez nos bots automatisés pour maximiser vos gains 
            et suivez le marché en temps réel.
          </p>
          <div className="mt-8 flex gap-4">
            <button 
              onClick={() => setIsPricingOpen(true)}
              className="bg-cyan-500 text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-600 transition-colors"
              id="hero-upgrade-btn"
            >
              Passer au plan Pro
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition-colors" id="hero-demo-btn">
              Voir la démo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#0f172a] border border-gray-800 rounded-2xl h-[400px] flex items-center justify-center" id="chart-placeholder">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <p className="text-gray-600 font-mono text-sm uppercase tracking-widest">Graphique en attente de données</p>
            </div>
          </div>
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6" id="alerts-widget">
            <h3 className="font-bold mb-4">Dernières Alertes</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-3 p-3 border-b border-gray-800/50 last:border-0" id={`alert-${item}`}>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0 animate-pulse" />
                  <div>
                    <p className="text-sm font-medium">BTC/EUR a franchi 60,000€</p>
                    <span className="text-xs text-gray-500">Il y a 5 minutes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </div>
  );
}

