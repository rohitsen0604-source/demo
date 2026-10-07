// MAHTO.ORG — Reactive Store & In-Memory / Local Repository Layer
"use client";

import {
  UserRole,
  FounderProfile,
  StartupEntity,
  StagedAssessmentDay,
  FounderChallenge,
  NextActionRecommendation,
  TelecallerLead,
  AuditLogItem,
  HealthStatus
} from "./types";

export {
  INITIAL_FOUNDER,
  INITIAL_STARTUPS,
  INITIAL_ASSESSMENT_DAYS,
  INITIAL_CHALLENGES,
  INITIAL_LEADS,
  INITIAL_AUDIT_LOGS,
  INITIAL_PROFESSOR_REQUESTS,
} from "./mockData";

// Helper to compute "What Should I Do Next?"
export function computeNextActions(
  founder: FounderProfile,
  startups: StartupEntity[],
  challenges: FounderChallenge[],
  assessments: StagedAssessmentDay[]
): NextActionRecommendation[] {
  const actions: NextActionRecommendation[] = [];

  // Check pending assessment days
  const pendingDay = assessments.find((a) => a.isUnlocked && !a.isCompleted);
  if (pendingDay) {
    actions.push({
      id: "act-assess",
      priority: 1,
      category: "ASSESSMENT",
      title: `Complete ${pendingDay.title}`,
      description: pendingDay.description,
      actionCta: "Take Assessment (25 min)",
      actionHref: "/founder?tab=assessments",
      deadlineText: "Active Today",
      estimatedMinutes: pendingDay.estimatedMinutes,
    });
  }

  // Check active challenge
  const activeChallenge = challenges.find((c) => c.status === "IN_PROGRESS");
  if (activeChallenge) {
    actions.push({
      id: "act-challenge",
      priority: 1,
      category: "CHALLENGE",
      title: `Submit: ${activeChallenge.title}`,
      description: activeChallenge.description,
      actionCta: "Record Pitch & Submit",
      actionHref: "/founder?tab=challenges",
      deadlineText: `Due in ${activeChallenge.deadlineDays} days`,
      estimatedMinutes: 20,
    });
  }

  // Monthly reporting reminder for active startups
  const primaryStartup = startups.find((s) => s.subscriptionTier === "OS_RECURRING" || s.isPaid);
  if (primaryStartup) {
    actions.push({
      id: "act-report",
      priority: 2,
      category: "FINANCIAL",
      title: `Submit Monthly Metrics for ${primaryStartup.name}`,
      description: "Log MRR, active users, burn rate, and health narrative for October 2026 reporting period.",
      actionCta: "Update Metrics & Runway",
      actionHref: "/founder?tab=monthly-reports",
      deadlineText: "Due on 10th of this month",
      estimatedMinutes: 15,
    });
  }

  // Campus verification if unverified
  if (!founder.isStudentVerified) {
    actions.push({
      id: "act-campus",
      priority: 3,
      category: "CAMPUS",
      title: "Nominate Professor for Faculty Verification",
      description: "Select your college and faculty mentor to unlock the Verified Student Founder badge and ₹10,000 pricing.",
      actionCta: "Select Professor",
      actionHref: "/founder?tab=passport",
      deadlineText: "Required for student badge",
      estimatedMinutes: 5,
    });
  }

  return actions;
}
