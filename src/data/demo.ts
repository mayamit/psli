// ============================================================================
// PSL/i — Interactive Demo data pack
// ----------------------------------------------------------------------------
// Fully synthetic. No real people, no PII. Powers the client-side /demo route.
// Persona: Maya Chen, solo founder & CEO of "Northwind" (seed-stage B2B SaaS).
// Everything here is scripted content — there are NO live model calls.
// Copy lives here, not in components (per Website/CLAUDE.md).
// ============================================================================

export const persona = {
  name: "Maya Chen",
  firstName: "Maya",
  role: "Founder & CEO",
  company: "Northwind",
  companyBlurb: "Seed-stage B2B SaaS — workflow automation for logistics teams.",
  tagline: "You didn't set this up. PSL/i already understands your week.",
  today: "Thursday, July 16", // demo "today" — keep commitment dates consistent with this
};

export const disclaimer = "Sample data — your PSL/i stays private to you.";

export const tiers = {
  options: ["Cloud", "Home Server"] as const,
  default: "Cloud" as const,
  homeServerTooltip: "Home Server: a local appliance in your home. Your data never leaves the house.",
};

// ---------------------------------------------------------------------------
// PEOPLE — the resolved relationships in Maya's Foundation
// ---------------------------------------------------------------------------
export type Person = {
  id: string;
  name: string;
  role: string;
  relationship: string;
  accent: string; // token accent key: blue | green | teal | amber | violet | rose
  initials: string;
};

export const people: Person[] = [
  { id: "glenn",  name: "Glenn Rivera",  role: "Partner, Meridian Ventures", relationship: "Lead investor (Seed)",        accent: "violet", initials: "GR" },
  { id: "jane",   name: "Jane Okafor",   role: "Co-founder & CTO, Northwind", relationship: "Co-founder",                  accent: "teal",   initials: "JO" },
  { id: "priya",  name: "Priya Nair",    role: "Head of Sales, Northwind",    relationship: "Direct report",              accent: "blue",   initials: "PN" },
  { id: "david",  name: "David Stern",   role: "Partner, Stern & Cole LLP",   relationship: "Outside counsel",            accent: "amber",  initials: "DS" },
  { id: "tomás",  name: "Tomás Herrera", role: "VP Ops, Cascade Freight",     relationship: "Customer (West Region deal)",accent: "green",  initials: "TH" },
  { id: "renu",   name: "Renu Kapoor",   role: "Founder, Studio Kapoor",      relationship: "Design vendor",              accent: "rose",   initials: "RK" },
  { id: "aws",    name: "AWS Billing",   role: "Automated",                   relationship: "Vendor (infrastructure)",    accent: "amber",  initials: "AW" },
  { id: "sam",    name: "Sam Delgado",   role: "Renewals, Cascade Freight",   relationship: "Customer contact",           accent: "green",  initials: "SD" },
];

// ---------------------------------------------------------------------------
// EMAILS — the synthetic inbox every fact was "resolved" from (provenance)
// ---------------------------------------------------------------------------
export type Email = {
  id: string;
  from: string;   // person id
  subject: string;
  date: string;   // human label
  snippet: string;
  body: string;   // shown when a provenance chip is expanded
};

export const emails: Email[] = [
  {
    id: "e1", from: "glenn", subject: "Re: Updated model before the partner meeting", date: "Tue",
    snippet: "Can you get me the revised financial model by Friday? Partners review Monday AM.",
    body: "Maya —\n\nGreat catching up. Before I take this to the full partnership Monday morning, can you send me the revised financial model with the new West Region assumptions baked in? Friday would be ideal so I have the weekend with it.\n\nAlso — are you free Thursday for a quick call to pre-align?\n\nGlenn",
  },
  {
    id: "e2", from: "david", subject: "Cascade MSA — redline attached", date: "Mon",
    snippet: "Turned the MSA redline. Two open points on liability + data. Need your call by Thu.",
    body: "Maya,\n\nRedline of the Cascade Freight MSA attached. Two items need your decision before I send back:\n\n1. Liability cap — they want 12 months of fees; we proposed 6.\n2. Data processing addendum — they've asked for EU SCCs even though this is US-only.\n\nI'd like to return it to their counsel by end of Thursday. Can you weigh in?\n\nDavid",
  },
  {
    id: "e3", from: "tomás", subject: "West Region rollout — timing", date: "Wed",
    snippet: "Leadership approved budget. We want to go live across 4 depots in Q3. Next step?",
    body: "Hi Maya,\n\nGood news — leadership approved the budget for the West Region rollout. We're looking at 4 depots (Reno, Fresno, Boise, Spokane) going live in Q3.\n\nWhat's the next step to get moving? Priya mentioned a technical onboarding call — happy to get that scheduled.\n\nBest,\nTomás",
  },
  {
    id: "e4", from: "priya", subject: "West Region prospect intro?", date: "Wed",
    snippet: "You said you'd intro me to Tomás's counterpart at the Fresno depot. Still good?",
    body: "Maya — following up. You mentioned you'd introduce me to the ops lead at the Fresno depot so I can start scoping the rollout. Whenever you have a sec. Thanks! — Priya",
  },
  {
    id: "e5", from: "renu", subject: "Invoice #2214 — brand refresh", date: "Mon",
    snippet: "Invoice for the brand refresh attached — $4,200, net-15. Thanks so much!",
    body: "Hi Maya,\n\nHope you love the new look! Invoice #2214 attached for the brand refresh — $4,200, net-15 (due July 21). Let me know if you need anything else.\n\nRenu",
  },
  {
    id: "e6", from: "aws", subject: "Your AWS bill is ready — July", date: "Tue",
    snippet: "Your July estimate is $18,940, up 38% from June ($13,730).",
    body: "Your AWS account estimate for July is $18,940.00, up 38% from June ($13,730.00). Largest increases: EC2 (+$3,100), data transfer (+$1,400). View the cost breakdown in the console.",
  },
  {
    id: "e7", from: "sam", subject: "Cascade renewal — heads up", date: "Thu (last week)",
    snippet: "Your annual renewal ($60k) is up Aug 30. Want to lock in before budget cycle.",
    body: "Hi Maya,\n\nQuick heads up — your Cascade Freight annual renewal ($60,000) comes up August 30. We'd love to renew and ideally expand with the West Region depots. Can we get a renewal conversation on the calendar in the next couple weeks?\n\nSam",
  },
  {
    id: "e8", from: "jane", subject: "Reimbursement — offsite", date: "Fri (last week)",
    snippet: "Covered the team offsite dinner + the Figma annual. $1,180 total. No rush.",
    body: "Hey — I fronted a couple things: team offsite dinner ($740) and our Figma annual seat renewal ($440). $1,180 total. No rush at all, just flagging so it doesn't get lost. — J",
  },
  {
    id: "e9", from: "glenn", subject: "Intro: growth advisor", date: "Fri (last week)",
    snippet: "Want me to intro you to a growth advisor who's helped two of our portfolio cos?",
    body: "Maya — would it be useful to connect with Dana, a growth advisor who's worked with two of our portfolio companies on early GTM? Happy to make the intro if helpful. — Glenn",
  },
  {
    id: "e10", from: "tomás", subject: "Security questionnaire", date: "Tue",
    snippet: "Procurement needs our standard security questionnaire back before signature.",
    body: "Maya — one procurement hurdle: they need your standard security questionnaire completed before we can countersign. I've attached their template. How soon can your team turn it around? — Tomás",
  },
  {
    id: "e11", from: "priya", subject: "Pipeline review moved", date: "Wed",
    snippet: "Moved our weekly pipeline review to Fri 10am — works better for the team.",
    body: "Heads up, I moved our weekly pipeline review to Friday 10am so the whole team can make it. Calendar updated. — Priya",
  },
  {
    id: "e12", from: "david", subject: "Term sheet — signed copy", date: "Thu (2 wks ago)",
    snippet: "Fully-executed seed term sheet attached for your records.",
    body: "Maya — attached is the fully-executed seed term sheet for your records. Congratulations again. Let me know when you want to kick off the financing docs. — David",
  },
];

