import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Link } from 'react-router';

const SignUp: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-center">Create Account</h2>
      <div className="form-control">
        <label className="label"><span className="label-text font-sans">Full Name</span></label>
        <input type="text" placeholder="John Doe" className="input input-bordered font-sans" />
      </div>
      <div className="form-control">
        <label className="label"><span className="label-text font-sans">Email</span></label>
        <input type="email" placeholder="email@example.com" className="input input-bordered font-sans" />
      </div>
      <div className="form-control">
        <label className="label"><span className="label-text font-sans">Password</span></label>
        <input type="password" placeholder="••••••••" className="input input-bordered font-sans" />
      </div>
      <Button className="w-full mt-4">Sign Up</Button>
      <p className="text-center text-sm font-sans">
        Already have an account? <Link to="/login" className="link link-primary">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
