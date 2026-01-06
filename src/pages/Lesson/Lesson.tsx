import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '@/components/atoms/Button';
import { useLearningStore, useUIStore } from '@/store';
import { modules } from '@/data/modulesData';

const Lesson: React.FC = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { markLessonComplete, modulesProgress } = useLearningStore();
  const { addToast } = useUIStore();

  const moduleData = useMemo(() => modules.find(m => m.id === moduleId), [moduleId]);
  const lessonData = useMemo(() => moduleData?.lessons.find(l => l.id === lessonId), [moduleData, lessonId]);
  
  const lessonIndex = useMemo(() => 
    moduleData?.lessons.findIndex(l => l.id === lessonId) ?? -1
  , [moduleData, lessonId]);

  const isLastLesson = lessonIndex === (moduleData?.lessons.length ?? 0) - 1;
  const isCompleted = modulesProgress[moduleId ?? '']?.completedLessons.includes(lessonId ?? '');

  const handleMarkComplete = () => {
    if (moduleId && lessonId) {
      markLessonComplete(moduleId, lessonId);
      addToast('Lesson marked as complete!', 'success');
    }
  };

  const handleNext = () => {
    if (!moduleData || lessonIndex === -1) return;
    
    if (isLastLesson) {
      navigate(`/learn/quiz/${moduleId}`);
    } else {
      const nextLessonId = moduleData.lessons[lessonIndex + 1].id;
      navigate(`/learn/module/${moduleId}/lesson/${nextLessonId}`);
    }
  };

  if (!moduleData || !lessonData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-heading">Lesson not found</h2>
        <Button variant="ghost" onClick={() => navigate('/modules')}>Back to Modules</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/modules')}
          className="mb-4"
        >
          <span className="material-symbols-rounded mr-2">arrow_back</span>
          Back to Modules
        </Button>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-sans font-bold text-primary uppercase tracking-widest">
              {moduleData.title} • Lesson {lessonIndex + 1} of {moduleData.lessons.length}
            </span>
            <h1 className="text-3xl font-heading font-bold mt-1">{lessonData.title}</h1>
          </div>
          {isCompleted && (
            <span className="badge badge-success gap-2">
              <span className="material-symbols-rounded text-xs">check</span>
              Completed
            </span>
          )}
        </div>
      </div>

      <article className="prose lg:prose-xl bg-base-100 p-8 rounded-3xl shadow-sm border border-base-300">
        <div className="font-sans whitespace-pre-wrap leading-relaxed">
          {lessonData.content}
        </div>
        
        {lessonData.videoUrl && (
          <div className="aspect-video w-full mt-8 rounded-2xl overflow-hidden bg-black">
            {/* Placeholder for video player */}
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <span className="material-symbols-rounded text-6xl">play_circle</span>
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-base-200">
          {!isCompleted && (
            <Button 
              variant="secondary" 
              className="flex-1"
              onClick={handleMarkComplete}
            >
              Mark as Complete
            </Button>
          )}
          <Button 
            variant="primary" 
            className="flex-1"
            onClick={handleNext}
            disabled={!isCompleted && !isLastLesson} // Optional: Force mark complete before next
          >
            {isLastLesson ? 'Take Final Quiz' : 'Next Lesson'}
            <span className="material-symbols-rounded ml-2">
              {isLastLesson ? 'quiz' : 'arrow_forward'}
            </span>
          </Button>
        </div>
      </article>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-base-300">
        <div 
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${((lessonIndex + 1) / moduleData.lessons.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Lesson;