// ---------------------------------------------------------------------------
// COMMITMENTS — things Maya promised (Foundation-resolved from emails)
// ---------------------------------------------------------------------------
export type Commitment = {
  id: string;
  text: string;
  due: string;
  status: "overdue" | "at-risk" | "on-track" | "done";
  personId: string;
  sourceEmailId: string;
};

export const commitments: Commitment[] = [
  { id: "c1", text: "Send Glenn the revised financial model (West Region assumptions)", due: "Fri Jul 17", status: "at-risk",  personId: "glenn", sourceEmailId: "e1" },
  { id: "c2", text: "Decide MSA redline points (liability cap + data addendum) for David", due: "Thu Jul 16", status: "at-risk",  personId: "david", sourceEmailId: "e2" },
  { id: "c3", text: "Intro Priya to the Fresno depot ops lead", due: "Wed Jul 15", status: "overdue", personId: "priya", sourceEmailId: "e4" },
  { id: "c4", text: "Return Cascade security questionnaire", due: "Tue Jul 21", status: "on-track", personId: "tomás", sourceEmailId: "e10" },
  { id: "c5", text: "Schedule West Region technical onboarding call", due: "Fri Jul 17", status: "on-track", personId: "tomás", sourceEmailId: "e3" },
  { id: "c6", text: "Reply to Sam re: Cascade renewal conversation", due: "Mon Jul 20", status: "on-track", personId: "sam",   sourceEmailId: "e7" },
];

// ---------------------------------------------------------------------------
// MONEY — payments & obligations resolved from the inbox
// ---------------------------------------------------------------------------
export type MoneyItem = {
  id: string;
  label: string;
  amount: string;
  direction: "owe" | "incoming" | "spend-alert";
  due?: string;
  personId: string;
  sourceEmailId: string;
  note?: string;
};

export const money: MoneyItem[] = [
  { id: "m1", label: "Studio Kapoor — brand refresh (Invoice #2214)", amount: "$4,200", direction: "owe", due: "Jul 21", personId: "renu", sourceEmailId: "e5" },
  { id: "m2", label: "Reimburse Jane — offsite dinner + Figma annual", amount: "$1,180", direction: "owe", personId: "jane", sourceEmailId: "e8" },
  { id: "m3", label: "AWS July bill — up 38% MoM", amount: "$18,940", direction: "spend-alert", personId: "aws", sourceEmailId: "e6", note: "+$5,210 vs June — worth a look" },
  { id: "m4", label: "Cascade Freight — annual renewal", amount: "$60,000", direction: "incoming", due: "Aug 30", personId: "sam", sourceEmailId: "e7" },
];

// ---------------------------------------------------------------------------
// DOCUMENTS — referenced, not copied (reference-don't-copy principle)
// ---------------------------------------------------------------------------
export type Doc = {
  id: string;
  title: string;
  kind: string;
  resolvedInto: string; // what the Foundation extracted
  personId: string;
  sourceEmailId: string;
};

export const documents: Doc[] = [
  { id: "d1", title: "Cascade Freight — MSA (redline)", kind: "Contract", resolvedInto: "2 open terms → 1 commitment (c2)", personId: "david", sourceEmailId: "e2" },
  { id: "d2", title: "Seed term sheet (executed)",       kind: "Contract", resolvedInto: "Financing terms + close date",     personId: "david", sourceEmailId: "e12" },
  { id: "d3", title: "Studio Kapoor — Invoice #2214",    kind: "Invoice",  resolvedInto: "Payment: $4,200 due Jul 21 (m1)",  personId: "renu",  sourceEmailId: "e5" },
];

