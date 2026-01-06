import React, { useEffect } from 'react';
import { LeaderboardPodium } from '@/components/organisms/LeaderboardPodium';
import { Leaderboard } from '@/components/organisms/Leaderboard';
import { PageTransition } from '@/components/atoms/PageTransition';
import { useUserStore, useLeaderboardStore } from '@/store';

const LeaderboardPage: React.FC = () => {
  const { user } = useUserStore();
  const { leaderboard, userRank, filter, setFilter, updateLeaderboard } = useLeaderboardStore();

  useEffect(() => {
    if (user) {
      updateLeaderboard({
        id: user.id,
        name: user.name,
        school: user.schoolName,
        points: user.ecoPoints,
        avatar: user.avatar
      });
    }
  }, [user, updateLeaderboard, filter]); // Re-run when filter changes to simulate fetch

  const top3 = leaderboard.slice(0, 3);
  const remaining = leaderboard.slice(3);

  return (
    <PageTransition>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-heading font-bold text-primary">Leaderboard</h1>
          <p className="text-base-content/70 font-sans mt-2">
            Celebrating our top eco-warriors making a difference.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed bg-base-200 p-1">
            <button 
              className={`tab tab-lg ${filter === 'national' ? 'tab-active' : ''}`}
              onClick={() => setFilter('national')}
            >
              National
            </button>
            <button 
              className={`tab tab-lg ${filter === 'state' ? 'tab-active' : ''}`}
              onClick={() => setFilter('state')}
            >
              My State
            </button>
            <button 
              className={`tab tab-lg ${filter === 'school' ? 'tab-active' : ''}`}
              onClick={() => setFilter('school')}
            >
              My School
            </button>
          </div>
        </div>

        {leaderboard.length > 0 ? (
          <>
            <div className="mb-16">
              <LeaderboardPodium entries={top3} />
            </div>

            <div className="bg-base-100 rounded-3xl shadow-sm border border-base-200 overflow-hidden">
              <div className="p-4 border-b border-base-200 bg-base-200/50 flex justify-between px-8 text-xs font-bold uppercase tracking-widest text-base-content/50">
                <span>Rank & Student</span>
                <span>Points</span>
              </div>
              <div className="p-2">
                <Leaderboard entries={remaining} />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-base-content/60">
            No rankings available for this category yet.
          </div>
        )}
        
        {/* Current User Sticky Rank */}
        {user && (
          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-center justify-between sticky bottom-4 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
                {userRank > 0 ? userRank : '-'}
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-primary">Your Rank</p>
                <p className="font-sans font-bold">{user.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-heading font-bold text-primary">{user.ecoPoints}</p>
              <p className="text-[10px] uppercase text-base-content/50">Eco Points</p>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default LeaderboardPage;
