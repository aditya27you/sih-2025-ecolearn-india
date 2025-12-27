export interface LeaderboardEntry {
  id: string | number;
  rank: number;
  name: string;
  school: string;
  points: number;
  avatar?: string;
  isCurrentUser?: boolean;
}

export const leaderboardData: LeaderboardEntry[] = [
  { id: 1, rank: 1, name: 'Arjun Mehta', school: 'Greenwood High, Pune', points: 1250 },
  { id: 2, rank: 2, name: 'Sanya Sharma', school: 'Delhi Public School, Delhi', points: 1180 },
  { id: 3, rank: 3, name: 'Rohan Gupta', school: 'Bishop Cottons, Bangalore', points: 1150 },
  { id: 4, rank: 4, name: 'Isha Patel', school: 'St. Xaviers, Mumbai', points: 1020 },
  { id: 5, rank: 5, name: 'Karan Singh', school: 'Modern School, Jaipur', points: 980 },
  { id: 6, rank: 6, name: 'Ananya Rao', school: 'The Heritage School, Kolkata', points: 950 },
  { id: 7, rank: 7, name: 'Aditya Das', school: 'Loyola School, Jamshedpur', points: 920 },
  { id: 8, rank: 8, name: 'Priya Iyer', school: 'PSBB, Chennai', points: 890 },
  { id: 9, rank: 9, name: 'Vikram Reddy', school: 'Oakridge International, Hyderabad', points: 860 },
  { id: 10, rank: 10, name: 'Meera Nair', school: 'Chinmaya Vidyalaya, Kochi', points: 830 },
  { id: 11, rank: 42, name: 'You (Alex)', school: 'Greenwood High, Pune', points: 120, isCurrentUser: true },
];
