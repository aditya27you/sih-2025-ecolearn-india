import React from 'react';
import { LeaderboardRow } from '@/components/molecules/LeaderboardRow';
import { LeaderboardEntry } from '@/data/leaderboardData';

export interface LeaderboardProps {
  entries: LeaderboardEntry[];
  className?: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({
  entries,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {entries.map((entry) => (
        <LeaderboardRow key={entry.id} entry={entry} />
      ))}
    </div>
  );
};
