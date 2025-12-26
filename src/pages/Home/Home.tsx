import React from 'react';
import { Button } from '@/components/atoms/Button';

const Home: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-heading font-bold text-primary">EcoLearn India</h1>
          <p className="py-6 font-sans">
            Gamified Environmental Education Platform for Schools.
            Learn. Act. Lead the Green Revolution.
          </p>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
