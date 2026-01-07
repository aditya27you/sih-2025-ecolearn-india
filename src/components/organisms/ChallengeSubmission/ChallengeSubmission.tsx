import React, { useState, useRef } from 'react';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';
import type { Challenge } from '@/data/challengesData';
import { useUIStore, useUserStore } from '@/store';
import api from '@/utils/api';

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addToast = useUIStore((state) => state.addToast);
  const addSubmission = useUserStore((state) => state.addSubmission);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        addToast('File size must be less than 5MB', 'error');
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      addToast('Please upload a photo as proof', 'error');
      return;
    }

    setIsSubmitting(true);
    
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('challengeId', challenge.id.toString());
    formData.append('challengeTitle', challenge.title);
    formData.append('description', description);
    formData.append('points', challenge.points.toString());

    try {
      // Real API Call
      const response = await api.post('/challenges/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      addSubmission(response.data.submission);
      addToast('Proof submitted successfully! A teacher will verify it soon.', 'success');
      onSuccess();
    } catch {
      addToast('Failed to submit proof. Please check your connection.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        <div className="p-6 border-b border-base-200 flex justify-between items-center bg-primary/5">
          <div>
            <h3 className="text-xl font-heading font-bold">Submit Proof</h3>
            <p className="text-xs text-base-content/60 font-sans">{challenge.title}</p>
          </div>
          <button onClick={onClose} className="btn btn-circle btn-ghost btn-sm">
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          <FormField label="Description of your action">
            <textarea 
              className="textarea textarea-bordered w-full font-sans min-h-[100px] bg-base-200/50" 
              placeholder="What did you do? Mention any impact you saw..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </FormField>

          <FormField label="Upload Proof (Photo)">
            {!imagePreview ? (
              <div 
                className="border-2 border-dashed border-base-300 rounded-xl p-8 text-center hover:border-primary transition-all cursor-pointer bg-base-200/30 hover:bg-primary/5 group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-12 h-12 bg-base-200 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-content transition-colors">
                  <span className="material-symbols-rounded text-2xl">add_a_photo</span>
                </div>
                <p className="text-sm text-base-content/70 mt-3 font-sans font-medium">
                  Click to select a photo
                </p>
                <p className="text-xs text-base-content/40 mt-1 font-sans">
                  PNG, JPG or WEBP (max. 5MB)
                </p>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                />
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-base-300">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button 
                    type="button" 
                    onClick={removeImage}
                    className="btn btn-error btn-sm gap-2"
                    disabled={isSubmitting}
                  >
                    <span className="material-symbols-rounded text-sm">delete</span>
                    Remove
                  </button>
                </div>
                {isSubmitting && (
                  <div className="absolute inset-0 bg-base-100/60 backdrop-blur-sm flex flex-col items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="text-xs font-bold mt-2 uppercase tracking-widest text-primary">Uploading Proof...</p>
                  </div>
                )}
              </div>
            )}
          </FormField>

          <div className="flex gap-3 pt-4 border-t border-base-200">
            <Button 
              type="submit" 
              variant="primary" 
              className="flex-grow" 
              loading={isSubmitting}
              disabled={!selectedFile || !description}
            >
              Submit for Verification
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
