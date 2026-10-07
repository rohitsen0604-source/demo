// MAHTO.ORG — Static Seed Data & Mock Repositories
import {
  FounderProfile,
  StartupEntity,
  StagedAssessmentDay,
  FounderChallenge,
  TelecallerLead,
  AuditLogItem,
  ProfessorVerificationRequest,
} from "./types";

export const INITIAL_FOUNDER: FounderProfile = {
  id: "f-001",
  userId: "u-001",
  name: "Rohit Sen",
  email: "rohit.sen@example.com",
  phone: "+91 98765 43210",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  founderIdCode: "MHT-F-2027-0042",
  founderType: "STUDENT",
  recognition: "MAHTO_VALIDATED_FOUNDER",
  bio: "B.Tech Computer Science (3rd Year). Passionate about campus innovation, AI-driven logistics, and builder culture.",
  city: "Bangalore",
  country: "India",
  university: "National Institute of Technology",
  degree: "B.Tech Computer Science & Engineering",
  courseYear: "3rd Year (Semester 6)",
  graduationYear: 2028,
  isStudentVerified: true,
  collegeId: "col-01",
  collegeName: "National Institute of Technology, Bangalore",
  currentScore: 78.5,
  dimensions: {
    vision: 6.8,
    problemUnderstanding: 7.2,
    customerUnderstanding: 7.0,
    criticalThinking: 6.5,
    execution: 8.2,
    sales: 5.9,
    leadership: 6.4,
    financialThinking: 5.8,
    resilience: 7.4,
    communication: 6.2,
    learningAbility: 7.5,
    resourcefulness: 8.6,
  },
  scoreHistory: [
    { yearOrMilestone: "Year 1 (Discover)", score: 54.0, date: "2025-08-15", notes: "Initial intake assessment. High motivation, developing execution." },
    { yearOrMilestone: "Year 2 (Understand)", score: 67.5, date: "2026-04-10", notes: "Completed 20 customer interviews. Strong problem clarity." },
    { yearOrMilestone: "Year 3 (Build & MVP)", score: 78.5, date: "2026-10-01", notes: "Launched functional MVP. Generated first ₹1.2L revenue." },
  ],
  leadershipStyle: "Collaborative Builder & High-Agency Problem Solver",
  decisionStyle: "Data-Informed & Fast Iteration under Uncertainty",
  resilienceProfile: "High Grit — Demonstrates rapid bounce-back after prototype pivots",
  strengths: ["Rapid Prototyping", "Customer Empathy", "Resourcefulness", "Technical Architecture"],
  developmentAreas: ["Enterprise Sales Closing", "Unit Economics Forecasting", "Delegation"],
  cardQrCode: "mht-qr-rohit-sen-0042",
  cardIssueDate: "2025-08-15",
  isPublicProfile: true,
  showScorePublic: false,
};

