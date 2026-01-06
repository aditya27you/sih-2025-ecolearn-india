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
  prerequisiteId?: string;
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'The Climate Journey of Gwalior',
    description: 'Explore how Gwalior\'s landlocked geography creates extreme weather, from the scorching "Loo" to dense winter fog.',
    difficulty: 'Beginner',
    points: 50,
    lessons: [
      {
        id: '1-1',
        title: 'The Concept of Extremes',
        content: 'Gwalior follows a Subtropical Climate pattern. Unlike coastal cities (like Mumbai) where the weather stays similar all year, Gwalior is "landlocked," meaning it is far from the ocean. This makes the weather jump from one extreme to another.\n\nScientific Concept: Continentality. Because Gwalior is in the heart of India, the land heats up very quickly and cools down very quickly.\n\nThe Three Pillars:\n1. Summer: Heat and Dust.\n2. Monsoon: Humidity and Clouds.\n3. Winter: Cold and Fog.',
      },
      {
        id: '1-2',
        title: 'Surviving the Great Heat',
        content: 'From March to June, Gwalior becomes one of the hottest cities in India.\n\nThe "Loo" Effect: The Loo is a thermal wind. It isn\'t just a breeze; it is a high-pressure wind that can cause heatstroke. Experts suggest staying indoors between 11 AM and 4 PM during peak summer.\n\nThe 48°C Challenge: When temperatures hit 48°C, the ground loses moisture rapidly. This makes the soil dusty and hard.',
      },
      {
        id: '1-3',
        title: 'The Monsoon Cycle',
        content: 'The Monsoon usually arrives in Gwalior by late June. It is the most important season for the city’s survival.\n\nRainfall Patterns: Gwalior receives about 750 mm of rain annually. Most of this comes from the South-West Monsoon winds blowing from the Arabian Sea and the Bay of Bengal.\n\nHumidity: This is when the air holds the most water vapor. Even if it isn\'t "hot," you will sweat more because the sweat cannot evaporate into the moist air.\n\nGeography: The hills around Gwalior help trap some of these clouds, leading to sudden, heavy thunderstorms.',
      },
      {
        id: '1-4',
        title: 'The Winter Chill & The Fog',
        content: 'Winter (November to February) is a complete 180-degree turn from summer.\n\nThe "Cold Wave": Sometimes, cold winds from the Himalayan mountains travel down to Gwalior, causing temperatures to drop to 2°C or 3°C.\n\nRadiation Fog: This happens when the ground cools down at night, and the moist air near the ground turns into tiny water droplets, making visibility almost zero.\n\nAgriculture: This cold weather is perfect for "Rabi Crops" like Wheat and Mustard, which you can see growing in the fields around the city during this time.',
      },
      {
        id: '1-5',
        title: 'Climate Change & Adaptation',
        content: 'Urban Heat Islands: Because Gwalior is growing with more buildings and roads, the city center is often 2-3 degrees hotter than the surrounding villages. This is called the "Urban Heat Island" effect.\n\nSmart Adaptation:\n- Traditional: Old houses in Gwalior have high ceilings and small windows to keep out the summer sun.\n- Modern: The government uses the Madhya Pradesh State Action Plan on Climate Change to plant more trees and manage water better to fight the rising heat.\n\nWeather and Pollution: In winter, cold air "traps" smoke and dust near the ground, often leading to poor air quality, showing how weather and environment are linked.',
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
  },
  {
    id: '5',
    title: 'Gwalior\'s Green Heritage',
    description: 'Explore the climate, heritage trees, and the importance of native species in Gwalior.',
    difficulty: 'Beginner',
    points: 80,
    lessons: [
      {
        id: '5-1',
        title: 'Introduction to Gwalior\'s Trees',
        content: 'Gwalior has a hot summer and low rainfall, making its climate "dry deciduous." The trees here, like Neem and Peepal, are strong and drought-resistant. Learning about these local "native" trees helps us understand how they survive and support our environment.',
      },
      {
        id: '5-2',
        title: 'Heritage Trees: The Tamarind of Tansen',
        content: 'Heritage trees are old trees with historical value. A famous example in Gwalior is the Tamarind tree near Tansen\'s Tomb. Legend says Tansen ate its leaves to sweeten his voice. These trees connect us to our history and culture.',
      },
      {
        id: '5-3',
        title: 'Sacred Giants: Banyan and Peepal',
        content: 'You will often find Banyan (Bargad) and Peepal trees near temples and public places in Gwalior. The Banyan is India\'s national tree, known for its aerial roots. The Peepal releases oxygen even at night. Both are considered sacred and provide immense shade.',
      }
    ]
  },
  {
    id: '6',
    title: 'Medicinal Trees of Gwalior',
    description: 'Discover the healing power of local trees like Neem, Amla, Arjun, and Amaltas.',
    difficulty: 'Intermediate',
    points: 90,
    lessons: [
      {
        id: '6-1',
        title: 'Neem and Amla: The Healers',
        content: 'Neem is known as the "Village Pharmacy." Its leaves and oil treat skin problems and boost health. Amla (Indian Gooseberry) is rich in Vitamin C, boosting immunity and helping with digestion and hair health.',
      },
      {
        id: '6-2',
        title: 'Arjun: The Guardian of the Heart',
        content: 'The Arjun tree has a smooth, grey bark. In Ayurveda, its bark is used to make medicine that strengthens the heart and improves blood flow. It is commonly found in the dry forests of Madhya Pradesh.',
      },
      {
        id: '6-3',
        title: 'Amaltas: The Golden Shower',
        content: 'Amaltas is famous for its beautiful hanging yellow flowers in summer, earning it the name "Golden Shower." Its fruit pulp is used in traditional medicine to help with digestion and stomach issues.',
      }
    ]
  },
  {
    id: '7',
    title: 'Trees & Biodiversity',
    description: 'Understand how trees support animals and our responsibility to conserve them.',
    difficulty: 'Intermediate',
    points: 100,
    lessons: [
      {
        id: '7-1',
        title: 'Trees as Shelter',
        content: 'Trees are homes for many birds, squirrels, and insects. In Gwalior, trees like the Banyan provide fruit for birds and shelter from the hot sun. Cutting down a tree destroys the homes of many innocent creatures.',
      },
      {
        id: '7-2',
        title: 'The Food Chain & Balance',
        content: 'Trees are producers at the base of the food chain. They provide food for herbivores, which are eaten by carnivores. Without trees, this delicate balance collapses, affecting all life, including humans.',
      },
            {
              id: '7-3',
              title: 'Student Responsibility: Save Trees',
              content: 'Pollution and urbanization are threatening our trees. As students, you can help by planting native saplings, not wasting paper, and adopting a tree near your home. Remember: "Save Trees, Save Future."',
            }
          ]
        },
        {
          id: '8',
          title: 'Advanced Meteorological Analysis of Gwalior',
          description: 'A deep dive into synoptic meteorology, thermal dynamics, and environmental indicators of Gwalior as of 2026.',
          difficulty: 'Advanced',
          points: 150,
          prerequisiteId: '1', // Locked until Module 1 is complete
          lessons: [
            {
              id: '8-1',
              title: 'Synoptic Meteorology & Drivers',
              content: 'Gwalior’s climate is dictated by large-scale atmospheric movements. \n\nSynoptic Drivers (January 2026): Current weather is influenced by Western Disturbances—cyclonic circulations originating over the Mediterranean. As of Jan 2026, these systems directly impact Gwalior with cooler temperatures and high humidity.\n\nSubtropical Westerly Jet Stream: Gwalior sits under a high-speed jet stream (winds up to 213 kmph), which steers cold-weather systems toward central India.',
            },
            {
              id: '8-2',
              title: 'Thermal Dynamics & The "Loo"',
              content: 'Radiative Forcing: In May and June, Gwalior receives peak solar energy (7.6 kWh/m²).\n\nThe Loo Mechanism: The "Loo" is a thermal wind driven by a steep pressure gradient between the Thar Desert and the Gangetic plains. Average wind speeds peak in June at 9.1 mph.\n\nThermal Extremes: While historical highs hit 48°C, 2026 data shows January highs reaching 24°C, warmer than historical deep-winter averages.',
            },
            {
              id: '8-3',
              title: 'Hydro-Meteorology & Rainfall Shadow',
              content: 'Orographic Influence: Gwalior lies in a partial rain shadow, receiving only 700–764 mm of annual rainfall—nearly half the state average.\n\nRainfall Distribution: 89.1% of precipitation occurs between mid-June and September. Outside this window, extreme dryness prevails.\n\nHumidity Indices: Perceived humidity peaks in August (31 muggy days), while January experiences almost zero.',
            },
            {
              id: '8-4',
              title: 'Winter Inversion & Air Quality',
              content: 'Temperature Inversion: During January, Radiation Fog traps pollutants near the surface.\n\nSevere AQI (2026): On January 4, 2026, Gwalior recorded a "Severe" AQI of 261. High humidity (reaching 100%) facilitates persistent dense fog that hampers transportation.',
            },
                  {
                    id: '8-5',
                    title: 'Climate Change Scorecard (2026)',
                    content: 'Severity & Adaptation: Gwalior has a "High" climate severity score, yet 2026 data shows a 9.3% improvement in environmental indicators due to adaptation efforts.\n\nGreen and Blue Infrastructure (GBI): Strategies focus on urban forests and restored water bodies to cool the city center by 2°C to 5°C.\n\nFuture Projections: Projections show a 1–1.2°C increase in mean annual air temperature in the near term.',
                  }
                ]
              },
              {
                id: '9',
                title: 'Water Warriors of Gwalior',
                description: 'Discover the water lifeline of Gwalior, from the historic Tighra Dam to ancient stepwells and river revival.',
                difficulty: 'Intermediate',
                points: 120,
                prerequisiteId: '4', // Locked until Module 4 (Water Conservation) is complete
                lessons: [
                  {
                    id: '9-1',
                    title: 'The Tighra Dam: Gwalior\'s Lifeline',
                    content: 'Built on the Sank River in 1916, Tighra Dam is the primary source of drinking water for Gwalior city. It is an engineering marvel and a crucial reservoir that sustains the city through its dry summers. Monitoring its water levels is vital for the city\'s survival.',
                  },
                  {
                    id: '9-2',
                    title: 'Traditional Baolis (Stepwells)',
                    content: 'Before modern plumbing, Gwalior relied on "Baolis" or stepwells to harvest rainwater. These structures, like those found in Gwalior Fort, are excellent examples of ancient sustainable engineering. They not only stored water but also served as cool community gathering spaces.',
                  },
                  {
                    id: '9-3',
                    title: 'The Swarn Rekha River',
                    content: 'Once a flowing river, the Swarn Rekha has faced severe pollution and encroachment. It is a critical natural drainage channel for the city. Current revival efforts aim to clean the river, prevent sewage entry, and restore its flow to improve groundwater levels.',
                  }
                ]
              }
            ];
            