// ---------------------------------------------------------------------------
// SCENE 1 — Communications cold-start: what PSL/i surfaces unprompted
// ---------------------------------------------------------------------------
export const scene1 = {
  eyebrow: "Communications lens",
  title: `Good morning, Maya. Here's what needs you.`,
  sub: "PSL/i read your inbox and resolved it. Nothing was set up — this is your first open.",
  sections: [
    { key: "replies",     label: "Owed a reply",     itemIds: ["e1", "e3", "e7"] },      // email ids, ranked
    { key: "commitments", label: "You promised",     itemIds: ["c3", "c1", "c2"] },      // commitment ids (overdue first)
    { key: "money",       label: "Money in your inbox", itemIds: ["m1", "m3", "m4"] },   // money ids
  ],
  closingLine: "You didn't set this up. PSL/i already understands your week.",
};

// ---------------------------------------------------------------------------
// SCENE 2 — Navigator: intent → propose → approve → act (human-gated)
// ---------------------------------------------------------------------------
export const scene2 = {
  eyebrow: "Navigator",
  title: "Tell PSL/i what you want. It proposes — you approve.",
  suggestedPrompts: [
    "Reply to Glenn confirming Thursday and remind me to send the model",
    "Draft a reply to Tomás to schedule the onboarding call",
    "Send Jane her $1,180 reimbursement",
  ],
  // Keyed by a normalized match of the prompt; PromptBox fuzzy-matches to these.
  responses: {
    "glenn-thursday": {
      matches: ["glenn", "thursday", "model", "reply to glenn"],
      intent: "Reply to Glenn confirming Thursday and remind me to send the model",
      proposals: [
        {
          type: "email",
          title: "Proposed reply to Glenn Rivera",
          to: "Glenn Rivera",
          subject: "Re: Updated model before the partner meeting",
          draft: "Glenn — Thursday works, let's do 2pm your time. I'll have the revised model (with the West Region assumptions) to you by Friday morning so you've got the weekend with it. Talk then. — Maya",
          sourceEmailId: "e1",
        },
        {
          type: "reminder",
          title: "Proposed reminder",
          detail: "Send Glenn the revised financial model",
          when: "Friday, Jul 17 · 9:00 AM",
          linkedCommitmentId: "c1",
        },
      ],
      onApprove: {
        confirmation: "Reply sent to Glenn · reminder set for Fri 9:00 AM",
        audit: "Navigator · 2 actions · approved by Maya · " + "Thu Jul 16, 8:42 AM",
      },
      onDecline: {
        confirmation: "Nothing sent. Draft saved so you can edit it.",
      },
    },
    "tomás-onboarding": {
      matches: ["tomás", "tomas", "onboarding", "schedule", "call"],
      intent: "Draft a reply to Tomás to schedule the onboarding call",
      proposals: [
        {
          type: "email",
          title: "Proposed reply to Tomás Herrera",
          to: "Tomás Herrera",
          subject: "Re: West Region rollout — timing",
          draft: "Tomás — congrats on the budget approval! Let's get the technical onboarding call set. Priya will lead it; I'll cc her here. Does early next week work — Tue or Wed AM? And I'll have the security questionnaire back to you by Jul 21. — Maya",
          sourceEmailId: "e3",
        },
        {
          type: "reminder",
          title: "Proposed task",
          detail: "Return Cascade security questionnaire",
          when: "Mon, Jul 21",
          linkedCommitmentId: "c4",
        },
      ],
      onApprove: {
        confirmation: "Reply sent to Tomás (Priya cc'd) · task added",
        audit: "Navigator · 2 actions · approved by Maya · Thu Jul 16, 8:44 AM",
      },
      onDecline: { confirmation: "Nothing sent. Draft saved so you can edit it." },
    },
    "jane-reimburse": {
      matches: ["jane", "reimburse", "reimbursement", "1180", "pay jane"],
      intent: "Send Jane her $1,180 reimbursement",
      proposals: [
        {
          type: "payment",
          title: "Proposed payment — needs your approval",
          detail: "Reimburse Jane Okafor",
          amount: "$1,180.00",
          memo: "Offsite dinner ($740) + Figma annual ($440)",
          sourceEmailId: "e8",
          highGate: true, // consequential → always human-gated, no auto-commit
        },
      ],
      onApprove: {
        confirmation: "Payment of $1,180.00 queued to Jane — you'll confirm in your bank app",
        audit: "Navigator · 1 action (payment) · approved by Maya · consequential action, human-gated",
      },
      onDecline: { confirmation: "No payment made. Nothing left your account." },
    },
  },
  closingLine: "A packaged product, not a chatbot. It proposes, you approve, it acts — and every action is logged.",
};

