import React from 'react';
import type { LeaderboardEntry } from '@/data/leaderboardData';

export interface LeaderboardPodiumProps {
  entries: LeaderboardEntry[];
  className?: string;
}

export const LeaderboardPodium: React.FC<LeaderboardPodiumProps> = ({
  entries,
  className = '',
}) => {
  // Sort or ensure we take top 3 in order 2nd, 1st, 3rd for visual podium
  const top3 = [...entries].sort((a, b) => a.rank - b.rank).slice(0, 3);
  
  if (top3.length < 3) return null;

  const [first, second, third] = [top3[0], top3[1], top3[2]];

  const PodiumItem = ({ entry, height, rank, color }: { entry: LeaderboardEntry, height: string, rank: number, color: string }) => (
    <div className="flex flex-col items-center flex-1">
      <div className="mb-4 text-center">
        <div className="avatar placeholder mb-2">
          <div className={`rounded-full w-12 md:w-16 ${rank === 1 ? 'ring ring-primary ring-offset-2' : ''} bg-neutral text-neutral-content`}>
            <span className="material-symbols-rounded text-2xl md:text-3xl">person</span>
          </div>
        </div>
        <h4 className="font-sans font-bold text-xs md:text-sm truncate w-24 md:w-32">{entry.name}</h4>
        <p className="text-primary font-heading font-bold text-sm">{entry.points.toLocaleString()}</p>
      </div>
      <div className={`${height} ${color} w-full rounded-t-2xl flex flex-col items-center justify-start pt-4 shadow-inner border-t border-white/20`}>
        <span className="text-3xl md:text-5xl font-black text-white/30">#{rank}</span>
      </div>
    </div>
  );

  return (
    <div className={`flex items-end justify-center gap-1 md:gap-4 h-64 md:h-80 w-full max-w-2xl mx-auto px-4 ${className}`}>
      {/* 2nd Place */}
      <PodiumItem entry={second} height="h-3/4" rank={2} color="bg-secondary" />
      
      {/* 1st Place */}
      <PodiumItem entry={first} height="h-full" rank={1} color="bg-primary" />
      
      {/* 3rd Place */}
      <PodiumItem entry={third} height="h-1/2" rank={3} color="bg-accent" />
    </div>
  );
};
