# Missing Features — RTI Saathi vs. rtionline.gov.in

Functional gap analysis of this codebase against the live Government of India RTI Online portal (v2.0).

**Reference sources**
- https://rtionline.gov.in/ (home, nav, scope banner)
- https://rtionline.gov.in/guidelines.php?request= (21-point portal guidelines)
- https://rtionline.gov.in/request/status.php (View Status form)
- https://rtionline.gov.in/viewPDF.php?file=um_citizen.pdf (DoPT / NIC citizen user manual — documents every screen field-by-field)

**Compared against** `rti-saathi @ main`, including the uncommitted working tree.
**Date** 27 August 2026.

---

## Summary

| Severity | Count | Meaning |
| --- | --- | --- |
| **Blocker** | 8 | A whole portal entry point or legal gate is absent |
| **Major** | 15 | The flow exists but is missing required fields, states, or rules |
| **Moderate** | 9 | Supporting surface, polish, or fidelity detail |
| **Total** | **32** | |

**Navigation coverage: 2 of 5.** The live portal exposes five citizen entry points — Submit Request, Submit First Appeal, View Status, View History, Login. Only the first two have an analogue here.

### Blockers at a glance

| ID | Gap |
| --- | --- |
| G01 | Guidelines interstitial with mandatory acknowledgement |
| G02 | Central-government-only scope + returned-without-refund |
| G03 | CAPTCHA security code on every public form |
| G04 | Ministry → Public Authority cascade |
| G13 | Standalone appeal entry by registration number |
| G17 | Anonymous status lookup |
| G25 | OTP-verified history recovery |
| G28 | Server-side persistence (API layer wired but unused) |

---

## 1. Scope & statutory gates

### G01 — Guidelines interstitial with mandatory acknowledgement · **Blocker**

- **Portal:** Both *Submit Request* and *Submit First Appeal* open a 21-point "Guidelines for use of RTI Online Portal" screen. The form is unreachable until the citizen ticks *"I have read and understood the above guidelines"* and presses Submit.
- **Here:** No interstitial. `OnboardingView` drops straight into topic selection; `BuilderView` mounts on the `'editor'` step by default.
- **Files:** `src/components/OnboardingView.tsx`, `src/components/BuilderView.tsx`

### G02 — Central-government-only scope, and the returned-without-refund consequence · **Blocker**

- **Portal:** The loudest banner on the home page — do **not** file for public authorities under State Governments, including the Government of NCT Delhi. Such applications are **returned without refund of the fee**, surfaced as a distinct status with an explanatory remark.
- **Here:** The app invites the opposite. `OnboardingView` offers a State → District → Local Body picker over a 23,000-line `geoHierarchyData.ts`, and the seed set ships **Delhi Jal Board** and **Uttar Pradesh Police HQ** as filable authorities with `level: 'State'`.
- **Files:** `src/components/OnboardingView.tsx`, `src/services/seedData.ts`, `src/services/types.ts`
- **Note:** This needs a product decision, not just a code fix. See build step 6.

### G03 — CAPTCHA security code on every public form · **Blocker**

- **Portal:** A case-insensitive image CAPTCHA with a refresh link and an audio alternative guards all four unauthenticated forms: request, appeal lookup, view status, view history.
- **Here:** Zero occurrences of `captcha` or `security code` anywhere under `src/`.
- **Files:** new shared component + every public form

---

## 2. Submit Request

### G04 — Ministry / Department / Apex body → Public Authority cascade · **Blocker**

- **Portal:** Two mandatory cascading dropdowns, plus a free-text **Search Public Authority** type-ahead matching any part of a name across the full central directory of thousands of authorities.
- **Here:** `seedAuthorities` holds **8** authorities. Selection runs through an AI keyword heuristic in `authorityService.searchAuthorities()` that hard-codes matches for road, school, and passport queries. There is no ministry → authority hierarchy in the data model at all.
- **Files:** `src/services/seedData.ts`, `src/services/authorityService.ts`, `src/components/OnboardingView.tsx`

### G05 — Applicant demographic fields · **Major**

- **Portal requires:**
  - Confirm Email-ID (must match)
  - Gender — Male / Female / Third Gender
  - Address, three lines, mandatory
  - Pin code, Country (India / Other), State
  - Status — Rural / Urban
  - Educational Status — Literate / Illiterate
  - Phone Number, separate from Mobile
  - Citizenship — Indian only
