import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';
import type {Challenge} from '@/data/challengesData';

export interface ChallengeSubmissionProps {
  challenge: Challenge;
  onClose: () => void;
  onSuccess: () => void;
}

export const ChallengeSubmission: React.FC<ChallengeSubmissionProps> = ({
  challenge,
  onClose,
  onSuccess,
}) => {
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        <div className="p-6 border-b border-base-200 flex justify-between items-center">
          <h3 className="text-xl font-heading font-bold">Submit Proof: {challenge.title}</h3>
          <button onClick={onClose} className="btn btn-circle btn-ghost btn-sm">
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <FormField label="Description of your action">
            <textarea 
              className="textarea textarea-bordered w-full font-sans min-h-[120px]" 
              placeholder="Tell us what you did and any impact you observed..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormField>

          <FormField label="Upload Proof (Photo)">
            <div className="border-2 border-dashed border-base-300 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <span className="material-symbols-rounded text-4xl text-base-content/30">add_a_photo</span>
              <p className="text-sm text-base-content/50 mt-2 font-sans">
                Click to upload or drag and drop<br/>
                PNG, JPG or WEBP (max. 5MB)
              </p>
              <input type="file" className="hidden" accept="image/*" />
            </div>
          </FormField>

          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              className="flex-grow" 
              loading={isSubmitting}
            >
              Submit for Verification
            </Button>
            <Button type="button" variant="ghost" onClick={onClose}>
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
