import React from 'react';
import { useUserStore } from '@/store';
import { PageTransition } from '@/components/atoms/PageTransition';
import { Card } from '@/components/molecules/Card';
import { Badge } from '@/components/atoms/Badge';
import { Link } from 'react-router';

const MySubmissions: React.FC = () => {
  const { user } = useUserStore();
  const submissions = user?.submissions || [];

  return (
    <PageTransition>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">My Submissions</h1>
            <p className="text-base-content/70 font-sans">
              Track the status of your eco-challenge proofs.
            </p>
          </div>
          <Link to="/challenges" className="btn btn-ghost btn-sm">
            <span className="material-symbols-rounded mr-2">arrow_back</span>
            Back to Challenges
          </Link>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-20 bg-base-100 rounded-3xl border border-base-300">
            <span className="material-symbols-rounded text-6xl text-base-content/20">inbox</span>
            <h3 className="text-xl font-heading mt-4 font-bold">No submissions yet</h3>
            <p className="text-base-content/50 mb-6">Start a challenge to see your progress here.</p>
            <Link to="/challenges" className="btn btn-primary">Browse Challenges</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((submission) => (
              <Card 
                key={submission.id}
                title={submission.challengeTitle}
                className="hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-base-200">
                    <img 
                      src={submission.imageUrl} 
                      alt="Proof" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <Badge 
                        variant={
                          submission.status === 'approved' ? 'success' :
                          submission.status === 'rejected' ? 'error' : 'warning'
                        } 
                        size="sm"
                      >
                        {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                      </Badge>
                      <span className="text-xs text-base-content/50">
                        {new Date(submission.submittedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="font-bold text-primary text-sm">
                      {submission.points} pts
                    </span>
                  </div>

                  <p className="text-sm text-base-content/70 bg-base-200 p-3 rounded-lg line-clamp-3 italic">
                    "{submission.description}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default MySubmissions;
