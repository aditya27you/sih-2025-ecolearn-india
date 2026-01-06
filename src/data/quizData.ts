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
  '5': {
    moduleId: '5',
    title: 'Gwalior\'s Green Heritage Quiz',
    questions: [
      {
        id: 'q1',
        question: 'What type of climate does Gwalior typically have?',
        options: ['Tropical Rainforest', 'Cold Desert', 'Dry Deciduous (Hot Summer)', 'Snowy Alpine'],
        correctAnswer: 2,
      },
      {
        id: 'q2',
        question: 'Which heritage tree near Tansen\'s Tomb is famous for supposedly sweetening one\'s voice?',
        options: ['Peepal', 'Tamarind', 'Banyan', 'Mango'],
        correctAnswer: 1,
      },
      {
        id: 'q3',
        question: 'Which tree is known as the National Tree of India and has aerial roots?',
        options: ['Neem', 'Arjun', 'Banyan (Bargad)', 'Amaltas'],
        correctAnswer: 2,
      },
    ],
  },
  '6': {
    moduleId: '6',
    title: 'Medicinal Trees of Gwalior Quiz',
    questions: [
      {
        id: 'q1',
        question: 'Which tree is often called the "Village Pharmacy" for its many skin and health benefits?',
        options: ['Neem', 'Banyan', 'Teak', 'Ashoka'],
        correctAnswer: 0,
      },
      {
        id: 'q2',
        question: 'The bark of the Arjun tree is primarily used in Ayurveda to treat which organ?',
        options: ['Lungs', 'Heart', 'Kidneys', 'Eyes'],
        correctAnswer: 1,
      },
      {
        id: 'q3',
        question: 'Why is the Amaltas tree also known as the "Golden Shower"?',
        options: ['It sheds golden leaves', 'It has beautiful yellow hanging flowers', 'Its wood is gold-colored', 'It grows in gold mines'],
        correctAnswer: 1,
      },
    ],
  },
  '7': {
    moduleId: '7',
    title: 'Trees & Biodiversity Quiz',
    questions: [
      {
        id: 'q1',
        question: 'What do trees provide to birds and animals?',
        options: ['Plastic waste', 'Shelter and food', 'Noise pollution', 'Concrete'],
        correctAnswer: 1,
      },
      {
        id: 'q2',
        question: 'What role do trees play in the food chain?',
        options: ['Consumers', 'Decomposers', 'Producers', 'Predators'],
        correctAnswer: 2,
      },
      {
        id: 'q3',
        question: 'What is a simple action students can take to help trees?',
        options: ['Waste more paper', 'Cut down saplings', 'Plant native trees and protect them', 'Litter in parks'],
        correctAnswer: 2,
      },
    ],
  },
};