// ---------------------------------------------------------------------------
// SCENE 3 — Reasoning over your own life (answers with citations)
// ---------------------------------------------------------------------------
export const scene3 = {
  eyebrow: "Reasoning lens",
  title: "Ask over your own life — not a blank page.",
  suggestedPrompts: [
    "What do I owe Jane?",
    "Summarize the West Region deal — people, docs, commitments, next step",
    "Show me at-risk commitments",
  ],
  contrastLine: "A blank-window chatbot can't answer these. PSL/i answers over your life.",
  responses: {
    "owe-jane": {
      matches: ["owe jane", "jane", "how much", "reimburse"],
      question: "What do I owe Jane?",
      answer: "You owe **Jane Okafor $1,180** — she fronted the team offsite dinner ($740) and the Figma annual seat renewal ($440). No due date; she said no rush.",
      citations: [
        { label: "Email — 'Reimbursement — offsite' · Jane · Fri", emailId: "e8" },
        { label: "Money — Reimburse Jane", moneyId: "m2" },
      ],
      followUp: "Want me to send it? (opens Navigator)",
    },
    "west-region": {
      matches: ["west region", "cascade", "deal", "summarize", "summary"],
      question: "Summarize the West Region deal — people, docs, commitments, next step",
      answer:
        "**West Region (Cascade Freight)** — leadership approved budget for a 4-depot rollout (Reno, Fresno, Boise, Spokane), targeting Q3 go-live.\n\n" +
        "**People:** Tomás Herrera (VP Ops, sponsor), Sam Delgado (renewals), Priya Nair (your sales lead), David Stern (counsel).\n\n" +
        "**Docs:** MSA in redline — 2 open terms (liability cap, data addendum). Annual renewal ($60k) due Aug 30, with expansion upside.\n\n" +
        "**Your open commitments:** decide the MSA points for David (due today), intro Priya to the Fresno ops lead (overdue), schedule the onboarding call, return the security questionnaire (Jul 21).\n\n" +
        "**Suggested next step:** clear the MSA decision today so David can return the redline, then lock the onboarding call.",
      citations: [
        { label: "Email — 'West Region rollout — timing' · Tomás · Wed", emailId: "e3" },
        { label: "Doc — Cascade MSA (redline)", docId: "d1" },
        { label: "Email — 'Cascade renewal — heads up' · Sam", emailId: "e7" },
        { label: "Commitments c2, c3, c4, c5", commitmentIds: ["c2", "c3", "c4", "c5"] },
      ],
    },
    "at-risk": {
      matches: ["at risk", "at-risk", "overdue", "behind", "slipping"],
      question: "Show me at-risk commitments",
      answer:
        "**3 commitments need attention:**\n\n" +
        "• **Overdue** — Intro Priya to the Fresno depot ops lead (promised Wed, Jul 15).\n" +
        "• **At risk** — Decide the MSA redline points for David (due today, Jul 16).\n" +
        "• **At risk** — Send Glenn the revised financial model (due Fri, Jul 17; partners review Monday).\n\n" +
        "The Glenn model and the David decision both feed Monday's partner meeting — I'd clear those first.",
      citations: [
        { label: "Commitment c3 — Intro Priya", commitmentIds: ["c3"] },
        { label: "Commitment c2 — MSA decision", commitmentIds: ["c2"] },
        { label: "Commitment c1 — Model to Glenn", commitmentIds: ["c1"] },
      ],
    },
  },
  fallback:
    "This is a demo, so I only know Maya's sample life. Try one of the suggested questions — or in the real PSL/i, ask anything over your own data.",
};

// ---------------------------------------------------------------------------
// CTA — hand off to the (open) waitlist
// ---------------------------------------------------------------------------
export const cta = {
  title: "This is a taste. PSL/i does this over your real life — privately.",
  sub: "No demo account needed. Request early access when you're ready.",
  buttonLabel: "Request early access",
  href: "/waitlist",
};

// ============================================================================
// PSL/i — DEMO EXPANSION BLOCK  (additive — paste at the END of src/data/demo.ts)
// ----------------------------------------------------------------------------
// Zero-collision: this only ADDS new exports; it does not redeclare anything
// already in demo.ts. To use the richer set, point components at the merged
// `all*` arrays exported at the bottom (or spread the *Extra arrays into your
// originals). Keeps today = "Thursday, July 16".
//
// Adds: more volume · work+life cross-domain · narrative spine · cross-connections
// ============================================================================

// ---------------------------------------------------------------------------
// PEOPLE (extra) — widen the world to ~16 resolved relationships
// ---------------------------------------------------------------------------
export const peopleExtra: Person[] = [
  { id: "alex",    name: "Alex Reyes",     role: "Ops Lead, Fresno Depot (Cascade)", relationship: "Prospect (rollout)",   accent: "green",  initials: "AR" },
  { id: "dana",    name: "Dana Whitfield", role: "Growth Advisor",                   relationship: "Intro from Glenn",     accent: "violet", initials: "DW" },
  { id: "wei",     name: "Wei Tan",        role: "Fractional CFO, Northwind",        relationship: "Finance",              accent: "blue",   initials: "WT" },
  { id: "sofia",   name: "Sofia Renn",     role: "Senior Engineer (candidate)",      relationship: "Hiring — final round", accent: "teal",   initials: "SR" },
  { id: "deepa",   name: "Deepa Rao",      role: "Ops Director, Harbor Logistics",   relationship: "Customer (Harbor)",    accent: "green",  initials: "DR" },
  { id: "nina",    name: "Nina Alvarez",   role: "—",                                relationship: "Close friend",         accent: "rose",   initials: "NA" },
  { id: "gusto",   name: "Gusto Payroll",  role: "Automated",                        relationship: "Vendor (payroll)",     accent: "amber",  initials: "GP" },
  { id: "airline", name: "Horizon Air",    role: "Automated",                        relationship: "Travel",               accent: "blue",   initials: "HA" },
];

