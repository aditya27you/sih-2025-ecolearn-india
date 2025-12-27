import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Challenge } from '@/data/challengesData';

export interface ChallengeDetailProps {
  challenge: Challenge;
  onClose: () => void;
  onSubmit: (id: string | number) => void;
}

export const ChallengeDetail: React.FC<ChallengeDetailProps> = ({
  challenge,
  onClose,
  onSubmit,
}) => {
  const difficultyColor = {
    Easy: 'success',
    Medium: 'warning',
    Hard: 'error',
  }[challenge.difficulty] as 'success' | 'warning' | 'error';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="relative h-48 bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-rounded text-8xl text-primary opacity-20">eco</span>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 btn btn-circle btn-ghost btn-sm"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-heading font-bold">{challenge.title}</h2>
              <div className="flex gap-2 mt-2">
                <Badge variant={difficultyColor}>{challenge.difficulty}</Badge>
                <Badge variant="ghost" className="text-primary border-primary">
                  {challenge.points} Points
                </Badge>
              </div>
            </div>
          </div>

          <div className="prose prose-sm max-w-none font-sans text-base-content/80">
            <h4 className="text-base-content font-bold">Requirements</h4>
            <p>{challenge.description}</p>
            
            <div className="bg-base-200 p-4 rounded-xl mt-6">
              <h4 className="text-base-content font-bold mt-0">How to earn points:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Complete the activity as described.</li>
                <li>Take a clear photo of your work.</li>
                <li>Submit the photo through our portal.</li>
                <li>Wait for teacher verification (usually 24-48 hours).</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <Button variant="primary" className="flex-grow" onClick={() => onSubmit(challenge.id)}>
              Start Challenge & Submit Proof
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
