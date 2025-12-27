import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Link } from 'react-router';

const Login: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-center">Login</h2>
      <div className="form-control">
        <label className="label"><span className="label-text font-sans">Email</span></label>
        <input type="email" placeholder="email@example.com" className="input input-bordered font-sans" />
      </div>
      <div className="form-control">
        <label className="label"><span className="label-text font-sans">Password</span></label>
        <input type="password" placeholder="••••••••" className="input input-bordered font-sans" />
      </div>
      <Button className="w-full mt-4">Login</Button>
      <p className="text-center text-sm font-sans">
        Don't have an account? <Link to="/signup" className="link link-primary">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
