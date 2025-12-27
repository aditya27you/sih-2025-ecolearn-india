import React from 'react';
import { Link } from 'react-router';

export const Footer: React.FC = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content font-sans mt-auto">
      <nav>
        <h6 className="footer-title opacity-100 font-heading text-primary">EcoLearn India</h6>
        <p className="max-w-xs">
          Empowering the next generation of eco-warriors through gamified learning and real-world impact.
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">Platform</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/dashboard" className="link link-hover">Dashboard</Link>
        <Link to="/modules" className="link link-hover">Modules</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Connect</h6>
        <div className="grid grid-flow-col gap-4">
          <a className="btn btn-ghost btn-circle btn-sm">
            <span className="material-symbols-rounded">share</span>
          </a>
          <a className="btn btn-ghost btn-circle btn-sm">
            <span className="material-symbols-rounded">mail</span>
          </a>
        </div>
      </nav>
      <div className="w-full border-t border-base-content/10 pt-4 flex flex-col items-center gap-2">
        <p>© 2025 EcoLearn India - Smart India Hackathon Project</p>
      </div>
    </footer>
  );
};
