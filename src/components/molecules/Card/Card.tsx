import React from 'react';

export interface CardProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  actions, 
  className = '' 
}) => {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        <h2 className="card-title font-heading">{title}</h2>
        <div className="font-sans">
          {children}
        </div>
        {actions && (
          <div className="card-actions justify-end mt-4">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};
