import React from 'react';
import type { LeaderboardEntry } from '@/data/leaderboardData';

export interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  className?: string;
}

export const LeaderboardRow: React.FC<LeaderboardRowProps> = ({
  entry,
  className = '',
}) => {
  const { rank, name, school, points, isCurrentUser } = entry;

  return (
    <div 
      className={`flex items-center p-4 rounded-xl transition-colors ${
        isCurrentUser 
          ? 'bg-primary/10 border border-primary/20 shadow-sm' 
          : 'bg-base-100 hover:bg-base-200'
      } ${className}`}
    >
      <div className="w-12 text-center">
        <span className={`text-lg font-bold ${rank <= 3 ? 'text-primary' : 'text-base-content/50'}`}>
          #{rank}
        </span>
      </div>
      
      <div className="flex-grow flex items-center gap-4 ml-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <span className="material-symbols-rounded">person</span>
          </div>
        </div>
        <div>
          <h4 className={`font-sans font-bold ${isCurrentUser ? 'text-primary' : ''}`}>
            {name} {isCurrentUser && <span className="text-xs font-normal opacity-70 ml-1">(You)</span>}
          </h4>
          <p className="text-xs text-base-content/50 truncate max-w-[200px] md:max-w-xs">{school}</p>
        </div>
      </div>

      <div className="w-24 text-right">
        <span className="text-lg font-heading font-bold text-primary">
          {points.toLocaleString()}
        </span>
        <span className="text-[10px] uppercase tracking-tighter text-base-content/40 block">Points</span>
      </div>
    </div>
  );
};