export const INITIAL_STARTUPS: StartupEntity[] = [
  {
    id: "st-001",
    name: "CampusLogix",
    slug: "campuslogix",
    tagline: "Hyperlocal campus delivery & textbook sharing ecosystem",
    description: "An AI-powered peer-to-peer campus marketplace connecting 12,000+ students with instant campus delivery, shared academic resources, and meal bookings.",
    industry: "EdTech & Campus Logistics",
    stage: "EARLY_TRACTION",
    isPaid: true,
    subscriptionTier: "OS_RECURRING",
    startupScore: 74.0,
    revenue: 145000,
    mrr: 48000,
    burnRate: 18000,
    runwayMonths: 14.5,
    activeCustomers: 1840,
    healthStatus: "HEALTHY",
    founders: [
      {
        founderId: "f-001",
        founderName: "Rohit Sen",
        roleTitle: "Primary Founder & CEO",
        equityPercentage: 65,
        status: "ACTIVE",
        startDate: "2025-09-01",
      },
      {
        founderId: "f-002",
        founderName: "Aarav Sharma",
        roleTitle: "Co-Founder & CTO",
        equityPercentage: 35,
        status: "ACTIVE",
        startDate: "2025-10-15",
      },
    ],
    documentsCount: 6,
    pitchDeckUrl: "https://mahto.org/dataroom/campuslogix_deck_v3.pdf",
    createdAt: "2025-09-01",
  },
  {
    id: "st-002",
    name: "DocuSense AI",
    slug: "docusense-ai",
    tagline: "Automated legal & compliance analyzer for Indian SMBs",
    description: "OCR + LLM-based contract parser identifying non-compliance in vendor and tenancy agreements.",
    industry: "LegalTech / AI SaaS",
    stage: "MVP_PROTOTYPE",
    isPaid: true,
    subscriptionTier: "BASIC",
    startupScore: 61.5,
    revenue: 25000,
    mrr: 12000,
    burnRate: 8000,
    runwayMonths: 18.0,
    activeCustomers: 45,
    healthStatus: "HEALTHY",
    founders: [
      {
        founderId: "f-001",
        founderName: "Rohit Sen",
        roleTitle: "Co-Founder (Product)",
        equityPercentage: 40,
        status: "ACTIVE",
        startDate: "2026-03-01",
      },
      {
        founderId: "f-003",
        founderName: "Priya Nair",
        roleTitle: "Primary Founder (Legal Ops)",
        equityPercentage: 60,
        status: "ACTIVE",
        startDate: "2026-03-01",
      }
    ],
    documentsCount: 3,
    createdAt: "2026-03-01",
  },
  {
    id: "st-003",
    name: "CodePulse Lab",
    slug: "codepulse-lab",
    tagline: "High-school coding bootcamps (Closed / Learning Venture)",
    description: "Previous venture operated during first year college. Successfully taught 3 batches before pivoting.",
    industry: "Education",
    stage: "EARLY_TRACTION",
    isPaid: true,
    subscriptionTier: "BASIC",
    startupScore: 52.0,
    revenue: 65000,
    mrr: 0,
    burnRate: 0,
    runwayMonths: 0,
    activeCustomers: 120,
    healthStatus: "HEALTHY",
    founders: [
      {
        founderId: "f-001",
        founderName: "Rohit Sen",
        roleTitle: "Solo Founder",
        equityPercentage: 100,
        status: "FORMER_FOUNDER",
        startDate: "2024-08-01",
        endDate: "2025-06-30",
        disputeNotes: "Orderly wind-down to focus on scalable product ventures. Lessons added to Passport.",
      }
    ],
    documentsCount: 2,
    createdAt: "2024-08-01",
  }
];

export const INITIAL_ASSESSMENT_DAYS: StagedAssessmentDay[] = [
  {
    dayStage: 1,
    title: "Day 1 — Founder Identity & History",
    subtitle: "Unlocked & Completed",
    description: "Core motivation, background, entrepreneurial history, and educational foundation.",
    estimatedMinutes: 20,
    isUnlocked: true,
    isCompleted: true,
    score: 82,
    questions: [
      {
        id: "q1_1",
        question: "Why do you want to build a company instead of pursuing standard employment?",
        options: [
          { label: "Obsession with solving a specific acute problem & building long-term agency", points: 8, dimension: "vision" },
          { label: "Desire for financial independence and autonomous working hours", points: 6, dimension: "vision" },
          { label: "Following startup trends / peer interest", points: 3, dimension: "vision" },
        ]
      }
    ]
  },
  {
    dayStage: 2,
    title: "Day 2 — Psychology & Decision Making",
    subtitle: "Unlocked & Completed",
    description: "Evaluating grit, risk tolerance (DOSPERT), cognitive reflection, and ethical decision scenarios.",
    estimatedMinutes: 25,
    isUnlocked: true,
    isCompleted: true,
    score: 76,
    questions: [
      {
        id: "q2_1",
        question: "When a core product release fails to gain initial traction, what is your first 48-hour protocol?",
        options: [
          { label: "Interview 10 drop-off users immediately to diagnose whether problem or UX failed", points: 8, dimension: "criticalThinking" },
          { label: "Re-run social ads with higher budget and different creative hooks", points: 4, dimension: "sales" },
          { label: "Immediately rewrite the entire backend codebase", points: 3, dimension: "execution" },
        ]
      }
    ]
  },
  {
    dayStage: 3,
    title: "Day 3 — Startup & Customer Discovery",
    subtitle: "Unlocked & Completed",
    description: "Problem severity, user persona mapping, ICP validation, and TAM realism.",
    estimatedMinutes: 30,
    isUnlocked: true,
    isCompleted: true,
    score: 79,
    questions: [
      {
        id: "q3_1",
        question: "How do you validate if a customer genuinely feels pain vs just being polite?",
        options: [
          { label: "Ask for an upfront commitment (pre-order, LOI, or dedicated 1-hr workflow shadowing)", points: 8, dimension: "customerUnderstanding" },
          { label: "Count how many people said 'This sounds like a great idea!' in a survey", points: 2, dimension: "customerUnderstanding" },
        ]
      }
    ]
  },
  {
    dayStage: 4,
    title: "Day 4 — Execution & Sales Scenarios",
    subtitle: "Active Today",
    description: "Objection handling, prospect conversion, pipeline mechanics, and rapid delivery.",
    estimatedMinutes: 25,
    isUnlocked: true,
    isCompleted: false,
    questions: [
      {
        id: "q4_1",
        question: "A potential B2B pilot client objects: 'Your product is great, but we don't have budget until next fiscal year.' What is your response?",
        options: [
          { label: "Offer a zero-cash, performance-linked pilot with defined success metrics that convert to auto-contract", points: 8, dimension: "sales" },
          { label: "Agree immediately and schedule a reminder email in 9 months", points: 3, dimension: "sales" },
          { label: "Offer a 90% discount on the spot", points: 2, dimension: "financialThinking" },
        ]
      }
    ]
  },
  {
    dayStage: 5,
    title: "Day 5 — Financial Thinking & Unit Economics",
    subtitle: "Unlocks Tomorrow",
    description: "Contribution margins, burn rate control, runway discipline, and CAC/LTV dynamics.",
    estimatedMinutes: 30,
    isUnlocked: false,
    isCompleted: false,
    questions: []
  },
  {
    dayStage: 6,
    title: "Day 6 — Pitch Lab & Final Founder Challenge",
    subtitle: "Unlocks in 2 Days",
    description: "10-slide deck evaluation, investor simulation, and founder response synthesis.",
    estimatedMinutes: 35,
    isUnlocked: false,
    isCompleted: false,
    questions: []
  }
];

