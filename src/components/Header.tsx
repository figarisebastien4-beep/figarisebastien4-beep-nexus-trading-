import { Crown } from 'lucide-react';

interface HeaderProps {
  onUpgradeClick: () => void;
}

export default function Header({ onUpgradeClick }: HeaderProps) {
  return (
    <header className="h-16 border-bottom border-gray-800 bg-[#0f172a] flex items-center justify-between px-6 sticky top-0 z-40" id="main-header">
      <div className="flex items-center gap-2" id="header-logo">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
          <Crown className="text-black w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">
          MangaForge <span className="text-cyan-500">Trading</span>
        </span>
      </div>

      <button
        onClick={onUpgradeClick}
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        id="upgrade-header-btn"
      >
        <Crown className="w-4 h-4" />
        Mise à niveau
      </button>
    </header>
  );
}
