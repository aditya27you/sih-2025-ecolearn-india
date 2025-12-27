import React from 'react';
import { Outlet, Link } from 'react-router';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-base-200 to-secondary/20 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-heading font-bold text-primary">EcoLearn India</Link>
          <p className="text-base-content/60 mt-2 font-sans italic">Learn. Act. Lead.</p>
        </div>
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
