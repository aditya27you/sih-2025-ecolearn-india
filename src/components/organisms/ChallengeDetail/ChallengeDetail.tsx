import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import type { Challenge } from '@/data/challengesData';

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        <div className="relative h-40 bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-rounded text-8xl text-primary opacity-20">eco</span>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 btn btn-circle btn-ghost btn-sm bg-base-100/50 hover:bg-base-100"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-heading font-bold">{challenge.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant={difficultyColor}>{challenge.difficulty}</Badge>
                <Badge variant="ghost" className="text-primary border-primary">
                  {challenge.points} Points
                </Badge>
                {challenge.concept && (
                  <Badge variant="secondary" className="bg-secondary/10">
                    {challenge.concept}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6 font-sans text-base-content/80">
            <div>
              <h4 className="text-base-content font-bold mb-2">Overview</h4>
              <p>{challenge.description}</p>
            </div>

            {challenge.learningObjectives && (
              <div className="bg-base-200/50 p-4 rounded-xl border border-base-200">
                <h4 className="text-base-content font-bold flex items-center gap-2 mb-2">
                  <span className="material-symbols-rounded text-primary">school</span>
                  Learning Objectives
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {challenge.learningObjectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenge.materials && (
                <div>
                  <h4 className="text-base-content font-bold mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {challenge.materials.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {challenge.timeRequired && (
                <div>
                  <h4 className="text-base-content font-bold mb-2">Time Required</h4>
                  <p className="text-sm flex items-center gap-2">
                    <span className="material-symbols-rounded text-base">schedule</span>
                    {challenge.timeRequired}
                  </p>
                </div>
              )}
            </div>

            {challenge.procedure && (
              <div>
                <h4 className="text-base-content font-bold mb-3">Step-by-Step Procedure</h4>
                <div className="space-y-3">
                  {challenge.procedure.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-sm pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {challenge.studentOutput && (
              <div className="bg-success/5 p-4 rounded-xl border border-success/20">
                <h4 className="text-success-content font-bold flex items-center gap-2 mb-1">
                  <span className="material-symbols-rounded">camera_alt</span>
                  Submission Requirement
                </h4>
                <p className="text-sm text-success-content/80">{challenge.studentOutput}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t border-base-200">
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
