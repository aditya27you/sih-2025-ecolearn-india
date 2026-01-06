import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link, useNavigate } from 'react-router';
import { authService } from '@/services/auth.service';
import { useUserStore, useUIStore } from '@/store';

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
    } catch (error) {
      addToast(error instanceof Error ? error.message : 'Login failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-center">Login</h2>
      <Input 
        type="email" 
        label="Email" 
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input 
        type="password" 
        label="Password" 
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="w-full mt-4" 
        loading={isLoading}
      >
        Login
      </Button>
      <p className="text-center text-sm font-sans">
        Don't have an account? <Link to="/signup" className="link link-primary">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
