import React from 'react';
import { Button } from '@/components/atoms/Button';

const NotFound: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold text-error">404</h1>
          <p className="py-6 font-sans text-2xl">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/'}>
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
