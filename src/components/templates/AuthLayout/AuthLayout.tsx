import React from 'react';
import { Outlet, Link } from 'react-router';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-base-100 to-secondary/5 p-4 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-lg z-10">
        <div className="mb-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 group transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-content shadow-lg shadow-primary/30">
              <span className="material-symbols-rounded">eco</span>
            </div>
            <span className="text-2xl font-heading font-black text-base-content tracking-tight">EcoLearn <span className="text-primary">India</span></span>
          </Link>
        </div>
        
        <Outlet />
      </div>
    </div>
  );
};
