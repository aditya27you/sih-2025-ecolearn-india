export interface Challenge {
  id: string | number;
  title: string;
  description: string;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const challengesData: Challenge[] = [
  {
    id: 1,
    title: 'Tree Planting',
    description: 'Plant a sapling in your neighborhood or school and provide a photo of the activity.',
    points: 100,
    difficulty: 'Medium',
  },
  {
    id: 2,
    title: 'Waste Audit',
    description: 'Track your household waste for a week and categorize it into recyclable and non-recyclable items.',
    points: 50,
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: 'Energy Saving Week',
    description: 'Monitor and reduce your electricity consumption by turning off unnecessary lights and appliances for 7 days.',
    points: 150,
    difficulty: 'Hard',
  },
  {
    id: 4,
    title: 'Water Conservation',
    description: 'Fix a leaky tap or install a water-saving device at home and document the process.',
    points: 80,
    difficulty: 'Medium',
  },
  {
    id: 5,
    title: 'Composting at Home',
    description: 'Start a small compost bin for your kitchen waste and share your progress after two weeks.',
    points: 120,
    difficulty: 'Hard',
  },
];
