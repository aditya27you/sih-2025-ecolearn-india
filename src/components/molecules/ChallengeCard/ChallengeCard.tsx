import React from 'react';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';

export interface ChallengeCardProps {
  id: string | number;
  title: string;
  description: string;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  onViewDetails?: (id: string | number) => void;
  className?: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  id,
  title,
  description,
  points,
  difficulty,
  onViewDetails,
  className = '',
}) => {
  const difficultyColor = {
    Easy: 'success',
    Medium: 'warning',
    Hard: 'error',
  }[difficulty] as 'success' | 'warning' | 'error';

  return (
    <Card 
      title={title} 
      className={`hover:shadow-lg transition-shadow duration-300 ${className}`}
      actions={
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={() => onViewDetails?.(id)}
        >
          View Details
        </Button>
      }
    >
      <div className="space-y-3">
        <p className="text-sm text-base-content/70 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <Badge variant={difficultyColor} size="sm">{difficulty}</Badge>
          <span className="text-primary font-bold">{points} pts</span>
        </div>
      </div>
    </Card>
  );
};
