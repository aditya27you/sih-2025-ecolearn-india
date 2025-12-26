import React from 'react';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';

const Modules: React.FC = () => {
  const ecoModules = [
    { id: 1, title: 'Climate Change 101', difficulty: 'Beginner', points: 50 },
    { id: 2, title: 'Waste Management', difficulty: 'Intermediate', points: 100 },
    { id: 3, title: 'Renewable Energy', difficulty: 'Advanced', points: 150 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-heading mb-6">Learning Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecoModules.map((module) => (
          <Card 
            key={module.id} 
            title={module.title}
            actions={<Button size="sm" variant="secondary">View Module</Button>}
          >
            <div className="flex justify-between items-center">
              <span className="badge badge-outline">{module.difficulty}</span>
              <span className="text-primary font-bold">{module.points} pts</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Modules;
