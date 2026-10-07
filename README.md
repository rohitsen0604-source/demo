# MAHTO.ORG — Complete Platform Architecture & Implementation

> **"Build a generation of builders."**  
> Lifelong founder-development, founder-identity, startup-evaluation, campus-innovation, investor-readiness and entrepreneurial operating system platform operated by **Mahto Innovations Pvt Ltd**.

---

## 🚀 Key Features Implemented

1. **Universal MAHTO Account & Role Switcher (9 Canonical Roles)**
   - Single authentication identity with granular Role-Based Access Control (RBAC).
   - Roles: Founder, Professor, College, Investor, Mentor/Expert, Media Partner, Media Operator, Telecaller, Super Admin.

2. **Longitudinal Founder Passport & Verifiable Founder Card**
   - Lifelong identity asset tracking character, education, verified references, multi-startup track record, and milestone history.
   - Interactive 3D Digital + Physical Founder Card with QR code linked to public verification registry (`/verify/founder/[id]`).

3. **12-Dimension Evidence-Weighted Founder Score (/100)**
   - Dimensions: Vision (8), Problem Understanding (8), Customer Empathy (8), Critical Thinking (8), Execution Velocity (10), Sales & Persuasion (8), Leadership (8), Financial Reasoning (7), Resilience & Grit (8), Communication (7), Learning Agility (8), Resourcefulness (10).
   - Evidence Weightings: Psychometrics (15%), Cognitive (15%), Simulations (25%), Real Execution (25%), Faculty References (10%), Startup Traction (10%).

4. **Multi-Startup & Co-Founder Architecture**
   - Founders can operate solo or invite co-founders with defined equity splits and roles.
   - If a founder departs, their historical contributions are permanently preserved in their Founder Passport as `Former Founder` without data loss.

5. **"What Should I Do Next?" Intelligent Recommendation Engine**
   - Real-time action engine prioritizing staged assessments, customer discovery interviews, sales challenges, and monthly metrics.

6. **6-Day Staged Assessment Suite**
   - Progressive diagnostic unlocked across days to prevent test fatigue.

7. **10 Core Founder Action Challenges**
   - Co-Founder Pitch, 20 Real Customer Interviews, Functional MVP, 50-Prospect Sales Outreach, ₹10L Financial Model, 10-Slide Pitch Deck.

8. **Institutional Campus Flywheel & Professor Network**
   - Professor verification portal with canonical rubric: *"Would you personally invest ₹10 Lakh in this founder?"*.
   - Institutional dashboard with Campus Demand Index.

9. **Investor Pipeline & Consented Data Rooms**
   - Thesis-matched deal flow with confidential data rooms and monthly health tracking (🟢 Healthy / 🟡 Watch / 🔴 Intervention Required).

10. **Telecaller CRM & Sales Incentive Terminal**
    - Live CRM workflow with incentive calculations (Salary ₹25,000 + ₹36,500 incentive).

11. **Super Admin CEO Command Center**
    - Financial run-rate, platform KPIs, and immutable cryptographic audit logging.

12. **Statutory Legal, Trust & Refund Disclaimers**
    - 3-Day commercial refund policy, funding disclaimers, and transparent pricing terms (Student Founder ₹10,000 / Graduate Founder ₹25,000 / Startup OS ₹100/mo).

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide Icons.
- **Backend & Database:** Node.js API layer, Prisma ORM, PostgreSQL schema.
- **Design Tokens:** Warm white canvas (`#FAF9F6`), Deep Navy (`#0F172A`), Crisp White Cards (`#FFFFFF`), Subtle Borders (`#E2E8F0`), Royal Gold/Bronze & Indigo accents.

---

## 💻 Local Development Setup

```bash
# Install dependencies
npm install

# Run database migrations (PostgreSQL)
npx prisma generate
npx prisma db push

# Launch development server
npm run dev
```

Server runs on `http://localhost:3000`.
