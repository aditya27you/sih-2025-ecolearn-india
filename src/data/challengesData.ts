export interface Challenge {
  id: string | number;
  title: string;
  description: string;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  
  // Extended fields for rich content
  concept?: string;
  learningObjectives?: string[];
  materials?: string[];
  procedure?: string[];
  timeRequired?: string;
  studentOutput?: string;
  realLifeImpact?: string;
}

export const challengesData: Challenge[] = [
  {
    id: 1,
    title: 'Tree Planting',
    description: 'Plant a sapling in your neighborhood or school and provide a photo of the activity.',
    points: 100,
    difficulty: 'Medium',
    concept: 'Trees & Plants',
    learningObjectives: [
      'Understand the process of planting a tree',
      'Learn about native tree species',
      'Develop a sense of responsibility towards nature'
    ],
    materials: ['Sapling', 'Shovel', 'Watering can', 'Compost'],
    procedure: [
      'Select a suitable spot for planting',
      'Dig a hole twice the width of the root ball',
      'Place the sapling gently and fill with soil',
      'Water immediately and add compost'
    ],
    timeRequired: '1-2 Hours',
    studentOutput: 'Photo of the planted sapling',
    realLifeImpact: 'Increases green cover and reduces carbon footprint'
  },
  {
    id: 2,
    title: 'Waste Audit',
    description: 'Track your household waste for a week and categorize it into recyclable and non-recyclable items.',
    points: 50,
    difficulty: 'Easy',
    concept: 'Waste Management',
    learningObjectives: [
      'Identify different types of waste',
      'Understand the volume of waste generated',
      'Learn basics of segregation'
    ],
    materials: ['Notepad', 'Pen', 'Gloves', 'Weighing scale (optional)'],
    procedure: [
      'Designate bins for dry and wet waste',
      'Record the type of waste thrown daily',
      'Categorize items at the end of the day',
      'Summarize findings after a week'
    ],
    timeRequired: '1 Week (15 mins daily)',
    studentOutput: 'A simple waste audit report table',
    realLifeImpact: 'Promotes recycling and reduces landfill waste'
  },
  {
    id: 3,
    title: 'Energy Saving Week',
    description: 'Monitor and reduce your electricity consumption by turning off unnecessary lights and appliances for 7 days.',
    points: 150,
    difficulty: 'Hard',
    concept: 'Energy & Sustainability',
    learningObjectives: [
      'Identify energy vampires at home',
      'Build habits of conserving electricity',
      'Understand the link between energy and environment'
    ],
    materials: ['Checklist', 'Stickers (reminders)'],
    procedure: [
      'Create a checklist of all lights and fans',
      'Ensure everything is off when leaving a room',
      'Unplug chargers not in use',
      'Track your success for 7 days'
    ],
    timeRequired: '1 Week',
    studentOutput: 'A completed 7-day tracking sheet',
    realLifeImpact: 'Saves electricity and lowers carbon emissions'
  },
  {
    id: 4,
    title: 'The Water Detective',
    description: 'Investigate your home for leaks and water wastage points.',
    points: 80,
    difficulty: 'Medium',
    concept: 'Water Conservation',
    learningObjectives: [
      'Identify sources of water wastage',
      'Learn how to measure water flow',
      'Understand value of every drop'
    ],
    materials: ['Paper', 'Pencil', 'Stopwatch', 'Bucket/Mug'],
    procedure: [
      'Walk through kitchen, bathroom, and garden',
      'Listen for dripping taps or pipes',
      'Measure how much water a leaky tap wastes in 10 mins',
      'Report any leaks to parents for fixing'
    ],
    timeRequired: '1 Hour',
    studentOutput: 'A "Water Detective Report" listing leaks found',
    realLifeImpact: 'Prevents water loss and saves precious resource'
  },
  {
    id: 5,
    title: 'Trash to Treasure',
    description: 'Create a useful object using only waste materials found at home.',
    points: 120,
    difficulty: 'Easy',
    concept: 'Waste Management & Creativity',
    learningObjectives: [
      'Practice upcycling',
      'Enhance creative thinking',
      'Reduce waste sent to landfills'
    ],
    materials: ['Old bottles', 'Cardboard', 'Newspapers', 'Glue', 'Scissors'],
    procedure: [
      'Collect clean waste items like boxes or bottles',
      'Brainstorm an idea (e.g., pen stand, bird feeder)',
      'Cut and assemble the materials',
      'Decorate your creation'
    ],
    timeRequired: '2 Hours',
    studentOutput: 'Photo of the upcycled item',
    realLifeImpact: 'Demonstrates circular economy principles'
  },
  {
    id: 6,
    title: 'My Green Corner',
    description: 'Set up a small green space in your room or balcony using potted plants.',
    points: 60,
    difficulty: 'Easy',
    concept: 'Trees & Plants',
    learningObjectives: [
      'Learn to care for indoor plants',
      'Observe plant growth',
      'Improve indoor air quality'
    ],
    materials: ['Small pots (or recycled cups)', 'Soil', 'Seeds/Small plants', 'Water'],
    procedure: [
      'Choose a spot with some sunlight',
      'Fill pots with soil',
      'Plant seeds or transfer small plants',
      'Water gently and observe daily'
    ],
    timeRequired: '30 Mins (setup) + Daily care',
    studentOutput: 'Photo of your green corner',
    realLifeImpact: 'Improves mental well-being and air quality'
  }
];