import React, { useState } from 'react';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { SearchBar } from '@/components/molecules/SearchBar';
import { modules } from '@/data/modulesData';
import { useNavigate } from 'react-router';

const Modules: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = modules.filter(module => 
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-heading font-bold">Learning Modules</h1>
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Search modules..." 
          className="max-w-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <Card 
            key={module.id} 
            title={module.title}
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
  );
};

export default Modules;
