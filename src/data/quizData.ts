export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  moduleId: string;
  title: string;
  questions: Question[];
}

export const quizzes: Record<string, QuizData> = {
  '1': {
    moduleId: '1',
    title: 'Climate Change 101 Quiz',
    questions: [
      {
        id: 'q1',
        question: 'Which of the following is a major greenhouse gas?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        correctAnswer: 2,
      },
      {
        id: 'q2',
        question: 'What is the primary cause of the enhanced greenhouse effect?',
        options: ['Volcanic eruptions', 'Burning fossil fuels', 'Solar radiation', 'Ocean currents'],
        correctAnswer: 1,
      },
      {
        id: 'q3',
        question: 'Which sector contributes the most to global greenhouse gas emissions?',
        options: ['Agriculture', 'Transportation', 'Energy production', 'Industrial processes'],
        correctAnswer: 2,
      },
    ],
  },
  '2': {
    moduleId: '2',
    title: 'Waste Management Quiz',
    questions: [
      {
        id: 'q1',
        question: 'Which of these materials is biodegradable?',
        options: ['Plastic bottle', 'Aluminum can', 'Banana peel', 'Glass jar'],
        correctAnswer: 2,
      },
      {
        id: 'q2',
        question: 'What does the "3 Rs" of waste management stand for?',
        options: ['Remove, Replace, Recycle', 'Reduce, Reuse, Recycle', 'Refuse, Reform, Restore', 'Read, Research, Resolve'],
        correctAnswer: 1,
      },
    ],
  },
};