// ---------------------------------------------------------------------------
// EMAILS (extra) — e13..e26 — the sources for everything below
// ---------------------------------------------------------------------------
export const emailsExtra: Email[] = [
  { id: "e13", from: "jane", subject: "West Region load test — heads up on infra", date: "Tue",
    snippet: "Ran the 4-depot load test on staging. Spun up extra EC2 — will bump the AWS bill this month.",
    body: "Maya — I ran the full West Region load test on staging (simulated all 4 depots). Had to spin up a lot of extra EC2 + data transfer for a few days, so expect the AWS bill to jump this month. Good news: it held up clean at 4x load. — J" },
  { id: "e14", from: "tomás", subject: "Re: West Region rollout — timing", date: "Wed",
    snippet: "Between us — leadership asked us to also price a competing tool. Nothing decided, but move quick.",
    body: "Maya, one thing between us: leadership asked procurement to also get a quote from a competing tool before final sign-off. I'm still fully behind you, but the faster we can close the MSA and show the security posture, the better. Let's not let this drift. — Tomás" },
  { id: "e15", from: "alex", subject: "Intro from Priya? — Fresno rollout", date: "Wed",
    snippet: "Priya said you'd connect us. I run ops at the Fresno depot — keen to scope go-live.",
    body: "Hi Maya — Priya mentioned you'd introduce us. I run operations at the Fresno depot and I'm the one who'll own the PSL rollout on our side. Would love 30 minutes to scope timing and what we need from our team. — Alex" },
  { id: "e16", from: "wei", subject: "Payroll runs tomorrow + burn note", date: "Wed",
    snippet: "Payroll ($82,400) runs Fri — please approve today. Also, June burn was $210k; runway ~14 mo.",
    body: "Maya — two things. (1) Payroll of $82,400 runs Friday; needs your approval by end of today. (2) June burn came in at $210k — runway ~14 months at current spend. The revised model for Glenn should reflect the West Region revenue, which improves this materially. — Wei" },
  { id: "e17", from: "sofia", subject: "Following up — Northwind offer", date: "Tue",
    snippet: "Really enjoyed final round. I have another offer with a Friday deadline — hoping to hear from you.",
    body: "Hi Maya — thank you again for the final round, I'm excited about Northwind. I want to be transparent: I have a competing offer with a decision deadline this Friday. You're my first choice — is there any way to know where things stand by then? — Sofia" },
  { id: "e18", from: "deepa", subject: "Harbor — small bug + expansion interest", date: "Mon",
    snippet: "Minor export bug our team hit. Also: we're opening 2 depots in Q4 and may want to expand seats.",
    body: "Hi Maya — two things from the Harbor side. First, a couple of our users hit a bug exporting the weekly manifest (screenshot attached). Second, and more fun: we're opening two new depots in Q4 and would likely want to add seats. Can we set time next week? — Deepa" },
  { id: "e19", from: "nina", subject: "Can't wait for Saturday!! 💍", date: "Mon",
    snippet: "You're still coming right? Rehearsal dinner Fri 8pm, wedding Sat 4pm. Did you RSVP the +1?",
    body: "Maya!! Getting so close. You're still on for the weekend right? Rehearsal dinner Friday 8pm, wedding Saturday 4pm. I don't think the site got your +1 RSVP — can you confirm? Love you, can't wait. — Nina" },
  { id: "e20", from: "airline", subject: "Your trip Friday — HZ 488 SFO→AUS", date: "Tue",
    snippet: "Departs Fri 6:10 PM. Check-in opens 24h before. Fare rules: change fee applies.",
    body: "Reminder: Horizon Air HZ 488, San Francisco (SFO) → Austin (AUS), departs Friday 6:10 PM, arrives 11:52 PM. Online check-in opens 24 hours before departure. This fare permits changes with a fee." },
  { id: "e21", from: "glenn", subject: "Thursday call — 2pm?", date: "Wed",
    snippet: "Does 2pm Thursday work to pre-align before I brief the partners? Should take 30 min.",
    body: "Maya — does 2pm Thursday work for our pre-align call? I want to walk in Monday already knowing the story. 30 minutes should do it. — Glenn" },
  { id: "e22", from: "david", subject: "Re: Cascade MSA — one more note", date: "Wed",
    snippet: "If you can decide the liability cap today, I can return the redline tonight and we stay on track.",
    body: "Maya — just flagging: the liability cap is the only real blocker now. If you can give me a yes/no on meeting them at 9 months (a middle path) today, I can turn the redline tonight and we keep the timeline. — David" },
  { id: "e23", from: "renu", subject: "Re: Invoice #2214 — friendly nudge", date: "Wed",
    snippet: "No pressure at all — just confirming you got Invoice #2214 ($4,200). Due the 21st.",
    body: "Hi Maya — just making sure Invoice #2214 ($4,200) landed okay. Due the 21st, no pressure. Thanks again! — Renu" },
  { id: "e24", from: "dana", subject: "Glenn connected us — early GTM", date: "Tue",
    snippet: "Glenn suggested we talk. I've helped two Meridian companies with early GTM. Free next week?",
    body: "Hi Maya — Glenn suggested we connect. I've worked with two Meridian portfolio companies on early go-to-market and would be happy to compare notes. Are you free for a call next week? — Dana" },
  { id: "e25", from: "priya", subject: "Cascade — I can lead the onboarding", date: "Wed",
    snippet: "Happy to own the Cascade technical onboarding once you intro me to Alex. Just say go.",
    body: "Maya — I can fully own the Cascade technical onboarding across the 4 depots once you connect me with Alex at Fresno. Just need the intro and I'll run it. — Priya" },
  { id: "e26", from: "deepa", subject: "Re: Harbor — reference call?", date: "Thu (last week)",
    snippet: "Happy to be a reference for you with other logistics prospects whenever useful.",
    body: "Also — happy to act as a reference for you with other logistics customers. We've had a great experience. Just send them my way. — Deepa" },
];

// ---------------------------------------------------------------------------
// COMMITMENTS (extra) — c7..c12
// ---------------------------------------------------------------------------
export const commitmentsExtra: Commitment[] = [
  { id: "c7",  text: "Approve Friday payroll ($82,400) for Wei",                 due: "Thu Jul 16", status: "at-risk",  personId: "wei",   sourceEmailId: "e16" },
  { id: "c8",  text: "Give Sofia a decision on her offer (competing Fri deadline)", due: "Fri Jul 17", status: "at-risk",  personId: "sofia", sourceEmailId: "e17" },
  { id: "c9",  text: "Decide the MSA liability cap (David's only blocker)",       due: "Thu Jul 16", status: "overdue", personId: "david", sourceEmailId: "e22" },
  { id: "c10", text: "Confirm wedding attendance + RSVP the +1 for Nina",         due: "Fri Jul 17", status: "on-track", personId: "nina",  sourceEmailId: "e19" },
  { id: "c11", text: "Reply to Alex (Fresno) to scope the rollout call",          due: "Fri Jul 17", status: "on-track", personId: "alex",  sourceEmailId: "e15" },
  { id: "c12", text: "Set time with Deepa re: Harbor bug + Q4 expansion",         due: "Mon Jul 20", status: "on-track", personId: "deepa", sourceEmailId: "e18" },
];

