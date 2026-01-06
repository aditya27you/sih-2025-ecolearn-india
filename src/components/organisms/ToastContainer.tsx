import React from 'react';
import { useUIStore } from '@/store';

export const ToastContainer: React.FC = () => {
  const toasts = useUIStore((state) => state.toasts);
  const removeToast = useUIStore((state) => state.removeToast);

  if (toasts.length === 0) return null;

  return (
    <div className="toast toast-end toast-top z-[100]">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className={`alert alert-${toast.type} shadow-lg cursor-pointer animate-in fade-in slide-in-from-right-4`}
          onClick={() => removeToast(toast.id)}
        >
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
