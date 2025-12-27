import React from 'react';
import { Button } from '@/components/atoms/Button';

const Quiz: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-sans font-bold uppercase tracking-widest text-primary">Question 1 of 5</span>
          <span className="badge badge-secondary">Timer: 02:00</span>
        </div>
        <h2 className="card-title text-2xl font-heading mb-6">
          Which of the following is a major greenhouse gas?
        </h2>
        <div className="space-y-3">
          <Button variant="ghost" className="w-full justify-start border-base-300">Oxygen</Button>
          <Button variant="ghost" className="w-full justify-start border-base-300">Nitrogen</Button>
          <Button variant="ghost" className="w-full justify-start border-primary ring-1 ring-primary">Carbon Dioxide</Button>
          <Button variant="ghost" className="w-full justify-start border-base-300">Argon</Button>
        </div>
        <div className="card-actions justify-end mt-8">
          <Button variant="primary">Next Question</Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
