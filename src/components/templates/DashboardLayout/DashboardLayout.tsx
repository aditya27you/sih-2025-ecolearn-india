import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Sidebar } from '@/components/organisms/Sidebar';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