// ---------------------------------------------------------------------------
// MONEY (extra) — m5..m10
// ---------------------------------------------------------------------------
export const moneyExtra: MoneyItem[] = [
  { id: "m5",  label: "Payroll — Gusto run (needs approval)",     amount: "$82,400", direction: "owe",         due: "Fri Jul 17", personId: "gusto", sourceEmailId: "e16", note: "Approve by today or it misses the cycle" },
  { id: "m6",  label: "Wei Tan — fractional CFO (July)",          amount: "$6,500",  direction: "owe",         due: "Jul 25",     personId: "wei",   sourceEmailId: "e16" },
  { id: "m7",  label: "Stripe payout — customer invoices",        amount: "$41,300", direction: "incoming",    due: "Jul 18",     personId: "deepa", sourceEmailId: "e18" },
  { id: "m8",  label: "Harbor Logistics — Q4 seat expansion",     amount: "~$28,000",direction: "incoming",    due: "Q4",         personId: "deepa", sourceEmailId: "e18", note: "Upside — 2 new depots" },
  { id: "m9",  label: "Horizon Air — wedding trip (booked)",      amount: "$612",    direction: "spend-alert", personId: "airline", sourceEmailId: "e20", note: "Non-refundable; changeable with fee" },
  { id: "m10", label: "AWS spike — traced to West Region load test", amount: "+$5,210", direction: "spend-alert", personId: "aws", sourceEmailId: "e13", note: "Not a leak — it's the 4-depot load test" },
];

// ---------------------------------------------------------------------------
// DOCUMENTS (extra) — d4..d7
// ---------------------------------------------------------------------------
export const documentsExtra: Doc[] = [
  { id: "d4", title: "SOC 2 Type II report (2026)",       kind: "Security",  resolvedInto: "Pre-fills 80% of Cascade questionnaire", personId: "tomás", sourceEmailId: "e10" },
  { id: "d5", title: "West Region pricing model (v3)",     kind: "Spreadsheet", resolvedInto: "Feeds Glenn's revised model + runway",  personId: "wei",   sourceEmailId: "e16" },
  { id: "d6", title: "Sofia Renn — offer letter (draft)",  kind: "Offer",     resolvedInto: "Commitment c8 (decide by Fri)",          personId: "sofia", sourceEmailId: "e17" },
  { id: "d7", title: "Cascade security questionnaire",     kind: "Form",      resolvedInto: "Blocks countersignature (c4)",           personId: "tomás", sourceEmailId: "e10" },
];

// ---------------------------------------------------------------------------
// LIFE ITEMS — the cross-domain (non-work) threads. New optional collection.
// ---------------------------------------------------------------------------
export type LifeItem = {
  id: string;
  label: string;
  when: string;
  kind: "travel" | "event" | "personal" | "reminder";
  personId?: string;
  sourceEmailId?: string;
  note?: string;
};

export const lifeItems: LifeItem[] = [
  { id: "L1", label: "Flight to Austin — Nina's wedding", when: "Fri Jul 17, 6:10 PM", kind: "travel", personId: "airline", sourceEmailId: "e20", note: "Collides with the Glenn deadline day" },
  { id: "L2", label: "Rehearsal dinner",                  when: "Fri Jul 17, 8:00 PM", kind: "event",  personId: "nina",    sourceEmailId: "e19" },
  { id: "L3", label: "Nina's wedding",                    when: "Sat Jul 18, 4:00 PM", kind: "event",  personId: "nina",    sourceEmailId: "e19" },
  { id: "L4", label: "RSVP the +1 (Nina asked twice)",    when: "by Fri Jul 17",       kind: "reminder", personId: "nina",  sourceEmailId: "e19" },
];

// ---------------------------------------------------------------------------
// CONNECTIONS — the cross-links that make PSL/i feel like it *understands*.
// Each edge references ids from any collection and states the insight + payoff.
// This is the "how did it know that" material — surface these as callouts.
// ---------------------------------------------------------------------------
export type Connection = {
  id: string;
  kind: "dependency" | "same-entity" | "reframe" | "conflict" | "leverage";
  nodes: string[];      // ids across emails/commitments/money/docs/life
  insight: string;      // one-line "PSL/i noticed…"
  payoff: string;       // why it matters to Maya
};

export const connections: Connection[] = [
  { id: "x1", kind: "dependency", nodes: ["c9", "d5", "c1", "e21"],
    insight: "The MSA liability-cap decision is blocking the West Region numbers, which block Glenn's model — which he briefs to partners Monday.",
    payoff: "One yes/no today unblocks the whole chain into Monday's partner meeting." },
  { id: "x2", kind: "reframe", nodes: ["m10", "e13", "e6"],
    insight: "Your AWS bill jumped 38% — but it traces to Jane's 4-depot West Region load test, not a leak.",
    payoff: "It's a positive signal: infra held at 4x load. Nothing to fix." },
  { id: "x3", kind: "same-entity", nodes: ["c3", "e4", "e15", "e25"],
    insight: "The 'Fresno depot ops lead' you owe Priya an intro to is Alex Reyes — who's already emailing you, and Priya's ready to run it.",
    payoff: "One intro clears an overdue commitment and starts the rollout." },
  { id: "x4", kind: "conflict", nodes: ["c1", "e21", "L1", "L2"],
    insight: "Glenn wants a Thursday 2pm call and the model Friday — but you fly out Friday 6:10pm for Nina's rehearsal dinner.",
    payoff: "PSL/i protects the personal plan: finish the model Thu night, keep Fri clear." },
  { id: "x5", kind: "leverage", nodes: ["c4", "d4", "d7"],
    insight: "Cascade's security questionnaire can be ~80% pre-filled from your existing SOC 2 report.",
    payoff: "Turns a day of work into a review — and unblocks the countersignature." },
  { id: "x6", kind: "leverage", nodes: ["e14", "c9", "c4", "e26"],
    insight: "Cascade is quietly pricing a competitor — but Deepa (Harbor) offered to be a reference.",
    payoff: "Speed on the MSA + a warm reference is how you close before the competitor lands." },
  { id: "x7", kind: "reframe", nodes: ["m5", "m7", "c7"],
    insight: "Payroll ($82,400) runs Friday, but a Stripe payout of $41,300 lands Thursday.",
    payoff: "Cash timing is fine — approve payroll with confidence." },
];

