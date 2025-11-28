export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  industry: string;
  fundingGoal: number;
  currentFunding: number;
  fundingHistory: number[];
  tier: "alpha" | "featured" | "general";
  team: TeamMember[];
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Investor {
  id: string;
  name: string;
  avatar: string;
  portfolioSize: number;
  projectCount: number;
  industries: string[];
  bio: string;
  fullBio: string;
  location: string;
  investments: Investment[];
  exits: Exit[];
  contact: string;
}

export interface Investment {
  projectId: string;
  projectName: string;
  projectLogo: string;
  amount: number;
  date: string;
}

export interface Exit {
  projectName: string;
  amount: number;
  year: number;
}
