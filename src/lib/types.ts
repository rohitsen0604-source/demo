// MAHTO.ORG — Universal Type Definitions & Domain Interfaces

export type UserRole =
  | "FOUNDER"
  | "PROFESSOR"
  | "COLLEGE_ADMIN"
  | "INVESTOR"
  | "MENTOR"
  | "MEDIA_PARTNER"
  | "MEDIA_OPERATOR"
  | "TELECALLER"
  | "MAHTO_MANAGER"
  | "SUPER_ADMIN";

export type FounderType = "STUDENT" | "GRADUATE";

export type RecognitionLevel =
  | "MAHTO_FOUNDER"
  | "MAHTO_ASSESSED_FOUNDER"
  | "MAHTO_VALIDATED_FOUNDER"
  | "MAHTO_SELECTED_FOUNDER"
  | "MAHTO_BACKED_FOUNDER";

export type StartupStage =
  | "IDEA"
  | "PROBLEM_VALIDATED"
  | "MVP_PROTOTYPE"
  | "EARLY_TRACTION"
  | "REVENUE"
  | "GROWTH"
  | "FUNDRAISING"
  | "SCALE";

export type StartupFounderStatus =
  | "ACTIVE"
  | "FORMER_FOUNDER"
  | "EXITED"
  | "ACQUIRED"
  | "MERGED"
  | "CLOSED"
  | "DORMANT"
  | "REMOVED"
  | "DISPUTED";

export type HealthStatus = "HEALTHY" | "WATCH" | "INTERVENTION_REQUIRED";

export interface FounderScoreDimensions {
  vision: number; // max 8
  problemUnderstanding: number; // max 8
  customerUnderstanding: number; // max 8
  criticalThinking: number; // max 8
  execution: number; // max 10
  sales: number; // max 8
  leadership: number; // max 8
  financialThinking: number; // max 7
  resilience: number; // max 8
  communication: number; // max 7
  learningAbility: number; // max 8
  resourcefulness: number; // max 10
}

export interface FounderScoreEvolutionEntry {
  yearOrMilestone: string;
  score: number;
  date: string;
  notes: string;
}

export interface FounderProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  founderIdCode: string; // e.g. MHT-F-2027-0042
  founderType: FounderType;
  recognition: RecognitionLevel;
  bio: string;
  city: string;
  country: string;
  
  // Education
  school?: string;
  university?: string;
  degree?: string;
  courseYear?: string;
  graduationYear?: number;
  isStudentVerified: boolean;
  collegeId?: string;
  collegeName?: string;
  
  // Scores
  currentScore: number; // out of 100
  dimensions: FounderScoreDimensions;
  scoreHistory: FounderScoreEvolutionEntry[];
  
  // Profile Traits
  leadershipStyle: string;
  decisionStyle: string;
  resilienceProfile: string;
  strengths: string[];
  developmentAreas: string[];
  
  // Verification
  cardQrCode: string;
  cardIssueDate: string;
  isPublicProfile: boolean;
  showScorePublic: boolean;
}

export interface StartupFounderLink {
  founderId: string;
  founderName: string;
  roleTitle: string;
  equityPercentage?: number;
  status: StartupFounderStatus;
  startDate: string;
  endDate?: string;
  disputeNotes?: string;
}

export interface StartupEntity {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  tagline: string;
  description: string;
  industry: string;
  stage: StartupStage;
  isPaid: boolean;
  subscriptionTier: "BASIC" | "OS_RECURRING"; // ₹100/mo
  
  // Metrics
  startupScore: number;
  revenue: number;
  mrr: number;
  burnRate: number;
  runwayMonths: number;
  activeCustomers: number;
  healthStatus: HealthStatus;
  
  // Team
  founders: StartupFounderLink[];
  
  // Data Room
  documentsCount: number;
  pitchDeckUrl?: string;
  createdAt: string;
}

export interface CoFounderInvitation {
  id: string;
  startupId: string;
  startupName: string;
  inviterName: string;
  invitedName: string;
  invitedEmail: string;
  invitedPhone?: string;
  proposedRole: string;
  proposedEquity?: number;
  message: string;
  status: "PENDING" | "ACCEPTED" | "DECLINED";
  createdAt: string;
}

export interface StagedAssessmentDay {
  dayStage: number; // 1 to 6
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  score?: number;
  questions: {
    id: string;
    question: string;
    options: { label: string; points: number; dimension: keyof FounderScoreDimensions }[];
  }[];
}

export interface FounderChallenge {
  key: string;
  title: string;
  stageMonth: number; // Month 1 to 6
  description: string;
  deliverable: string;
  deadlineDays: number;
  status: "LOCKED" | "IN_PROGRESS" | "SUBMITTED" | "REVIEWED" | "APPROVED";
  score?: number;
  feedback?: string;
  submissionDate?: string;
  videoUrl?: string;
  docUrl?: string;
}

export interface NextActionRecommendation {
  id: string;
  priority: 1 | 2 | 3;
  category: "CHALLENGE" | "ASSESSMENT" | "CUSTOMER" | "PITCH" | "FINANCIAL" | "KYC" | "CAMPUS";
  title: string;
  description: string;
  actionCta: string;
  actionHref: string;
  deadlineText: string;
  estimatedMinutes: number;
}

export interface ProfessorVerificationRequest {
  id: string;
  founderId: string;
  founderName: string;
  founderEmail: string;
  collegeName: string;
  course: string;
  yearOfStudy: string;
  status: "PENDING" | "VERIFIED" | "REJECTED";
  wouldInvest10L?: "YES" | "NO" | "NEED_MORE_INFO" | "GOOD_FOUNDER_WEAK_OPP";
  facultyNotes?: string;
  submittedAt: string;
}

export interface MonthlyReportSubmission {
  id: string;
  startupId: string;
  startupName: string;
  month: string;
  revenue: number;
  mrr: number;
  burnRate: number;
  runwayMonths: number;
  activeCustomers: number;
  cac: number;
  ltv: number;
  highlights: string;
  lowlights: string;
  helpNeeded: string;
  healthStatus: HealthStatus;
  submittedAt: string;
}

export interface TelecallerLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: "INSTAGRAM" | "YOUTUBE" | "CAMPUS_DRIVE" | "REFERRAL" | "DIRECT";
  status: "REGISTERED" | "CONTACTED" | "QUALIFIED" | "INTERESTED" | "FOLLOW_UP" | "PAID" | "NOT_INTERESTED";
  notes: string;
  nextAction: string;
  dueDate: string;
  assignedTo: string;
  amount: number;
}

export interface AuditLogItem {
  id: string;
  actorName: string;
  actorRole: UserRole;
  action: string;
  entityType: string;
  entityName: string;
  beforeState?: string;
  afterState?: string;
  timestamp: string;
  ipAddress: string;
}