export const INITIAL_CHALLENGES: FounderChallenge[] = [
  {
    key: "CO_FOUNDER_PITCH",
    title: "The 3-Minute Co-Founder Challenge",
    stageMonth: 1,
    description: "Record a 3-minute video pitch attempting to convince a world-class co-founder to join your mission. Test vision clarity, equity logic, and role alignment.",
    deliverable: "3-Min Video Pitch + Role Brief",
    deadlineDays: 2,
    status: "IN_PROGRESS",
  },
  {
    key: "CUSTOMER_DISCOVERY_20",
    title: "20 Real Customer Discovery Interviews",
    stageMonth: 2,
    description: "Conduct and document in-depth interviews with 20 distinct target users. Extract exact quotes, pain intensity, and current alternative spend.",
    deliverable: "Customer Discovery Synthesis Report",
    deadlineDays: 0,
    status: "APPROVED",
    score: 88,
    feedback: "Exceptional interview discipline. Clear distinction made between user compliments and actual willingness to pay."
  },
  {
    key: "MVP_LAUNCH",
    title: "Functional MVP & First 100 Users",
    stageMonth: 3,
    description: "Deploy a working prototype or manual concierge service that delivers core value to at least 100 active users.",
    deliverable: "Working Live URL + Demo Video + Analytics Snapshot",
    deadlineDays: 14,
    status: "IN_PROGRESS",
  },
  {
    key: "SALES_50_OUTREACH",
    title: "50-Prospect Cold Outreach & 90-Sec Sales Test",
    stageMonth: 4,
    description: "Reach out to 50 qualified prospects, track conversion pipeline, and record a 90-second elevator pitch handling 3 tough objections.",
    deliverable: "CRM Pipeline Export + 90-Sec Audio/Video Test",
    deadlineDays: 30,
    status: "LOCKED",
  },
  {
    key: "FINANCIAL_MODEL_10L",
    title: "Where Would You Spend ₹10 Lakh?",
    stageMonth: 5,
    description: "Create a granular 12-month capital deployment and unit economics model detailing exact ROI on ₹10 Lakh seed allocation.",
    deliverable: "Financial Spreadsheet + 12-Month Execution Roadmap",
    deadlineDays: 60,
    status: "LOCKED",
  },
  {
    key: "INVESTOR_PITCH_10_SLIDE",
    title: "10-Slide Pitch Deck & Investor Q&A",
    stageMonth: 6,
    description: "Final comprehensive deck covering Problem, Solution, Traction, Market, Team, Financials, and Ask.",
    deliverable: "10-Slide PDF Deck + 5-Min Video Presentation",
    deadlineDays: 90,
    status: "LOCKED",
  }
];

