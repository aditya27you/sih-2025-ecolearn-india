import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'ghost',
  size = 'md',
  className = '',
}) => {
  const variantClass = variant === 'outline' ? 'badge-outline' : `badge-${variant}`;
  const sizeClass = `badge-${size}`;

  return (
    <div className={`badge ${variantClass} ${sizeClass} font-sans ${className}`}>
      {children}
    </div>
  );
};
