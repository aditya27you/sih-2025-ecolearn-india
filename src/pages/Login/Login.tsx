import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link, useNavigate } from 'react-router';
import { authService } from '@/services/auth.service';
import { useUserStore, useUIStore } from '@/store';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const setAuth = useUserStore((state) => state.setAuth);
  const addToast = useUIStore((state) => state.addToast);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Please fill in all fields', 'error');
      return;
    }

    setIsLoading(true);
    try {
      const response = await authService.login(email, password);
      setAuth(response.user, response.token);
      addToast('Welcome back!', 'success');
      navigate('/dashboard');
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        (error instanceof Error ? error.message : 'Login failed');
      addToast(errorMessage, 'error');
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
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
          <span className="material-symbols-rounded text-3xl">eco</span>
        </div>
        <h2 className="text-3xl font-heading font-black">Welcome Back</h2>
        <p className="text-base-content/60 font-sans mt-2">Continue your sustainability journey</p>
      </div>

      <div className="bg-base-100 p-8 rounded-[2rem] shadow-xl border border-base-200">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            type="email" 
            label="Email Address" 
            placeholder="name@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20"
          />
          <div className="space-y-1">
            <Input 
              type="password" 
              label="Password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="text-right">
              <Link to="/forgot-password" disable-nav="true" className="text-xs link link-primary no-underline hover:underline font-bold">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20" 
            loading={isLoading}
          >
            Sign In
          </Button>
        </form>

        <div className="divider my-8 text-xs text-base-content/40 uppercase tracking-widest font-bold">OR</div>

        <p className="text-center text-sm font-sans text-base-content/60">
          Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
