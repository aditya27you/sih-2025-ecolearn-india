import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link } from 'react-router';
import { useUIStore } from '@/store';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const addToast = useUIStore((state) => state.addToast);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      addToast('Please enter your email', 'error');
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      addToast('Reset link sent to your email!', 'success');
    } catch (error) {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center">
            <span className="material-symbols-rounded text-4xl">mark_email_read</span>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold">Check your email</h2>
          <p className="text-base-content/60 font-sans">
            We've sent a password reset link to <span className="font-bold text-base-content">{email}</span>.
          </p>
        </div>
        <Link to="/login" className="btn btn-primary w-full">
          Back to Login
        </Link>
        <p className="text-sm font-sans text-base-content/50">
          Didn't receive the email? <button onClick={() => setIsSubmitted(false)} className="link link-primary">Try again</button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-heading font-bold">Forgot Password?</h2>
        <p className="text-sm text-base-content/60 mt-2">
          Enter your email and we'll send you a link to reset your password.
        </p>
      </div>
      
      <Input 
        type="email" 
        label="Email Address" 
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      
      <Button 
        type="submit" 
        className="w-full mt-4" 
        loading={isLoading}
      >
        Send Reset Link
      </Button>
      
      <p className="text-center text-sm font-sans">
        Remember your password? <Link to="/login" className="link link-primary">Login</Link>
      </p>
    </form>
  );
};

export default ForgotPassword;