- **Here:** `BuilderView` collects three fields: Applicant Name, Email ID, Mobile. A keyword sweep for `gender`, `pincode`, `Rural`, `Literate`, and `citizenship` returns nothing across `src/`. The `User` type has a single freeform `location` string in their place.
- **Files:** `src/components/BuilderView.tsx`, `src/services/types.ts`

### G06 — 3,000-character cap, live counter, and character whitelist · **Major**

- **Portal:** Request text capped at 3,000 characters with a live `0/3000` counter. Only `A–Z a–z 0–9` and `, . - _ ( ) / @ : & ? \ %` are accepted. Anything longer must go up as a PDF attachment instead.
- **Here:** Unbounded textarea, no counter, no charset filter. `3000` does not appear anywhere under `src/`. `zod` is a declared dependency but is not imported by any form.
- **Files:** `src/components/BuilderView.tsx`

### G07 — Real supporting-document upload (PDF only, 1 MB ceiling) · **Major**

- **Portal:** A file input accepting **PDF only, up to 1 MB**, enforced server-side, used both for overflow application text and as the BPL proof channel.
- **Here:** The drop zone in `BuilderView` is decorative. There is no `<input type="file">` behind it, and the success line reading `supporting_evidence.pdf (142 KB) — Uploaded ✓` is hardcoded JSX that renders regardless of user action.
- **Files:** `src/components/BuilderView.tsx` (~line 423), `src/services/documentService.ts`

### G08 — BPL declaration sub-fields and mandatory certificate · **Major**

- **Portal:** Answering *Yes* to "Is the Applicant Below Poverty Line?" reveals **BPL Card No.**, **Year of Issue**, and **Issuing Authority**, and makes the certificate upload compulsory. The Make Payment button is then replaced by Submit.
- **Here:** A single boolean toggle. No card number, year, or issuing authority; no proof requirement. The toggle only swaps the button label to *Submit Application (Fee Waived)*.
- **Files:** `src/components/BuilderView.tsx`

### G09 — Statutory registration-number format · **Major**

- **Portal:** `AAAAA/B/C/DD/EEEEE` — public authority code, `R` for request or `A` for appeal, receipt type (`E` online, `P` physical, `T` transfer, `X` part-transfer, `L` legacy), two-digit year, five-digit serial. Example: `DOP&T/R/E/21/00001`.
- **Here:** `rtiService.createRTI()` emits `RTI-2026-{random 6}`; `appealService` emits `FAA-2026-{random 5}`. Neither carries the authority code or receipt type, so the transfer and part-transfer cases (G21, G22) have nowhere to live.
- **Files:** `src/services/rtiService.ts`, `src/services/appealService.ts`

### G10 — Filing receipt with Save / Print / Print Application + Nodal Officer contact · **Major**

- **Portal:** A receipt card listing Registration Number, Name, Date of Filing, Request filed with — plus the **Nodal Officer's telephone and email** — over three actions: **Save**, **Print**, **Print Application**.
- **Here:** The `'success'` step shows a registration number and no print or save path. The `Authority` type models CPIO and FAA officers but has no Nodal Officer, so the contact the citizen is told to call is not in the data at all.
- **Files:** `src/components/BuilderView.tsx`, `src/services/types.ts`

### G11 — Email and SMS alerts on every state change · **Moderate**

- **Portal:** Mobile number is collected explicitly "for receiving SMS alerts". Filing, CPIO action, additional-fee demands, and appeal decisions each dispatch an email and an SMS.
- **Here:** `notificationService` is in-app only, backed by an array. `UserPreferences` declares `emailNotifications` and `smsNotifications` flags that nothing reads.
- **Files:** `src/services/notificationService.ts`

### G12 — Payment gateway hand-off and the pending-registration path · **Moderate**

- **Portal:** An intermediate **Online Request Payment Form** hands off to SBI's Multi Option Payment System (Net Banking, Master/Visa/RuPay, UPI), then returns. If no registration number comes back, the citizen is told to wait **24–48 working hours** for reconciliation and explicitly warned not to pay again.
- **Here:** Fully simulated and always successful. `PaymentStatus` includes `'Pending'` and `'Failed'`, but `createRTI()` hardcodes `paymentStatus: 'Success'`, so neither branch is reachable — leaving `ReconciliationView` solving a problem the app cannot produce.
- **Files:** `src/components/BuilderView.tsx`, `src/services/rtiService.ts`

---

## 3. Submit First Appeal

### G13 — Standalone appeal entry by registration number · **Blocker**

