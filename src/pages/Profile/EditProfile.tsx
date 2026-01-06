import React, { useState } from 'react';
import { useUserStore, useUIStore } from '@/store';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { useNavigate } from 'react-router';

const EditProfile: React.FC = () => {
  const { user, updateUser } = useUserStore();
  const addToast = useUIStore((state) => state.addToast);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      updateUser({ name, email });
      addToast('Profile updated successfully!', 'success');
      navigate('/profile');
    } catch (error) {
      addToast('Failed to update profile', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-base-100 rounded-3xl shadow-xl p-8 border border-base-300">
        <h1 className="text-2xl font-heading font-bold mb-6">Edit Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
          <Input 
            label="Email Address" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          
          <div className="flex gap-4 mt-8">
            <Button 
              type="button" 
              variant="ghost" 
              className="flex-1"
              onClick={() => navigate('/profile')}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="primary" 
              className="flex-1"
              loading={isLoading}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
