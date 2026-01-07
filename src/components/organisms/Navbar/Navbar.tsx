import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useUserStore, useUIStore, useLearningStore, useLeaderboardStore } from '@/store';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, clearAuth } = useUserStore();
  const resetLearning = useLearningStore((state) => state.reset);
  const resetLeaderboard = useLeaderboardStore((state) => state.reset);
  const addToast = useUIStore((state) => state.addToast);

  const navLinks = isAuthenticated 
    ? [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Modules', path: '/modules' },
        { title: 'Challenges', path: '/challenges' },
        { title: 'Leaderboard', path: '/leaderboard' },
      ]
    : [
        { title: 'Home', path: '/' },
        { title: 'Login', path: '/login' },
      ];

  const handleLogout = () => {
    clearAuth();
    resetLearning();
    resetLeaderboard();
    addToast('Logged out successfully', 'info');
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-200 px-4 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <span className="material-symbols-rounded">menu</span>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-heading font-bold text-primary px-0 lg:px-4">
          PrakritiPath
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-sans">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-primary/20">
              <div className="w-10 rounded-full overflow-hidden">
                {user?.avatar && user.avatar !== 'default-avatar-url' ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="material-symbols-rounded text-xl"
                    >
                      eco
                    </motion.span>
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="px-4 py-2 border-b border-base-300 mb-2">
                <p className="font-bold text-sm truncate">{user?.name}</p>
                <p className="text-xs text-base-content/60 truncate">{user?.email}</p>
              </div>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={handleLogout} className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">Get Started</Link>
        )}
      </div>
    </div>
  );
};
