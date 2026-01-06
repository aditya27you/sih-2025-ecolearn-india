import React from 'react';
import { useUserStore } from '@/store';
import { Button } from '@/components/atoms/Button';
import { Link } from 'react-router';

const Profile: React.FC = () => {
  const { user } = useUserStore();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-300">
        <div className="h-32 bg-primary/10"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="p-1 bg-base-100 rounded-full">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-32 h-32 rounded-full border-4 border-base-100 shadow-sm"
              />
            </div>
            <Link to="/profile/edit">
              <Button variant="secondary" size="sm">Edit Profile</Button>
            </Link>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-heading font-bold">{user.name}</h1>
            <p className="text-base-content/60 font-sans">{user.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-base-200 p-4 rounded-2xl text-center">
              <p className="text-sm text-base-content/60 uppercase tracking-wider font-bold">Eco Points</p>
              <p className="text-3xl font-heading font-black text-primary">{user.ecoPoints}</p>
            </div>
            <div className="bg-base-200 p-4 rounded-2xl text-center">
              <p className="text-sm text-base-content/60 uppercase tracking-wider font-bold">Current Streak</p>
              <p className="text-3xl font-heading font-black text-secondary">{user.streak} Days</p>
            </div>
            <div className="bg-base-200 p-4 rounded-2xl text-center">
              <p className="text-sm text-base-content/60 uppercase tracking-wider font-bold">Role</p>
              <p className="text-3xl font-heading font-black text-accent capitalize">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
