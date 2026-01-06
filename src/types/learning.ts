export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: string;
}

export interface ModuleProgress {
  moduleId: string;
  completedLessons: string[]; // Array of lesson IDs
  isCompleted: boolean;
  quizScore?: number;
  lastAccessed: string;
}

export interface QuizState {
  currentModuleId: string | null;
  currentQuestionIndex: number;
  answers: Record<number, number>; // index -> choiceIndex
  isFinished: boolean;
  score: number;
  startTime?: string;
}

export interface LearningState {
  modulesProgress: Record<string, ModuleProgress>; // moduleId -> progress
  activeQuiz: QuizState | null;
}
