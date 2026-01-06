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
  '3': {
    moduleId: '3',
    title: 'The Life of Plants Quiz',
    questions: [
      {
        id: 'q1',
        question: 'Which part of the plant is primarily responsible for absorbing water and nutrients?',
        options: ['Leaves', 'Stem', 'Roots', 'Flowers'],
        correctAnswer: 2,
      },
      {
        id: 'q2',
        question: 'During photosynthesis, what gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
        correctAnswer: 1,
      },
      {
        id: 'q3',
        question: 'What important substance do plants release that humans and animals need to breathe?',
        options: ['Carbon Dioxide', 'Methane', 'Oxygen', 'Hydrogen'],
        correctAnswer: 2,
      },
    ],
  },
  '4': {
    moduleId: '4',
    title: 'Water Conservation Quiz',
    questions: [
      {
        id: 'q1',
        question: 'Approximately what percentage of Earth\'s water is fresh and easily accessible?',
        options: ['50%', '10%', '1%', '70%'],
        correctAnswer: 2,
      },
      {
        id: 'q2',
        question: 'In the water cycle, what is the process called when water turns into vapor?',
        options: ['Condensation', 'Precipitation', 'Evaporation', 'Collection'],
        correctAnswer: 2,
      },
      {
        id: 'q3',
        question: 'Which of the following is a simple way to save water at home?',
        options: ['Leaving the tap running while brushing teeth', 'Taking long baths instead of showers', 'Fixing leaky faucets immediately', 'Watering plants at noon'],
        correctAnswer: 2,
      },
    ],
  },
};