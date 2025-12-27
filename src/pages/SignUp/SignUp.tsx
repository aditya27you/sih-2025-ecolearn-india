import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link } from 'react-router';

const SignUp: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-center">Create Account</h2>
      <Input 
        type="text" 
        label="Full Name" 
        placeholder="John Doe" 
      />
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
      <Button className="w-full mt-4">Sign Up</Button>
      <p className="text-center text-sm font-sans">
        Already have an account? <Link to="/login" className="link link-primary">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