export const INITIAL_LEADS: TelecallerLead[] = [
  {
    id: "lead-01",
    name: "Vikram Malhotra",
    email: "vikram.m@gmail.com",
    phone: "+91 98200 11223",
    source: "INSTAGRAM",
    status: "QUALIFIED",
    notes: "Completed Free Founder Test (Score: 68). High interest in Student Founder ₹10k plan. College: IIT Kharagpur.",
    nextAction: "Explain 6-Month journey & schedule professor verification call.",
    dueDate: "Today, 4:00 PM",
    assignedTo: "Founder Growth Executive #1",
    amount: 10000,
  },
  {
    id: "lead-02",
    name: "Ananya Deshmukh",
    email: "ananya.d@gmail.com",
    phone: "+91 97654 33211",
    source: "CAMPUS_DRIVE",
    status: "INTERESTED",
    notes: "Graduate founder with existing MVP in AgriTech. Seeking evaluation and data room setup.",
    nextAction: "Send Graduate Founder ₹25,000 checkout link.",
    dueDate: "Tomorrow, 11:30 AM",
    assignedTo: "Founder Growth Executive #2",
    amount: 25000,
  },
  {
    id: "lead-03",
    name: "Siddharth Verma",
    email: "sid.verma@outlook.com",
    phone: "+91 99112 88440",
    source: "YOUTUBE",
    status: "PAID",
    notes: "Payment verified via Webhook (₹10,000). Founder Passport & Card generated.",
    nextAction: "Onboarding call completed. Day 1 assessment unlocked.",
    dueDate: "Completed",
    assignedTo: "Founder Growth Executive #1",
    amount: 10000,
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogItem[] = [
  {
    id: "aud-01",
    actorName: "System Webhook (Razorpay)",
    actorRole: "MAHTO_MANAGER",
    action: "MEMBERSHIP_ACTIVATED",
    entityType: "Payment",
    entityName: "Startup: CampusLogix (₹10,000)",
    beforeState: "PENDING",
    afterState: "SUCCESS (Founder Passport Issued)",
    timestamp: "2026-10-07 18:30:12",
    ipAddress: "52.66.12.84",
  },
  {
    id: "aud-02",
    actorName: "Prof. Rajesh Kulkarni",
    actorRole: "PROFESSOR",
    action: "STUDENT_VERIFICATION_APPROVED",
    entityType: "FounderProfile",
    entityName: "Rohit Sen (NIT Bangalore)",
    beforeState: "UNVERIFIED",
    afterState: "VERIFIED_STUDENT_FOUNDER (Would Invest ₹10L: YES)",
    timestamp: "2026-10-07 16:15:40",
    ipAddress: "14.139.128.5",
  },
  {
    id: "aud-03",
    actorName: "Rohit Sen",
    actorRole: "FOUNDER",
    action: "FOUNDER_ROLE_UPDATED",
    entityType: "StartupFounder",
    entityName: "CodePulse Lab",
    beforeState: "ACTIVE",
    afterState: "FORMER_FOUNDER (Passport Timeline Preserved)",
    timestamp: "2026-10-07 14:02:11",
    ipAddress: "103.24.188.42",
  }
];

export const INITIAL_PROFESSOR_REQUESTS: ProfessorVerificationRequest[] = [
  {
    id: "pvr-01",
    founderId: "f-001",
    founderName: "Rohit Sen",
    founderEmail: "rohit.sen@example.com",
    collegeName: "National Institute of Technology, Bangalore",
    course: "B.Tech Computer Science",
    yearOfStudy: "3rd Year",
    status: "VERIFIED",
    wouldInvest10L: "YES",
    facultyNotes: "Exceptional grit and leadership observed during Hackathons. Consistently executes projects beyond curriculum.",
    submittedAt: "2026-10-06",
  },
  {
    id: "pvr-02",
    founderId: "f-004",
    founderName: "Sneha Reddy",
    founderEmail: "sneha.r@gmail.com",
    collegeName: "National Institute of Technology, Bangalore",
    course: "B.Tech Electronics",
    yearOfStudy: "2nd Year",
    status: "PENDING",
    submittedAt: "2026-10-07",
  }
];