- **Portal:** *Submit First Appeal* opens a lookup form — **RTI Request Registration No.**, **Email Id**, **Security code** — which retrieves the original request and pre-populates the appeal form from it. No account required.
- **Here:** Appeals are only reachable via `RtiDetailView`'s *File First Appeal* button, which requires the application to already be in local state. A citizen who filed on another device cannot appeal.
- **Files:** new route, `src/components/RtiDetailView.tsx`

### G14 — Ground For Appeal: the five statutory grounds · **Major**

- **Portal:** A mandatory dropdown with exactly five options:
  1. Refused access to Information Requested
  2. No Response Within the Time Limit
  3. Unreasonable amount of Fee required to Pay
  4. Provided Incomplete, Misleading or False Information
  5. Any Other ground
- **Here:** A free-text `appealReason` string prefilled with `'Information incomplete / withheld without Section 8 citation'`. The ground drives FAA routing and CIC second-appeal eligibility downstream, so an unconstrained string cannot support either.
- **Files:** `src/components/RtiDetailView.tsx`, `src/services/types.ts`

### G15 — Full appeal form: demographics, 3,000 chars, PDF attachment · **Major**

- **Portal:** The appeal form repeats the entire applicant block from G05, adds **Request Registration Date**, and applies the same 3,000-character limit, charset whitelist, 1 MB PDF rule, and CAPTCHA as the request form.
- **Here:** One textarea prefilled with a generated petition, plus a reason string. None of the applicant fields, limits, or attachment support carry over.
- **Files:** `src/components/RtiDetailView.tsx`

### G16 — Appeal receipt and per-CPIO appeal targeting · **Moderate**

- **Portal:** An appeal receipt in the same shape as the filing receipt, with its own `/A/` registration number and print actions. Where a request was split across CPIOs, the appeal must be filed against the specific sub-number — appealing the parent number is invalid.
- **Here:** An inline success banner showing `FAA-2026-xxxxx`. No receipt, no print, and no sub-number concept to target (see G22).
- **Files:** `src/services/appealService.ts`, `src/components/RtiDetailView.tsx`

---

## 4. View Status

The single most-used page on the live portal, and the largest structural hole here. Beyond the missing anonymous lookup itself, **five distinct mid-lifecycle states** that the portal renders have no representation in the `RTIStatus` union.

### G17 — Anonymous status lookup · **Blocker**

- **Portal:** **Registration Number + Email Id + Security code** returns a status card: name, date of filing, public authority, status, **date of action**, **reply / remarks**, and Nodal Officer contact. No login, on any device.
- **Here:** Status is only visible through the authenticated `DashboardView`, over applications held in this browser's `localStorage`. There is no lookup-by-number surface anywhere.
- **Files:** new route, `src/services/rtiService.ts`

### G18 — Additional fee demand → citizen pays · **Major**

- **Portal:** Under Section 7(3) a CPIO can demand photocopying or inspection costs. The status card then shows the amount, the remark explaining it, and a **Make Payment** link that runs a second gateway trip. The statutory clock pauses until it clears.
- **Here:** Half-built, from the wrong end. `GovernmentPortalView` lets a simulated CPIO *request* an additional fee, but it lands only as a `notes` string and an in-app notification. The citizen has no amount display and no way to pay it, and `deadlineService` has no concept of a paused clock.
- **Files:** `src/components/GovernmentPortalView.tsx`, `src/components/RtiDetailView.tsx`, `src/services/deadlineService.ts`

### G19 — "Supporting document required" — inline re-upload · **Major**

- **Portal:** When the original attachment is unreadable, the status card itself grows a **Choose File** control and an **Attached** button, and confirms with "File upload successfully".
- **Here:** Not modelled in either direction — no CPIO action to request it, no citizen surface to satisfy it.
- **Files:** `src/services/types.ts`, new status route

### G20 — "Application returned to applicant" status · **Major**

- **Portal:** A terminal status carrying a remark that explains the return — most often the state-authority scope rule from G02 — and stating plainly that the fee is not refunded.
- **Here:** The `RTIStatus` union has ten members and no return state. Every seeded path assumes the application is accepted.
- **Files:** `src/services/types.ts`

### G21 — Transfer to another public authority under Section 6(3) · **Major**

