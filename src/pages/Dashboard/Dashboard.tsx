import React from 'react';
import { Card } from '@/components/molecules/Card';
import { useUserStore, useLearningStore } from '@/store';
import { modules } from '@/data/modulesData';

const Dashboard: React.FC = () => {
  const { user } = useUserStore();
  const { modulesProgress } = useLearningStore();

  const totalPoints = user?.ecoPoints ?? 0;
  const streak = user?.streak ?? 0;
  
  const completedModulesCount = Object.values(modulesProgress).filter(m => m.isCompleted).length;
  const totalModulesCount = modules.length;
  const progressPercentage = totalModulesCount > 0 
    ? Math.round((completedModulesCount / totalModulesCount) * 100) 
    : 0;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-base-content">
          Welcome back, {user?.name ?? 'Eco Learner'}! 🌱
        </h1>
        <p className="text-base-content/60">Ready to save the planet today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Eco Points">
          <div className="text-4xl font-black text-primary">{totalPoints}</div>
          <p className="text-xs text-base-content/50 uppercase tracking-widest font-bold mt-1">Total Earned</p>
        </Card>
        
        <Card title="Daily Streak">
          <div className="text-4xl font-black text-secondary">{streak}</div>
          <p className="text-xs text-base-content/50 uppercase tracking-widest font-bold mt-1">Days Active</p>
        </Card>

        <Card title="Modules">
          <div className="flex items-center gap-4">
            <div 
              className="radial-progress text-accent font-bold" 
              style={{ "--value": progressPercentage, "--size": "3.5rem" } as React.CSSProperties}
            >
              {progressPercentage}%
            </div>
            <div>
              <p className="text-2xl font-black">{completedModulesCount}/{totalModulesCount}</p>
              <p className="text-xs text-base-content/50 uppercase tracking-widest font-bold">Completed</p>
            </div>
          </div>
        </Card>

        <Card title="Rank">
          <div className="text-4xl font-black text-warning">#12</div>
          <p className="text-xs text-base-content/50 uppercase tracking-widest font-bold mt-1">School Rank</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Continue Learning" className="lg:col-span-1">
          <div className="space-y-4">
            {modules.slice(0, 2).map(module => (
              <div key={module.id} className="flex items-center justify-between p-3 bg-base-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded">school</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{module.title}</p>
                    <p className="text-xs text-base-content/60">{module.lessons.length} Lessons</p>
                  </div>
                </div>
                <div className="badge badge-outline badge-sm">
                  {modulesProgress[module.id]?.isCompleted ? 'Finished' : 'In Progress'}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Quick Action" className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-outline btn-primary h-24 flex flex-col gap-1">
              <span className="material-symbols-rounded text-2xl">eco</span>
              <span className="text-xs capitalize">New Challenge</span>
            </button>
            <button className="btn btn-outline btn-secondary h-24 flex flex-col gap-1">
              <span className="material-symbols-rounded text-2xl">leaderboard</span>
              <span className="text-xs capitalize">View Rankings</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
