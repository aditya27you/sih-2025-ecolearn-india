import React from 'react';
import { Outlet, Link } from 'react-router';
import Navbar from '@/components/organisms/Navbar';

export const LearningLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <main className="flex-grow container mx-auto max-w-4xl p-4 lg:p-8">
        <div className="mb-4">
          <Link to="/modules" className="btn btn-ghost btn-sm gap-2">
            <span className="material-symbols-rounded">arrow_back</span>
            Back to Modules
          </Link>
        </div>
        <Outlet />
      </main>
    </div>
  );
};
