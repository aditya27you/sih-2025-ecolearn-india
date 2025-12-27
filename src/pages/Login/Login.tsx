import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link } from 'react-router';

const Login: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-center">Login</h2>
      <Input 
        type="email" 
        label="Email" 
        placeholder="email@example.com" 
      />
      <Input 
        type="password" 
        label="Password" 
        placeholder="••••••••" 
      />
      <Button className="w-full mt-4">Login</Button>
      <p className="text-center text-sm font-sans">
        Don't have an account? <Link to="/signup" className="link link-primary">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
