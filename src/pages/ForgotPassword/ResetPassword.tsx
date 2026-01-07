import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { useUIStore } from '@/store';
import { authService } from '@/services/auth.service';
import { motion } from 'framer-motion';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const navigate = useNavigate();
  const addToast = useUIStore((state) => state.addToast);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      addToast('Please fill in all fields', 'error');
      return;
    }
    if (password !== confirmPassword) {
      addToast('Passwords do not match', 'error');
      return;
    }
    if (!token) {
      addToast('Invalid or missing reset token', 'error');
      return;
    }

    setIsLoading(true);
    try {
      await authService.resetPassword(password, token);
      addToast('Password reset successfully! You can now login.', 'success');
      navigate('/login');
    } catch (error: any) {
      addToast(error.response?.data?.message || 'Failed to reset password. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-4">
          <span className="material-symbols-rounded text-3xl">key</span>
        </div>
        <h2 className="text-3xl font-heading font-black">New Password</h2>
        <p className="text-base-content/60 font-sans mt-2">Create a strong password for your account</p>
      </div>

      <div className="bg-base-100 p-8 rounded-[2rem] shadow-xl border border-base-200">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            type="password" 
            label="New Password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20"
          />

          <Input 
            type="password" 
            label="Confirm New Password" 
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            className="bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20"
          />
          
          <Button 
            type="submit" 
            className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 mt-4" 
            loading={isLoading}
          >
            Reset Password
          </Button>
          
          <p className="text-center text-sm font-sans text-base-content/60">
            Wait, I remembered! <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
