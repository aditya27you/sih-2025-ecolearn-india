export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  points: number;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'Climate Change 101',
    description: 'Learn the basics of climate change, its causes, and its impact on our planet.',
    difficulty: 'Beginner',
    points: 50,
    lessons: [
      {
        id: '1-1',
        title: 'What is Climate Change?',
        content: 'Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil and gas, which produces heat-trapping gases.',
      },
      {
        id: '1-2',
        title: 'The Greenhouse Effect',
        content: 'The greenhouse effect is the process by which radiation from a planet\'s atmosphere warms the planet\'s surface to a temperature above what it would be without its atmosphere.',
      },
      {
        id: '1-3',
        title: 'Causes of Global Warming',
        content: 'Generating electricity and heat by burning fossil fuels causes a large chunk of global emissions. Manufacturing and industry produce emissions, mostly from burning fossil fuels to produce energy for making things like cement, iron, steel, electronics, plastics, clothes, and other goods.',
      }
    ]
  },
  {
    id: '2',
    title: 'Waste Management',
    description: 'Understand the importance of waste segregation and the 3Rs: Reduce, Reuse, and Recycle.',
    difficulty: 'Intermediate',
    points: 100,
    lessons: [
      {
        id: '2-1',
        title: 'Waste Segregation Basics',
        content: 'Waste segregation is the process of dividing waste into dry and wet. Dry waste includes paper, glass, plastic, and metal. Wet waste includes kitchen waste such as vegetable peels, fruit scraps, and leftover food.',
      },
      {
        id: '2-2',
        title: 'The 3 Rs',
        content: 'Reduce, Reuse, and Recycle. Reducing means using fewer resources. Reusing means using things again. Recycling means turning waste into new products.',
      }
    ]
  }
];
