import React from 'react';
import { Link, useLocation } from 'react-router';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { title: 'Overview', path: '/dashboard', icon: 'dashboard' },
    { title: 'Learning Hub', path: '/modules', icon: 'school' },
    { title: 'Eco Challenges', path: '/challenges', icon: 'eco' },
    { title: 'Leaderboard', path: '/leaderboard', icon: 'leaderboard' },
    { title: 'My Profile', path: '/profile', icon: 'person' },
  ];

  return (
    <aside className="w-64 bg-base-100 border-r border-base-300 hidden lg:flex flex-col">
      <ul className="menu p-4 gap-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'active bg-primary text-primary-content' : ''}
            >
              <span className="material-symbols-rounded">{item.icon}</span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
