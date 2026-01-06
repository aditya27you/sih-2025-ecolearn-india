import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { LearningState, ModuleProgress, QuizState } from '../types/learning';

interface LearningActions {
  // Module Progress Actions
  updateModuleProgress: (moduleId: string, updates: Partial<ModuleProgress>) => void;
  markLessonComplete: (moduleId: string, lessonId: string) => void;
  
  // Quiz Actions
  startQuiz: (moduleId: string) => void;
  setQuizAnswer: (questionIndex: number, answerIndex: number) => void;
  nextQuestion: () => void;
  finishQuiz: (score: number) => void;
  resetQuiz: () => void;
  
  // System Actions
  reset: () => void;
}

type LearningStore = LearningState & LearningActions;

const initialQuizState: QuizState = {
  currentModuleId: null,
  currentQuestionIndex: 0,
  answers: {},
  isFinished: false,
  score: 0,
};

export const useLearningStore = create<LearningStore>()(
  persist(
    (set) => ({
      // Initial State
      modulesProgress: {},
      activeQuiz: null,

      // Actions
      reset: () => set({ modulesProgress: {}, activeQuiz: null }),

      updateModuleProgress: (moduleId, updates) => 
        set((state) => ({
          modulesProgress: {
            ...state.modulesProgress,
            [moduleId]: {
              ...(state.modulesProgress[moduleId] || {
                moduleId,
                completedLessons: [],
                isCompleted: false,
                lastAccessed: new Date().toISOString()
              }),
              ...updates,
              lastAccessed: new Date().toISOString()
            }
          }
        })),

      markLessonComplete: (moduleId, lessonId) => 
        set((state) => {
          const currentProgress = state.modulesProgress[moduleId] || {
            moduleId,
            completedLessons: [],
            isCompleted: false,
            lastAccessed: new Date().toISOString()
          };

          if (currentProgress.completedLessons.includes(lessonId)) return state;

          return {
            modulesProgress: {
              ...state.modulesProgress,
              [moduleId]: {
                ...currentProgress,
                completedLessons: [...currentProgress.completedLessons, lessonId],
                lastAccessed: new Date().toISOString()
              }
            }
          };
        }),

      startQuiz: (moduleId) => 
        set({
          activeQuiz: {
            ...initialQuizState,
            currentModuleId: moduleId,
            startTime: new Date().toISOString()
          }
        }),

      setQuizAnswer: (index, answer) => 
        set((state) => ({
          activeQuiz: state.activeQuiz 
            ? {
                ...state.activeQuiz,
                answers: { ...state.activeQuiz.answers, [index]: answer }
              }
            : null
        })),

      nextQuestion: () => 
        set((state) => ({
          activeQuiz: state.activeQuiz 
            ? { ...state.activeQuiz, currentQuestionIndex: state.activeQuiz.currentQuestionIndex + 1 }
            : null
        })),

      finishQuiz: (score) => 
        set((state) => {
          if (!state.activeQuiz || !state.activeQuiz.currentModuleId) return state;
          
          const moduleId = state.activeQuiz.currentModuleId;
          
          return {
            modulesProgress: {
              ...state.modulesProgress,
              [moduleId]: {
                ...(state.modulesProgress[moduleId] || {
                  moduleId,
                  completedLessons: [],
                  isCompleted: false,
                  lastAccessed: new Date().toISOString()
                }),
                quizScore: score,
                isCompleted: true,
                lastAccessed: new Date().toISOString()
              }
            },
            activeQuiz: { ...state.activeQuiz, isFinished: true, score }
          };
        }),

      resetQuiz: () => set({ activeQuiz: null }),
    }),
    {
      name: 'ecolearn-learning-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