- **Portal:** The status card names the receiving authority, shows the **new registration number** generated on transfer, and tells the citizen to track that number from here on.
- **Here:** `GovernmentPortalView` has a `Transferred` label, but the transfer mints no new registration number and creates no link between old and new. On the citizen side the trail simply ends.
- **Files:** `src/components/GovernmentPortalView.tsx`, `src/services/types.ts`

### G22 — Split across multiple CPIOs: parent and child registrations · **Major**

- **Portal:** A Nodal Officer can fan one application out to several CPIOs, minting `…/07619`, `…/07619/1`, `…/07619/2`, `…/07619/3`. A modal lists each child with its own CPIO phone, email, status, date, remark, and document. Four replies arrive, and each is appealed separately.
- **Here:** The model is strictly one application to one authority. `RTIApplication` carries a single `authorityId`, a single status, and a single response — there is no parent/child relation to hang a split on.
- **Files:** `src/services/types.ts`, `src/services/rtiService.ts`, `src/components/GovernmentPortalView.tsx`

### G23 — Print RTI Application / Print Status · **Moderate**

- **Portal:** Every status view offers **Print RTI Application** and **Print Status** — the artefacts citizens attach to a second appeal or a CIC complaint.
- **Here:** The only print references are in the government-side view. There is no print stylesheet and no citizen-facing print or export action.
- **Files:** `src/components/RtiDetailView.tsx`, `src/app/globals.css`

### G24 — Date of action and the reply / remarks trail · **Moderate**

- **Portal:** Each status change is stamped with a **date of action** and an official **reply / remarks** line written by the officer who acted, and both persist on the record.
- **Here:** `RTIApplication` has one `responseDate`, one `responseSummary`, and a general-purpose `notes` field that `GovernmentPortalView` overwrites on each action — so remarks from earlier steps are lost rather than accumulated.
- **Files:** `src/services/types.ts`, `src/services/timelineService.ts`

---

## 5. View History

An entire portal module with no counterpart here. It is how a citizen recovers every application they have ever filed without holding an account.

### G25 — OTP-verified history recovery · **Blocker**

- **Portal:** Email Id + Mobile Number + Security code sends a one-time password to the registered email; entering it opens the citizen's full filing history. No password, no account.
- **Here:** The one `otp` reference in `src/` sits in `app/forgot-password/page.tsx` and is unrelated. There is no history-recovery flow.
- **Files:** new route, `src/services/authService.ts`

### G26 — Registered / Disposed of / Pending, split across requests and appeals · **Major**

- **Portal:** A dated summary board — "Request/Appeal Status as on DD-MM-YYYY" — with six clickable counts: Registered, Disposed of, and Pending, for requests and for appeals separately.
- **Here:** `getDashboardStatistics()` returns active, action-required, awaiting-response, completed, and total. The counts are lifecycle-flavoured rather than statutory, and appeals are not tallied apart from requests.
- **Files:** `src/services/rtiService.ts`, `src/components/DashboardView.tsx`

### G27 — Tabular list with sorting, paging, and show-N · **Moderate**

- **Portal:** Drill-downs render a data table: *Show 10 entries*, a search box, sortable S.No / Registration Number / Name / Date of Receipt / Status columns, and First / Previous / Next / Last paging.
- **Here:** `DashboardView` renders an unpaginated card list with a text filter and six status chips. No column sorting and no paging — workable at eight seeded records, not at a real filing history.
- **Files:** `src/components/DashboardView.tsx`

---

## 6. Account, support & platform

### G28 — Server-side persistence: the API layer is wired but unused · **Blocker**

- **Portal:** Every application lives in a central database, which is precisely what lets any citizen retrieve status or history from any device with only a registration number or an email address.
- **Here:** `/api/rtis` exists with GET and POST against Neon Postgres — and **no component ever calls it**. The only `fetch()` calls in the UI are to `/api/faqs` (`HelpView.tsx:56`) and `/api/authorities` (`OnboardingView.tsx:82`). All citizen data flows through `localStorage` in `rtiService` and `authService`, so nothing survives a change of browser or device.
- **Files:** `src/services/rtiService.ts`, `src/app/api/rtis/route.ts`

### G29 — Authentication that actually authenticates · **Major**

- **Portal:** A registered account with verified credentials, a My Accounts area, and a Change Password screen.
- **Here:** `authService.login()` accepts the `password` argument and never reads it — any string signs you in as the seed user, with the name derived from whatever was typed in the email box. Signup performs no verification, and there is no change-password screen. `AuthView` ships with `loginPassword` prefilled as `'citizen1234'`.
- **Files:** `src/services/authService.ts`, `src/components/AuthView.tsx`

