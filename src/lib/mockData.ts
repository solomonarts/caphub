import { Project, Investor } from "./types";

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "PayFlow AI",
    description:
      "Revolutionary payment processing platform powered by machine learning for fraud detection.",
    fullDescription:
      "PayFlow AI is reimagining payment processing with cutting-edge machine learning algorithms that detect fraud in real-time while maintaining seamless user experiences. Our platform has processed over $10M in transactions with 99.9% accuracy in fraud detection.",
    industry: "FinTech",
    fundingGoal: 500000,
    currentFunding: 375000,
    fundingHistory: [50000, 100000, 180000, 250000, 320000, 375000],
    tier: "alpha",
    team: [
      {
        id: "1",
        name: "Sarah Chen",
        role: "CEO & Co-founder",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      {
        id: "2",
        name: "Michael Torres",
        role: "CTO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      },
    ],
    highlights: [
      "$10M+ in transactions processed",
      "99.9% fraud detection accuracy",
      "Partnership with 3 major banks",
      "50+ enterprise clients",
    ],
  },
  {
    id: "2",
    name: "HealthSync",
    description:
      "Unified patient data platform connecting healthcare providers seamlessly.",
    fullDescription:
      "HealthSync creates a unified ecosystem where patient data flows securely between healthcare providers, enabling better care coordination and improved patient outcomes. Currently serving 200+ healthcare facilities.",
    industry: "HealthTech",
    fundingGoal: 750000,
    currentFunding: 525000,
    fundingHistory: [80000, 150000, 280000, 380000, 450000, 525000],
    tier: "alpha",
    team: [
      {
        id: "3",
        name: "Dr. Emily Watson",
        role: "Founder & CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      },
      {
        id: "4",
        name: "James Park",
        role: "Head of Engineering",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      },
    ],
    highlights: [
      "200+ healthcare facilities",
      "HIPAA compliant platform",
      "500K+ patient records secured",
      "Featured in Healthcare Weekly",
    ],
  },
  {
    id: "3",
    name: "EcoCharge",
    description:
      "Smart EV charging network optimizing energy consumption and grid load.",
    fullDescription:
      "EcoCharge is building the infrastructure for sustainable transportation with intelligent EV charging stations that optimize energy usage and reduce grid strain through AI-powered load balancing.",
    industry: "CleanTech",
    fundingGoal: 1000000,
    currentFunding: 820000,
    fundingHistory: [100000, 250000, 450000, 600000, 720000, 820000],
    tier: "alpha",
    team: [
      {
        id: "5",
        name: "Alex Rivera",
        role: "CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      {
        id: "6",
        name: "Nina Patel",
        role: "COO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
      },
    ],
    highlights: [
      "150+ charging stations deployed",
      "30% energy cost reduction",
      "Partnership with Tesla",
      "Carbon neutral operations",
    ],
  },
  {
    id: "4",
    name: "LearnHub",
    description:
      "Personalized learning platform using AI to adapt to each student's pace.",
    fullDescription:
      "LearnHub revolutionizes education with adaptive learning technology that personalizes the educational journey for every student, improving outcomes by an average of 40%.",
    industry: "EdTech",
    fundingGoal: 400000,
    currentFunding: 180000,
    fundingHistory: [30000, 70000, 110000, 140000, 165000, 180000],
    tier: "featured",
    team: [
      {
        id: "7",
        name: "David Kim",
        role: "Founder",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      },
      {
        id: "8",
        name: "Lisa Anderson",
        role: "Head of Product",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      },
    ],
    highlights: [
      "50K+ active students",
      "40% improvement in learning outcomes",
      "Available in 15 languages",
      "Used by 200+ schools",
    ],
  },
  {
    id: "5",
    name: "CloudOps Pro",
    description:
      "Enterprise-grade cloud infrastructure management and monitoring solution.",
    fullDescription:
      "CloudOps Pro provides comprehensive cloud infrastructure management tools that help enterprises optimize costs, improve security, and scale efficiently across multiple cloud providers.",
    industry: "SaaS",
    fundingGoal: 300000,
    currentFunding: 95000,
    fundingHistory: [20000, 40000, 60000, 75000, 88000, 95000],
    tier: "general",
    team: [
      {
        id: "9",
        name: "Robert Johnson",
        role: "CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      },
    ],
    highlights: [
      "25+ enterprise clients",
      "Multi-cloud support",
      "99.99% uptime SLA",
      "SOC 2 certified",
    ],
  },
  {
    id: "6",
    name: "FreshMarket",
    description:
      "Direct-to-consumer platform connecting local farmers with urban consumers.",
    fullDescription:
      "FreshMarket eliminates middlemen in the food supply chain, connecting local farmers directly with consumers for fresher produce and better prices for both parties.",
    industry: "E-commerce",
    fundingGoal: 250000,
    currentFunding: 125000,
    fundingHistory: [25000, 50000, 75000, 95000, 110000, 125000],
    tier: "featured",
    team: [
      {
        id: "10",
        name: "Maria Garcia",
        role: "Founder & CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      },
    ],
    highlights: [
      "500+ local farmers",
      "10K+ active customers",
      "Operating in 5 cities",
      "30% cost savings for consumers",
    ],
  },
  {
    id: "7",
    name: "FreshMarket",
    description:
      "Direct-to-consumer platform connecting local farmers with urban consumers.",
    fullDescription:
      "FreshMarket eliminates middlemen in the food supply chain, connecting local farmers directly with consumers for fresher produce and better prices for both parties.",
    industry: "E-commerce",
    fundingGoal: 250000,
    currentFunding: 125000,
    fundingHistory: [25000, 50000, 75000, 95000, 110000, 125000],
    tier: "general",
    team: [
      {
        id: "10",
        name: "Maria Garcia",
        role: "Founder & CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      },
    ],
    highlights: [
      "500+ local farmers",
      "10K+ active customers",
      "Operating in 5 cities",
      "30% cost savings for consumers",
    ],
  },
  {
    id: "8",
    name: "FreshMarket",
    description:
      "Direct-to-consumer platform connecting local farmers with urban consumers.",
    fullDescription:
      "FreshMarket eliminates middlemen in the food supply chain, connecting local farmers directly with consumers for fresher produce and better prices for both parties.",
    industry: "E-commerce",
    fundingGoal: 250000,
    currentFunding: 125000,
    fundingHistory: [25000, 50000, 75000, 95000, 110000, 125000],
    tier: "general",
    team: [
      {
        id: "10",
        name: "Maria Garcia",
        role: "Founder & CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      },
    ],
    highlights: [
      "500+ local farmers",
      "10K+ active customers",
      "Operating in 5 cities",
      "30% cost savings for consumers",
    ],
  },
];

export const mockInvestors: Investor[] = [
  {
    id: "1",
    name: "Victoria Chang",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria",
    portfolioSize: 15000000,
    projectCount: 23,
    industries: ["FinTech", "AI/ML", "SaaS"],
    bio: "Serial entrepreneur and angel investor with 3 successful exits. Focus on early-stage FinTech and AI startups.",
    fullBio:
      "Victoria Chang is a seasoned entrepreneur and angel investor with over 15 years of experience in the technology sector. She has founded two successful startups, both of which were acquired by Fortune 500 companies. Victoria now focuses on mentoring and investing in early-stage companies, particularly in the FinTech and AI/ML spaces. Her hands-on approach and extensive network have helped numerous startups scale successfully.",
    location: "San Francisco, CA",
    investments: [
      {
        projectId: "1",
        projectName: "PayFlow AI",
        projectLogo: "🚀",
        amount: 150000,
        date: "2024-01",
      },
      {
        projectId: "5",
        projectName: "CloudOps Pro",
        projectLogo: "☁️",
        amount: 75000,
        date: "2024-03",
      },
    ],
    exits: [
      { projectName: "DataSync Inc", amount: 12000000, year: 2022 },
      { projectName: "SecurePay", amount: 8500000, year: 2020 },
    ],
    contact: "victoria@changventures.com",
  },
  {
    id: "2",
    name: "Marcus Thompson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    portfolioSize: 22000000,
    projectCount: 31,
    industries: ["HealthTech", "CleanTech", "EdTech"],
    bio: "Impact investor specializing in healthcare and sustainability. Former healthcare executive.",
    fullBio:
      "Marcus Thompson brings 20 years of healthcare industry experience to his investment practice. As a former COO of a major hospital network, he understands the challenges and opportunities in HealthTech intimately. Marcus is passionate about investing in companies that combine profitability with positive social impact, particularly in healthcare accessibility and environmental sustainability.",
    location: "Boston, MA",
    investments: [
      {
        projectId: "2",
        projectName: "HealthSync",
        projectLogo: "🏥",
        amount: 200000,
        date: "2023-11",
      },
      {
        projectId: "3",
        projectName: "EcoCharge",
        projectLogo: "⚡",
        amount: 300000,
        date: "2024-02",
      },
      {
        projectId: "4",
        projectName: "LearnHub",
        projectLogo: "📚",
        amount: 100000,
        date: "2024-04",
      },
    ],
    exits: [
      { projectName: "MediConnect", amount: 18000000, year: 2023 },
      { projectName: "GreenGrid", amount: 15000000, year: 2021 },
    ],
    contact: "m.thompson@impactcapital.com",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    portfolioSize: 8500000,
    projectCount: 15,
    industries: ["E-commerce", "SaaS", "AI/ML"],
    bio: "E-commerce veteran turned investor. Built and sold two successful online retail brands.",
    fullBio:
      "Sophia Martinez started her first e-commerce business at 24 and scaled it to $10M in annual revenue before acquisition. She repeated this success with her second venture, focusing on sustainable fashion. Now as an investor, Sophia leverages her operational expertise to help founders navigate the challenges of building consumer-facing businesses. She's particularly interested in companies that blend technology with traditional retail.",
    location: "Austin, TX",
    investments: [
      {
        projectId: "6",
        projectName: "FreshMarket",
        projectLogo: "🥬",
        amount: 80000,
        date: "2024-01",
      },
    ],
    exits: [
      { projectName: "StyleBox", amount: 6000000, year: 2022 },
      { projectName: "EcoWear", amount: 4500000, year: 2019 },
    ],
    contact: "sophia@martinezcap.com",
  },
  {
    id: "4",
    name: "David Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidC",
    portfolioSize: 30000000,
    projectCount: 45,
    industries: ["FinTech", "SaaS", "HealthTech"],
    bio: "Managing partner at TechForward Ventures. 25+ years in venture capital with focus on B2B SaaS.",
    fullBio:
      "David Chen is a managing partner at TechForward Ventures, one of the leading early-stage venture capital firms focused on enterprise technology. With over 25 years of experience in venture capital, David has been an early investor in some of today's most successful B2B SaaS companies. He sits on the boards of 12 portfolio companies and is known for his strategic guidance and extensive network of enterprise buyers.",
    location: "Palo Alto, CA",
    investments: [
      {
        projectId: "1",
        projectName: "PayFlow AI",
        projectLogo: "🚀",
        amount: 250000,
        date: "2023-12",
      },
      {
        projectId: "5",
        projectName: "CloudOps Pro",
        projectLogo: "☁️",
        amount: 100000,
        date: "2024-02",
      },
    ],
    exits: [
      { projectName: "EnterprisePro", amount: 45000000, year: 2023 },
      { projectName: "CloudScale", amount: 28000000, year: 2021 },
      { projectName: "DataViz Pro", amount: 22000000, year: 2019 },
    ],
    contact: "dchen@techforward.vc",
  },
];