// ---------------------------------------------------------------------------
// STORYLINE — the narrative spine PSL/i can articulate on demand.
// ---------------------------------------------------------------------------
export const storyline = {
  title: "The Monday crunch",
  oneLine: "Everything this week bends toward Glenn's Monday partner meeting — and one decision today unlocks it.",
  criticalPath: ["c9", "d5", "c1", "e21"], // MSA cap → model → Glenn → partners
  theTension:
    "It's Thursday. Glenn briefs his partners Monday morning off your revised model. The model needs the West Region numbers, which are stuck behind the MSA liability-cap decision David needs today. Cascade is quietly pricing a competitor, and you fly out Friday evening for your best friend's wedding. The week looks chaotic — but it's really one chain.",
  theResolution:
    "Say yes to the 9-month cap (David returns the redline tonight), send Wei the go-ahead so the model reflects West Region revenue, pre-fill the security questionnaire from SOC 2, intro Priya to Alex, and you walk onto that flight Friday with the partner meeting already won.",
};

// ---------------------------------------------------------------------------
// SCENE 2 (extra) — more Navigator intents so free-typing rarely misses.
// Merge these into scene2.responses (spread) and add to suggestedPrompts.
// ---------------------------------------------------------------------------
export const scene2ExtraPrompts = [
  "Say yes to the 9-month liability cap and tell David",
  "Pre-fill the Cascade security questionnaire from our SOC 2",
  "Approve Friday payroll",
  "Intro Priya to Alex at the Fresno depot",
  "Tell Sofia she's got the offer",
];

export const scene2ExtraResponses = {
  "msa-cap": {
    matches: ["liability", "cap", "9-month", "9 month", "msa", "david", "yes to"],
    intent: "Say yes to the 9-month liability cap and tell David",
    proposals: [
      { type: "email", title: "Proposed reply to David Stern", to: "David Stern",
        subject: "Re: Cascade MSA — one more note",
        draft: "David — yes, let's meet them at a 9-month liability cap. Hold firm on US-only data (no EU SCCs). If you can return the redline tonight we stay on track for Monday. Thanks for pushing. — Maya",
        sourceEmailId: "e22" },
      { type: "reminder", title: "Proposed status update", detail: "Tell Wei the West Region terms are settled so the model can finalize", when: "Today · after David confirms", linkedCommitmentId: "c1" },
    ],
    onApprove: { confirmation: "Reply sent to David · Wei looped in", audit: "Navigator · 2 actions · approved by Maya · unblocks critical path x1" },
    onDecline: { confirmation: "Nothing sent. Draft saved." },
  },
  "questionnaire": {
    matches: ["questionnaire", "security", "soc 2", "soc2", "pre-fill", "prefill"],
    intent: "Pre-fill the Cascade security questionnaire from our SOC 2",
    proposals: [
      { type: "document", title: "Proposed: draft questionnaire from SOC 2", detail: "42 of 53 answers pre-filled from SOC 2 Type II report", sourceEmailId: "e10", highGate: false },
      { type: "reminder", title: "Proposed task", detail: "Review 11 remaining answers, then send to Tomás", when: "Today", linkedCommitmentId: "c4" },
    ],
    onApprove: { confirmation: "Draft ready — 42/53 pre-filled · 11 flagged for your review", audit: "Navigator · used SOC 2 doc (d4) · human review required before send" },
    onDecline: { confirmation: "No draft created." },
  },
  "payroll": {
    matches: ["payroll", "approve payroll", "gusto", "82,400", "82400"],
    intent: "Approve Friday payroll",
    proposals: [
      { type: "payment", title: "Payroll approval — needs your approval", detail: "Gusto payroll run", amount: "$82,400.00", memo: "Covered by Thu Stripe payout ($41,300) + balance", sourceEmailId: "e16", highGate: true },
    ],
    onApprove: { confirmation: "Payroll approved for Friday — you'll confirm in Gusto", audit: "Navigator · 1 action (payroll) · consequential, human-gated · cash check passed (x7)" },
    onDecline: { confirmation: "Payroll not approved. Nothing submitted." },
  },
  "intro-priya-alex": {
    matches: ["intro", "priya", "alex", "fresno", "connect"],
    intent: "Intro Priya to Alex at the Fresno depot",
    proposals: [
      { type: "email", title: "Proposed intro — Priya ⇄ Alex", to: "Priya Nair, Alex Reyes",
        subject: "Priya (Northwind) ⇄ Alex (Fresno) — West Region rollout",
        draft: "Alex, meet Priya — she'll own the Northwind rollout across your 4 depots and is fantastic. Priya, Alex runs ops at Fresno and will lead on their side. I'll let you two find time to scope go-live. Excited for this. — Maya",
        sourceEmailId: "e15" },
    ],
    onApprove: { confirmation: "Intro sent — clears your overdue commitment to Priya", audit: "Navigator · 1 action · approved by Maya · resolves c3 (same-entity x3)" },
    onDecline: { confirmation: "No intro sent. Draft saved." },
  },
  "sofia-offer": {
    matches: ["sofia", "offer", "hire", "candidate", "she's got"],
    intent: "Tell Sofia she's got the offer",
    proposals: [
      { type: "email", title: "Proposed reply to Sofia Renn", to: "Sofia Renn",
        subject: "Re: Following up — Northwind offer",
        draft: "Sofia — we'd love to have you. Your formal offer is on its way today, well ahead of your Friday deadline. I'm thrilled about what you'll build here. — Maya",
        sourceEmailId: "e17" },
      { type: "reminder", title: "Proposed task", detail: "Send Sofia the signed offer letter (draft d6)", when: "Today", linkedCommitmentId: "c8" },
    ],
    onApprove: { confirmation: "Reply sent to Sofia · offer-letter task added", audit: "Navigator · 2 actions · approved by Maya · beats her Fri deadline (c8)" },
    onDecline: { confirmation: "Nothing sent. Draft saved." },
  },
};

