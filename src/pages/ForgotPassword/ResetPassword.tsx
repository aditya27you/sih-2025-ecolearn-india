import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link, useNavigate } from 'react-router';
import { useUIStore } from '@/store';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      addToast('Password reset successfully!', 'success');
      navigate('/login');
    } catch {
      addToast('Failed to reset password. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-heading font-bold">Reset Password</h2>
        <p className="text-sm text-base-content/60 mt-2">
          Enter your new password below.
        </p>
      </div>
      
      <Input 
        type="password" 
        label="New Password" 
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />

      <Input 
        type="password" 
        label="Confirm New Password" 
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={isLoading}
      />
      
      <Button 
        type="submit" 
        className="w-full mt-4" 
        loading={isLoading}
      >
        Reset Password
      </Button>
      
      <p className="text-center text-sm font-sans">
        Back to <Link to="/login" className="link link-primary">Login</Link>
      </p>
    </form>
  );
};

export default ResetPassword;
