import api from '../utils/api';

export interface LessonProgress {
  moduleId: string;
  lessonId: string;
}

export interface QuizSubmission {
  moduleId: string;
  score: number;
}

export const quizService = {
  /**
   * Mark a lesson as complete
   */
  completeLesson: async (moduleId: string, lessonId: string): Promise<any> => {
    const response = await api.post('/learning/progress', { 
      moduleId, 
      lessonId 
    });
    return response.data;
  },

  /**
   * Submit quiz results
   */
  submitQuiz: async (moduleId: string, score: number): Promise<any> => {
    const response = await api.post('/learning/quiz', { 
      moduleId, 
      score 
    });
    return response.data;
  }
};
