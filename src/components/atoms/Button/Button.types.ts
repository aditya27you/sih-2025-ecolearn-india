import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'success' | 'warning' | 'error' | 'info';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  loading?: boolean;
}
