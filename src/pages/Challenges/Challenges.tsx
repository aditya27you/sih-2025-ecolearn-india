import React, { useState } from 'react';
import { ChallengeCard } from '@/components/molecules/ChallengeCard';
import { challengesData, Challenge } from '@/data/challengesData';
import { SearchBar } from '@/components/molecules/SearchBar';
import { ChallengeDetail } from '@/components/organisms/ChallengeDetail';
import { ChallengeSubmission } from '@/components/organisms/ChallengeSubmission';

const Challenges: React.FC = () => {
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(challengesData);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [submittingChallenge, setSubmittingChallenge] = useState<Challenge | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = challengesData.filter(
      (c) => 
        c.title.toLowerCase().includes(lowerQuery) || 
        c.description.toLowerCase().includes(lowerQuery)
    );
    setFilteredChallenges(filtered);
  };

  const handleViewDetails = (id: string | number) => {
    const challenge = challengesData.find((c) => c.id === id);
    if (challenge) {
      setSelectedChallenge(challenge);
    }
  };

  const handleStartSubmission = (id: string | number) => {
    const challenge = challengesData.find((c) => c.id === id);
    if (challenge) {
      setSubmittingChallenge(challenge);
      setSelectedChallenge(null);
    }
  };

  const handleSubmissionSuccess = () => {
    setSubmittingChallenge(null);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 5000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary">Eco-Challenges</h1>
          <p className="text-base-content/70 font-sans">
            Take real-world actions and earn eco-points.
          </p>
        </div>
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Search challenges..." 
          className="max-w-md"
        />
      </div>

      {filteredChallenges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              {...challenge}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="material-symbols-rounded text-6xl text-base-content/20">search_off</span>
          <h3 className="text-xl font-heading mt-4">No challenges found</h3>
          <p className="text-base-content/50">Try adjusting your search query.</p>
        </div>
      )}

      {selectedChallenge && (
        <ChallengeDetail 
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
          onSubmit={handleStartSubmission}
        />
      )}

      {submittingChallenge && (
        <ChallengeSubmission 
          challenge={submittingChallenge}
          onClose={() => setSubmittingChallenge(null)}
          onSuccess={handleSubmissionSuccess}
        />
      )}

      {showSuccessToast && (
        <div className="toast toast-end toast-bottom z-[200]">
          <div className="alert alert-success shadow-lg">
            <span className="material-symbols-rounded">check_circle</span>
            <span className="font-sans">Challenge submitted successfully! Pending verification.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenges;
