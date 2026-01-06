import React, { useState } from 'react';
import { LeaderboardPodium } from '@/components/organisms/LeaderboardPodium';
import { Leaderboard } from '@/components/organisms/Leaderboard';
import { leaderboardData } from '@/data/leaderboardData';
import { PageTransition } from '@/components/atoms/PageTransition';

const LeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'national' | 'state' | 'school'>('national');

  // For MVP, we'll just show the same mock data for all tabs
  // In real implementation, these would be filtered or fetched differently
  const top3 = leaderboardData.slice(0, 3);
  const remaining = leaderboardData.slice(3);

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
              className={`tab tab-lg ${activeTab === 'national' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('national')}
            >
              National
            </button>
            <button 
              className={`tab tab-lg ${activeTab === 'state' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('state')}
            >
              My State
            </button>
            <button 
              className={`tab tab-lg ${activeTab === 'school' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('school')}
            >
              My School
            </button>
          </div>
        </div>

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
        
        {/* Current User Floating Rank Card (Mobile) or Sticky Footer */}
        <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
              42
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-primary">Your Rank</p>
              <p className="font-sans font-bold">Alex Johnson</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-heading font-bold text-primary">120</p>
            <p className="text-[10px] uppercase text-base-content/50">Eco Points</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LeaderboardPage;
