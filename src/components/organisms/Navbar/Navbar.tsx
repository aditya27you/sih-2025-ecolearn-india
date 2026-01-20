import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const activeLinkStyle = {
    fontWeight: 'bold',
    color: 'var(--primary-color)',
  };

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold">
              EcoLearn
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className="hover:text-primary" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Home</NavLink>
            <NavLink to="/modules" className="hover:text-primary" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Modules</NavLink>
            <NavLink to="/challenges" className="hover:text-primary" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Challenges</NavLink>
            <NavLink to="/leaderboard" className="hover:text-primary" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Leaderboard</NavLink>
          </div>
          <div className="md:hidden">
            <button className="btn btn-square btn-ghost" onClick={toggleDrawer}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div className={`md:hidden ${isDrawerOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Home</NavLink>
          <NavLink to="/modules" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Modules</NavLink>
          <NavLink to="/challenges" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Challenges</NavLink>
          <NavLink to="/leaderboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : undefined)}>Leaderboard</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;