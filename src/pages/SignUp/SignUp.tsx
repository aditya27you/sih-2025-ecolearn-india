import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Link, useNavigate } from 'react-router';
import { authService } from '@/services/auth.service';
import { useUserStore, useUIStore } from '@/store';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const setAuth = useUserStore((state) => state.setAuth);
  const addToast = useUIStore((state) => state.addToast);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      addToast('Please fill in all fields', 'error');
      return;
    }

    setIsLoading(true);
    try {
      const response = await authService.register(name, email, password);
      setAuth(response.user, response.token);
      addToast('Account created successfully!', 'success');
      navigate('/dashboard');
    } catch (error) {
      addToast(error instanceof Error ? error.message : 'Registration failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-center">Create Account</h2>
      <Input 
        type="text" 
        label="Full Name" 
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
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
        Sign Up
      </Button>
      <p className="text-center text-sm font-sans">
        Already have an account? <Link to="/login" className="link link-primary">Login</Link>
      </p>
    </form>
  );
};

export default SignUp;
