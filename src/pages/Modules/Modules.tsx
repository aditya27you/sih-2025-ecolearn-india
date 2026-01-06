import React, { useState } from 'react';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { SearchBar } from '@/components/molecules/SearchBar';
import { modules } from '@/data/modulesData';
import { useNavigate } from 'react-router';
import { PageTransition } from '@/components/atoms/PageTransition';

const Modules: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = filterDifficulty === 'All' || module.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <PageTransition>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-heading font-bold">Learning Modules</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <select 
              className="select select-bordered w-full sm:w-auto font-sans"
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <SearchBar 
              onSearch={handleSearch} 
              placeholder="Search modules..." 
              className="w-full sm:w-64"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredModules.map((module) => (
                    <Card 
                      key={module.id} 
                      title={module.title}
                      animateHover
                      actions={
          
                <Button 
                  size="sm" 
                  variant="secondary" 
                  onClick={() => navigate(`/learn/module/${module.id}/lesson/${module.lessons[0].id}`)}
                >
                  Start Learning
                </Button>
              }
            >
              <p className="text-sm text-base-content/70 mb-4 line-clamp-2">{module.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="badge badge-outline badge-sm">{module.difficulty}</span>
                <span className="text-primary font-bold">{module.points} pts</span>
              </div>
            </Card>
          ))}
        </div>
        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base-content/60">No modules found matching your search.</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Modules;
