import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  animateHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  actions, 
  className = '',
  animateHover = false
}) => {
  const content = (
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
  );

  const containerClass = `card bg-base-100 shadow-xl border border-base-300 ${className}`;

  if (animateHover) {
    return (
      <motion.div 
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={containerClass}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={containerClass}>
      {content}
    </div>
  );
};
