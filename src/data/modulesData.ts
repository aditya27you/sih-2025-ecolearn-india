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
  },
  {
    id: '3',
    title: 'The Life of Plants',
    description: 'Discover the fascinating world of plants, photosynthesis, and their role in the ecosystem.',
    difficulty: 'Beginner',
    points: 60,
    lessons: [
      {
        id: '3-1',
        title: 'Parts of a Plant',
        content: 'Roots anchor the plant and absorb water and nutrients. The stem supports the plant and transports fluids. Leaves are the site of photosynthesis. Flowers are the reproductive organs.',
      },
      {
        id: '3-2',
        title: 'Photosynthesis',
        content: 'Photosynthesis is the process used by plants, algae and certain bacteria to harness energy from sunlight and turn it into chemical energy. Here, carbon dioxide and water are converted into glucose (sugar) and oxygen.',
      },
      {
        id: '3-3',
        title: 'Why Plants Matter',
        content: 'Plants provide oxygen for us to breathe and food for us to eat. They also provide habitat for wildlife, prevent soil erosion, and help regulate the water cycle.',
      }
    ]
  },
  {
    id: '4',
    title: 'Water Conservation',
    description: 'Learn why water is scarce and how you can save it in your daily life.',
    difficulty: 'Beginner', 
    points: 70,
    lessons: [
      {
        id: '4-1',
        title: 'The Water Cycle',
        content: 'The water cycle describes how water evaporates from the surface of the earth, rises into the atmosphere, cools and condenses into rain or snow in clouds, and falls again to the surface as precipitation.',
      },
      {
        id: '4-2',
        title: 'Water Scarcity',
        content: 'Although 70% of Earth is covered in water, only about 2.5% is fresh water. Of that, only 1% is easily accessible. Population growth and pollution are putting stress on our water resources.',
      },
      {
        id: '4-3',
        title: 'Saving Water at Home',
        content: 'Simple actions can save gallons of water: turn off the tap while brushing teeth, fix leaky faucets, take shorter showers, and water plants early in the morning or late in the evening.',
      }
    ]
  }
];
