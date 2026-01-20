import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
