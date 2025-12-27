import React from 'react';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { SearchBar } from '@/components/molecules/SearchBar';

const Modules: React.FC = () => {
  const ecoModules = [
    { id: 1, title: 'Climate Change 101', difficulty: 'Beginner', points: 50 },
    { id: 2, title: 'Waste Management', difficulty: 'Intermediate', points: 100 },
    { id: 3, title: 'Renewable Energy', difficulty: 'Advanced', points: 150 },
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement filtering logic
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-heading">Learning Modules</h1>
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Search modules..." 
          className="max-w-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecoModules.map((module) => (
          <Card 
            key={module.id} 
            title={module.title}
            actions={<Button size="sm" variant="secondary" onClick={() => window.location.href = `/learn/lesson/${module.id}`}>View Module</Button>}
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
