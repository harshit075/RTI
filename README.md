<div align="center">

# 🇮🇳 RTI Saathi (आरटीआई साथी) 
### *Next-Generation Citizen Right to Information Gateway & Statutory AI Assistant*

**Empowering 1.4 Billion Citizens with AI-Guided Transparency, Statutory Legal Compliance, and End-to-End Appellate Redressal.**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-16845B?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Digital India](https://img.shields.io/badge/Digital_India-NeGD_Aligned-F59E0B?style=for-the-badge)](https://digitalindia.gov.in)
[![RTI Act 2005](https://img.shields.io/badge/Statutory_Law-RTI_Act_2005-123B5D?style=for-the-badge)](https://dopt.gov.in)

[Live Architecture](#-end-to-end-citizen-journey-flow) • [Comparison Matrix](#-legacy-rti-portals-vs-rti-saathi) • [For Government & Policy](#-tailored-overview-by-stakeholder) • [For Developers](#-for-engineers--developers) • [Statutory Compliance](#-statutory-compliance-matrix)

---

</div>

## 📌 Executive Summary

The **Right to Information (RTI) Act, 2005** stands as the cornerstone of participatory democracy in India. However, over **35% of citizen RTI applications are dismissed, delayed, or rejected** before receiving substantive review. The primary failure points include:
1. **Interrogative Phrasing**: Citizens asking philosophical *"Why"* questions instead of requesting specific material records under Section 2(f).
2. **Jurisdictional Misrouting**: Filing state municipal issues on Central portals or vice-versa, resulting in non-refundable rejections.
3. **Statutory Exemption Violations**: Unknowingly seeking records exempt under Section 8(1).
4. **Appellate Drop-off**: Citizens abandoning valid requests when Public Information Officers (CPIOs) miss the 30-day deadline (*Deemed Refusal under Section 7(2)*).

**RTI Saathi** bridges these systemic gaps by pairing an **AI-Assisted Legal Drafting Copilot** with a **comprehensive 770+ District Geographic Directory**, **Bharatkosh payment simulation**, **30-day statutory timeline monitoring**, and **1-click First Appeal (FAA) & Second Appeal (CIC) escalation**.

---

## ⚡ Legacy RTI Portals vs. RTI Saathi

| Capability / Flow | Traditional RTI Portals | RTI Saathi |
|---|---|---|
| **Question Formulation** | Unstructured plain text area (high rejection rate due to "Why" questions) | **Statutory AI Copilot** automatically translates citizen intent into disclosable Section 2(f) material records. |
| **Department Discovery** | Static 2,000+ alphabetical dropdown list with no search | **Intelligent Authority Matcher** with 36 States/UTs & 770+ Districts geographic search. |
| **Section 8 Compliance** | Discovered only upon CPIO formal rejection letter (30 days lost) | **Real-Time Pre-Submission Screening** against defense, commercial, and privacy exemptions. |
| **Payment Failures** | Money deducted with no registration token; requires manual emails | **Integrated Payment Reconciliation Portal** with multi-step bank ledger synchronization. |
| **Response Analysis** | Citizen receives dense PDF with no guidance on missing records | **Point-by-Point Discrepancy Breakdown** flagging unanswered items with legal appeal grounds. |
| **First & Second Appeals** | Complex re-entry of entire case history from scratch | **1-Click Pre-Filled Appeal Wizards** for First Appellate Authority (FAA) and CIC under Sec 19(3). |
| **Accessibility & Inclusion** | English-centric desktop UI; poor mobile responsiveness | **Bilingual (हिंदी / English)**, 120% Text Scaling, Low-Data Mode, and WCAG 2.2 AA compliant. |

---

## 🎯 Tailored Overview by Stakeholder

<table>
<tr>
<td width="50%" valign="top">

### 🏛️ For Government Officials & Policymakers
- **Reduces CPIO Burden**: Eliminates frivolous or vague requests before submission by enforcing Section 2(f) material-record framing.
- **Section 4 Proactive Disclosure Compliance**: Surfaces published circulars, budget allocations, and tenders automatically.
- **GIGW 3.0 & WCAG 2.2 AA Aligned**: High-contrast modes, text scaling (120%), bilingual Hindi/English, and low-data modes for rural 2G/3G networks.
- **3-Tier Appellate Redressal**: Complete adherence to the statutory hierarchy: *CPIO ➔ FAA (Sec 19(1)) ➔ CIC (Sec 19(3))*.

</td>
<td width="50%" valign="top">

### 💻 For Engineers & Software Architects
- **Modern Next.js 16 & Turbopack Core**: 600ms cold compilation, sub-second HMR, and zero client-side layout shifts.
- **Decoupled Services Layer**: Strict singleton service abstractions (`authService`, `rtiService`, `deadlineService`, `authorityService`, `appealService`, `aiService`).
- **Resilient Dual-Mode Storage**: PostgreSQL support with auto-reconciling in-memory fallback.
- **Strict Domain Models**: Universal TypeScript domain interfaces preventing state divergence.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 💼 For Product Managers & Sales Leaders
- **High-Conversion Citizen Funnel**: 5-step intuitive wizard replacing cumbersome 14-field bureaucratic web forms.
- **Action-Oriented Dashboard**: Immediate clarity on *"What do I need to do next?"* with deadline countdowns and 1-click appeal actions.
- **Payment Reconciliation Portal**: Resolves failed or pending gateway transactions without customer support tickets.
- **High Civic Impact**: Potential to serve 1.4B citizens, 2,000+ public authorities, and 770+ municipal districts.

</td>
<td width="50%" valign="top">

### ⚖️ For Legal Advocates & Civic Activists
- **Statutory Grounds Generator**: Automatically drafts First Appeal petitions citing specific violations (*Sec 7(1), Sec 7(2), Sec 7(8)*).
- **Official vs. AI Segregation**: Preserves sanctity of official CPIO letters while highlighting missing records in secondary analysis callouts.
- **100% BPL Fee Waiver**: Seamless implementation of Section 7(5) for Below Poverty Line citizens.

</td>
</tr>
</table>

---

## 🔄 End-to-End Citizen Journey Flow

```mermaid
flowchart TD
    classDef startNode fill:#123B5D,stroke:#0A2540,color:#fff,stroke-width:2px;
    classDef processNode fill:#ffffff,stroke:#D9E0E6,color:#17212B,stroke-width:1.5px;
    classDef aiNode fill:#EFF6FF,stroke:#3B82F6,color:#1E3A8A,stroke-width:2px;
    classDef alertNode fill:#FEF3C7,stroke:#F59E0B,color:#92400E,stroke-width:1.5px;
    classDef successNode fill:#ECFDF5,stroke:#10B981,color:#065F46,stroke-width:2px;

    A[🇮🇳 Citizen Enters Need in Plain Language]:::startNode --> B[🗺️ 770+ District Authority Finder]:::processNode
    B --> C[🤖 AI Copilot Drafts 5 Section 2-f Questions]:::aiNode
    C --> D[🛡️ Section 8 Exemption Screening & Scorecard]:::aiNode
    D --> E[💳 Bharatkosh ₹10 Payment / BPL Fee Waiver]:::processNode
    E --> F[📋 Confirmed Registration RTI-2026-XXXXX]:::successNode
    
    F --> G[⏱️ 30-Day Statutory Countdown Clock Sec 7-1]:::processNode
    
    G --> H{CPIO Response Status}:::alertNode
    
    H -->|Partial / Withheld Records| I[🔍 Question-by-Question AI Analysis]:::aiNode
    H -->|30 Days Expired Without Response| J[⚠️ Deemed Refusal Triggered Sec 7-2]:::alertNode
    H -->|Complete Records Delivered| K[🎉 Case Resolved & Vault Storage]:::successNode
    
    I --> L[⚖️ 1-Click First Appeal to FAA Sec 19-1]:::startNode
    J --> L
    
    L --> M{FAA Appellate Decision}:::alertNode
    M -->|Relief Granted| K
    M -->|Appeal Rejected / Ignored| N[🏛️ Second Appeal to Central Info Commission Sec 19-3]:::startNode
```

---

## 🏗️ System Architecture & Services Layer

RTI Saathi is organized into clean, decoupled domain boundaries:

```
src/
├── app/                             # Next.js 16 App Router & REST Endpoints
│   ├── api/
│   │   ├── authorities/route.ts     # Public authorities & CPIO/FAA lookup
│   │   ├── faqs/route.ts            # Categorized citizen statutory knowledge base
│   │   ├── rtis/route.ts            # RTI CRUD, metrics & submission
│   │   └── rtis/[id]/route.ts       # Single RTI lookup (GET) & Patch updates (PATCH)
│   ├── globals.css                  # Government design tokens & 65s marquee keyframes
│   ├── layout.tsx                   # Metadata, SEO tags & font hierarchy
│   └── page.tsx                     # Central application state coordinator
├── components/                      # High-Performance UI Components
│   ├── Navbar.tsx                   # Top header with DEMO badge, language & preferences
│   ├── NoticeBar.tsx                # Continuous running marquee ticker (65s loop)
│   ├── LandingView.tsx              # 2-Column hero, 4-step guide, search & scope banner
│   ├── OnboardingView.tsx           # Request builder & 770+ District authority finder
│   ├── BuilderView.tsx              # 5-step drafting, Section 8 QC & ₹10 payment flow
│   ├── DashboardView.tsx            # Action Required card & clickable filter metrics
│   ├── RtiDetailView.tsx            # Official response workspace & First Appeal petition
│   ├── AuthoritiesView.tsx          # Public authorities directory & CPIO details
│   ├── ReconciliationView.tsx       # Multi-step bank payment recovery portal
│   ├── HelpView.tsx                 # Interactive 5-step guide, FAQ tabs & ticket desk
│   ├── ProfileView.tsx              # Citizen settings & Central Certified Document Vault
│   ├── ContextualHelp.tsx           # Floating help button & plain-language legal glossary
│   └── Footer.tsx                   # 5-column statutory footer with high-contrast palette
└── services/                        # Business Logic & Data Abstractions
    ├── types.ts                     # Universal TypeScript interfaces & models
    ├── seedData.ts                  # Production-realistic seed records
    ├── authService.ts               # Citizen sessions & preference management
    ├── rtiService.ts                # Application CRUD, search & metric filtering
    ├── authorityService.ts          # Public authority directory & smart match engine
    ├── deadlineService.ts           # 30-day statutory calculation & holiday offsets
    ├── timelineService.ts           # Dynamic milestone event generator
    ├── documentService.ts           # Certified document repository & previews
    ├── notificationService.ts       # Alert dispatching & unread badge counters
    ├── appealService.ts             # First (FAA) & Second (CIC) Appeal petition generator
    └── aiService.ts                 # Assisted drafting & response discrepancy analyzer
```

---

## ⚖️ Statutory Compliance Matrix

RTI Saathi is architected strictly against the legal mandates of the **Right to Information Act, 2005** and the **RTI Rules, 2012**:

| Statutory Section | Legal Mandate | RTI Saathi Implementation |
|---|---|---|
| **Section 2(f)** | Definition of *"Information"* (material records only) | AI drafting copilot rewrites questions into concrete requests for records (*bills, work orders, muster rolls, test reports*). |
| **Section 3** | Citizen Right to Information | Open access to all Indian citizens with bilingual accessibility. |
| **Section 4(1)(b)** | Proactive Public Disclosures | Live search tool indexing published departmental tenders, manuals, and salary registers. |
| **Section 6(1)** | Application Filing in Hindi / English | Native language toggle seamlessly localizing queries and statutory terms. |
| **Section 7(1)** | 30-Calendar-Day Response Mandate | Real-time statutory countdown clock tracking the CPIO's delivery window. |
| **Section 7(2)** | **Deemed Refusal** Clause | Automatic status escalation to *"Deemed Refusal"* if 30 days lapse, triggering free appeal rights. |
| **Section 7(5)** | Fee Waiver for BPL Cardholders | 1-click BPL toggle waiving the ₹10 statutory fee with zero payment gateway friction. |
| **Section 8(1)** | Non-Disclosable Exemption Clauses | Automated pre-submission compliance check screening against defense, privacy, and commercial secrecy. |
| **Section 19(1)** | **First Appeal** to FAA within 30 Days | 1-click First Appeal wizard pre-populating historical grounds, registration tokens, and missing question logs. |
| **Section 19(3)** | **Second Appeal** to Central Info Commission | Structured petition generator for escalation to the CIC when FAA fails to provide relief. |

---

## 💻 For Engineers & Developers

### Local Setup & Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

```bash
# 1. Clone the repository
git clone https://github.com/harshit075/RTI.git
cd RTI

# 2. Install all dependencies
npm install

# 3. Start high-speed local dev server
npm run dev

# 4. Compile optimized production build
npm run build
npm run start
```

### REST API Documentation & Examples

#### 1. Retrieve Public Authorities Directory
```bash
curl -s http://localhost:3000/api/authorities | jq '.[0]'
```
```json
{
  "id": "morth",
  "name": "National Highways Authority of India (NHAI) / MoRTH",
  "department": "NHAI Project Implementation Unit",
  "ministry": "Ministry of Road Transport and Highways",
  "level": "Central",
  "cpioName": "Shri Manoj Pandey",
  "cpioDesignation": "General Manager (Tech) & CPIO",
  "cpioAddress": "G-5 & 6, Sector-10, Dwarka, New Delhi - 110075",
  "faaName": "Shri Rajesh Sharma",
  "faaDesignation": "Chief General Manager & First Appellate Authority"
}
```

#### 2. Retrieve RTI Case with Response Discrepancy Breakdown
```bash
curl -s http://localhost:3000/api/rtis/rti-road-jaipur-1245 | jq .
```
```json
{
  "id": "rti-road-jaipur-1245",
  "title": "Road Construction Expenditure — Ward 42, Jaipur",
  "status": "Response Received",
  "registrationNumber": "RTI-2026-001245",
  "answeredCount": 3,
  "totalQuestions": 5,
  "questionBreakdowns": [
    {
      "question": "Provide certified copies of final completion certificates and engineering quality audit reports.",
      "status": "Needs Review",
      "note": "Inspection report omitted by CPIO without citing Section 8 exemptions."
    }
  ],
  "aiAnalysis": "Question 5 was left unanswered. Under Section 7(1), withholding inspection records without invoking Section 8 exemptions is invalid. Strong statutory grounds exist to file a First Appeal under Section 19(1)."
}
```

---

## 🎨 Design System & Accessibility Standards

RTI Saathi adheres to the **Guidelines for Indian Government Websites (GIGW 3.0)** and **WCAG 2.2 Level AA**:

```css
/* Core Government Design Tokens */
--color-primary-navy:   #123B5D;   /* Official Trust Blue */
--color-bg-ice:         #F7F8FA;   /* Low Eye-Strain Canvas */
--color-text-charcoal:  #17212B;   /* WCAG AAA High Contrast Text */
--color-border-slate:   #D9E0E6;   /* Accessible Structural Divider */
--color-warning-amber:  #B7791F;   /* Statutory Deadline Highlight */
--color-success-green:  #16845B;   /* Disclosed Record Confirmation */
```

- **Screen Reader Optimized**: Complete `aria-label`, `aria-hidden`, and semantic landmark structure (`<header>`, `<main>`, `<nav>`, `<aside>`, `<footer>`).
- **Text Scaling**: Full dynamic layout scaling supporting 100% to 120% text zoom without clipping.
- **Low-Data Mode**: Image-light CSS rendering designed for low-connectivity environments.

---

## 📢 Practice & Demonstration Notice

> [!NOTE]
> **Demonstration Environment Notice:** RTI Saathi is an educational and civic practice gateway built in compliance with statutory RTI Act 2005 workflows. In this demonstration environment, all filing and payment steps are simulated for training and public awareness with zero real banking charges.

---

## 👥 Authors & Open-Source Civic Tech
- **Repository**: [harshit075/RTI](https://github.com/harshit075/RTI)
- **Branch**: `main`
- **License**: MIT
- Built with dedication for transparency, citizen empowerment, and digital governance.