### G30 — User Manual, Contact Us, Help Desk, and Policy · **Moderate**

- **Portal:** Four top-level support surfaces: the citizen User Manual PDF, Contact Us, a Policy page, and a prominent Help Desk block — **011-24010690/691**, 9:00 AM to 5:30 PM on working days, plus an email address.
- **Here:** None exist as routes. `HelpView` covers FAQ-style content well, but `Footer` links out to rtionline.gov.in, cic.gov.in, dopt.gov.in, and india.gov.in rather than to any page of its own. No help-desk contact appears anywhere in `src/`.
- **Files:** `src/app/`, `src/components/Footer.tsx`

### G31 — Public authority directory at real scale · **Moderate**

- **Portal:** A persistent **Public Authorities Available** link in the header opens the full central directory, browsable and searchable before filing.
- **Here:** `AuthoritiesView` is a good directory UI — search across name, description, and CPIO, plus a ministry filter — running over eight seeded records. It needs the real dataset behind it, and it is not linked from the header.
- **Files:** `src/services/seedData.ts`, `src/components/Navbar.tsx`

### G32 — Hindi coverage across the filing path · **Moderate**

- **Portal:** A Select Language control switches the whole portal, including form labels and validation messages, between English and Hindi.
- **Here:** The toggle works and `Navbar`, `Footer`, and `ReconciliationView` carry full `{ en, hi }` maps. But `BuilderView` field labels, `RtiDetailView`, and `GovernmentPortalView` are largely hardcoded English — so switching to Hindi mid-filing leaves the actual form untranslated.
- **Files:** `src/components/BuilderView.tsx`, `src/components/RtiDetailView.tsx`, `src/components/GovernmentPortalView.tsx`

---

## Running the other way — what this codebase has that the portal doesn't

The comparison is not one-directional. These are the reason the project exists, and are worth protecting as the gaps above get closed.

| Capability | Why it matters |
| --- | --- |
| **Guided drafting** | Topic → authority suggestion → editor → review, against a portal that hands you an empty 3,000-character box |
| **Response analysis** | Per-question answered / partial / needs-review breakdown with source document and page, plus a completeness score |
| **Deadline tracking** | `deadlineService` computes the 30-day statutory clock and flags deemed refusal; the portal shows a status string and leaves the arithmetic to you |
| **Second appeal drafting** | A generated CIC petition under Section 19(3); the live portal only links out to the CIC site |
| **Officer-side simulator** | `GovernmentPortalView` models Nodal triage, CPIO queue, and appellate decisions — invaluable for demonstrating the full lifecycle |
| **Accessibility preferences** | Text scaling, data-saver mode, high contrast, and reduced motion, none of which the live portal offers |

---

## Suggested build order

Sequenced by what unblocks what, not by severity. G28 comes first because three of the remaining blockers are unbuildable without it.

### 1. Move citizen data onto the API layer
Point `rtiService` at the existing `/api/rtis` routes instead of `localStorage`. Anonymous status lookup and OTP history recovery are both impossible while records live in one browser.

> **G28** → unblocks G17, G25, G13

### 2. Widen the data model before building more UI
Add the missing statuses (returned, transferred, additional-fee-due, document-required), the parent/child registration relation, the statutory number format, and a remarks trail. Every remaining status-side gap resolves to a shape this model does not yet have.

> **G09, G20, G21, G22, G24**

### 3. Open the three public entry points
View Status, View History, and the appeal-by-registration-number lookup — each gated by the shared CAPTCHA component, which is worth building once at the start of this step.

> **G03, G13, G17, G25, G26**

### 4. Bring the forms to statutory completeness
The guidelines gate, the ministry → authority cascade, the full applicant block, character and charset limits, real PDF upload, and the BPL sub-fields — on the request and appeal forms alike.

> **G01, G04, G05, G06, G07, G08, G14, G15**

### 5. Close the lifecycle loops
Additional-fee payment with a paused clock, document re-upload from the status card, receipts and print output, and email/SMS dispatch on state change.

> **G10, G11, G12, G16, G18, G19, G23**

### 6. Decide the scope question, then finish the surfaces
Either enforce central-only filing and retire the state/district picker, or keep state filing as a deliberate differentiator and say so plainly in the UI — but the app should not silently accept filings the real portal returns without refund. Then real auth, the support pages, the full authority dataset, and Hindi across the filing path.

> **G02, G29, G30, G31, G32**
