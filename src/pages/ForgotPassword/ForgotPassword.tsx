import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link } from 'react-router';
import { useUIStore } from '@/store';
import { authService } from '@/services/auth.service';
import { motion } from 'framer-motion';

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
      await authService.forgotPassword(email);
      setIsSubmitted(true);
      addToast('Reset link sent to your email!', 'success');
    } catch (error: any) {
      addToast(error.response?.data?.message || 'Failed to send reset link. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-8 p-4"
      >
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-success/10 text-success rounded-3xl flex items-center justify-center animate-bounce-slow">
            <span className="material-symbols-rounded text-5xl">mark_email_read</span>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-heading font-black">Check your email</h2>
          <p className="text-base-content/60 font-sans leading-relaxed">
            We've sent a password reset link to:<br/>
            <span className="font-bold text-primary block mt-1 text-lg">{email}</span>
          </p>
        </div>
        
        <div className="pt-4">
          <Link to="/login" className="btn btn-primary w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20">
            Back to Login
          </Link>
        </div>
        
        <p className="text-sm font-sans text-base-content/50">
          Didn't receive the email? <button onClick={() => setIsSubmitted(false)} className="text-primary font-bold hover:underline">Try another email</button>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-4">
          <span className="material-symbols-rounded text-3xl">lock_reset</span>
        </div>
        <h2 className="text-3xl font-heading font-black">Forgot Password?</h2>
        <p className="text-base-content/60 font-sans mt-2 italic">No worries, it happens to the best of us!</p>
      </div>

      <div className="bg-base-100 p-8 rounded-[2rem] shadow-xl border border-base-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-sm text-base-content/70 font-sans text-center px-2">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
          
          <Input 
            type="email" 
            label="Email Address" 
            placeholder="name@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20"
          />
          
          <Button 
            type="submit" 
            className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20" 
            loading={isLoading}
          >
            Send Reset Link
          </Button>
          
          <p className="text-center text-sm font-sans text-base-content/60">
            Remember your password? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