// ---------------------------------------------------------------------------
// SCENE 3 (extra) — the killer Reasoning questions. Merge into scene3.responses.
// ---------------------------------------------------------------------------
export const scene3ExtraResponses = {
  "blocking-partner-meeting": {
    matches: ["blocking", "partner meeting", "monday", "critical", "what's stuck", "chain"],
    question: "What's blocking the partner meeting?",
    answer:
      "**One chain, not five problems.** Glenn briefs his partners Monday off your revised model.\n\n" +
      "1. The model needs the **West Region numbers**.\n" +
      "2. Those are stuck behind the **MSA liability-cap decision** (David needs it *today*).\n" +
      "3. Cascade also won't countersign without the **security questionnaire** — which you can pre-fill from SOC 2.\n\n" +
      "**Do this today:** approve the 9-month cap → David returns the redline tonight → Wei finalizes the model → Glenn's set for Monday. Everything else can wait.",
    citations: [
      { label: "Commitment c9 — MSA cap decision", commitmentIds: ["c9"] },
      { label: "Doc — West Region pricing model", docId: "d5" },
      { label: "Email — Glenn, Thursday call", emailId: "e21" },
      { label: "Connection x1 — the critical path", connectionId: "x1" },
    ],
  },
  "aws-spike": {
    matches: ["aws", "bill", "why is", "spike", "cloud cost", "up 38"],
    question: "Why is my AWS bill up?",
    answer:
      "**It's not a leak — it's the West Region load test.** Jane ran a full 4-depot simulation on staging Tuesday, which spun up extra EC2 and data transfer (+$5,210). The system held clean at 4x load. Nothing to fix; the spend was expected and it's a good sign for the rollout.",
    citations: [
      { label: "Email — Jane, load test heads-up", emailId: "e13" },
      { label: "Money — AWS spike traced", moneyId: "m10" },
      { label: "Connection x2 — reframe", connectionId: "x2" },
    ],
  },
  "before-wedding": {
    matches: ["wedding", "before i leave", "friday", "flight", "on my plate", "nina"],
    question: "What's on my plate before I leave for the wedding?",
    answer:
      "You fly out **Friday 6:10 PM** for Nina's rehearsal dinner. To leave with a clear head, close these **today/Thu night**:\n\n" +
      "• **MSA cap decision** → unblocks the model (do first).\n" +
      "• **Approve payroll** (runs Fri; a Stripe payout lands Thu, so cash is fine).\n" +
      "• **Sofia's offer** (her competing deadline is Friday).\n" +
      "• **RSVP Nina's +1** (she's asked twice) and **intro Priya to Alex**.\n\n" +
      "I've kept Friday clear so the deadline day doesn't eat your travel.",
    citations: [
      { label: "Life — flight & rehearsal dinner", lifeIds: ["L1", "L2"] },
      { label: "Commitments c7, c8, c9, c10", commitmentIds: ["c7", "c8", "c9", "c10"] },
      { label: "Connection x4 — the schedule conflict", connectionId: "x4" },
    ],
  },
  "cascade-status": {
    matches: ["cascade status", "status of cascade", "west region status", "where are we", "account status"],
    question: "What's the status of the Cascade account?",
    answer:
      "**Cascade Freight — moving, with a clock on it.** Budget approved for a 4-depot Q3 rollout; $60k renewal due Aug 30 with expansion upside. **Watch-outs:** they're quietly pricing a competitor, and two things gate signature — the MSA cap and the security questionnaire. **Momentum:** Tomás is your champion, Alex (Fresno) is ready to scope, and Deepa at Harbor offered to be a reference. Close the MSA today and you're ahead of the competitor.",
    citations: [
      { label: "Email — Tomás, competing quote", emailId: "e14" },
      { label: "Commitments c4, c9", commitmentIds: ["c4", "c9"] },
      { label: "Connection x6 — competitor + reference", connectionId: "x6" },
    ],
  },
  "who-havent-i-replied": {
    matches: ["haven't i replied", "owe a reply", "unanswered", "who am i ignoring", "reply"],
    question: "Who haven't I replied to?",
    answer:
      "**5 people are waiting on you**, most-urgent first: **David** (MSA cap — today), **Glenn** (confirm Thursday 2pm), **Sofia** (offer, Fri deadline), **Alex** (Fresno scoping), and **Nina** (the +1 RSVP). Three of these feed Monday's partner meeting; one is your best friend's wedding. Want me to draft all five?",
    citations: [
      { label: "Emails e22, e21, e17, e15, e19", emailIds: ["e22", "e21", "e17", "e15", "e19"] },
    ],
  },
};

// ---------------------------------------------------------------------------
// MERGED ARRAYS — point components at these to use the full, richer dataset.
// (Or spread the *Extra arrays into your originals above and delete these.)
// ---------------------------------------------------------------------------
export const allPeople      = [...people, ...peopleExtra];
export const allEmails      = [...emails, ...emailsExtra];
export const allCommitments = [...commitments, ...commitmentsExtra];
export const allMoney       = [...money, ...moneyExtra];
export const allDocuments   = [...documents, ...documentsExtra];


// SCENE 0 — Orientation / set the scene (shown before Communications)
export const scene0 = {
  eyebrow: "Interactive demo · about 90 seconds",
  title: "Meet Maya. It's Thursday — and her week looks like chaos.",
  setup:
    "Maya runs Northwind, a seed-stage startup. Her lead investor briefs his partners on Monday, a key deal is mid-negotiation, payroll runs Friday, a top candidate has a competing offer — and she flies out Friday night for her best friend's wedding. Most tools would show her a pile of unread email. PSL/i has already made sense of it.",
  steps: [
    { n: 1, lens: "Communications", line: "PSL/i has already read her inbox and resolved it — who's waiting, what she promised, what's owed. She set up nothing." },
    { n: 2, lens: "Navigator",      line: "She says what she wants in plain language. PSL/i proposes the exact action and waits for her approval." },
    { n: 3, lens: "Reasoning",      line: "She asks questions over her own life. Every answer is assembled from her Foundation, with the source behind each claim." },
  ],
  howto: [
    "Everything here is sample data — nothing real, nothing leaves the house.",
    "Click any fact to see the email it was resolved from.",
    "Switch Cloud / Home Server any time — same product, your choice of where data lives.",
  ],
  cta: "Start with Communications →",
};
