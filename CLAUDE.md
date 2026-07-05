# CLAUDE.md — Personal Semantic Layer (PSL/i) marketing site

You are building the **Personal Semantic Layer (PSL/i)** marketing website. Read this file every session. Full detail: `Sable_Website_Design_Brief.md`.

> **Naming update (2026‑07‑04):** the product working name is now **Personal Semantic Layer (PSL/i)** (short form **PSL/i**), replacing the former name *Sable*. Older parts of the brief may still say “Sable” — treat those as “PSL/i”.

## Brand & naming (strict)
- Product = **Personal Semantic Layer (PSL/i)**. Company/brand = **PSL**. Footer/legal: “**Personal Semantic Layer (PSL/i), by PSL**”.
- Use the **full name on the first/prominent mention** of a page, then the short form **PSL/i** for the logo and repeat mentions.
- The **hero stays outcome‑led** — keep the headline “An AI that actually knows you.” Introduce the name in the eyebrow, not the headline. Don’t turn the headline into an architecture phrase.

## What PSL/i is (one line)
An AI that actually knows you — it resolves what your life and work mean once, holds it privately, and reuses it across your apps. Navigator (proposes, acts only after you approve) · Foundation (private store of resolved meaning, with provenance + audit) · four V1 lenses (Communications, Reasoning, Document, Photo/media) · $100/mo · Cloud + Home‑Server tiers · trust by design.

> **Scope update (2026‑07‑05):** V1 launches with **four lenses**, not two — Communications, Reasoning, **Document** (files/contracts/receipts → commitments & payments), and **Photo/media** (recall by date/place/object + text‑in‑image; **no faces or video in V1**). Source: `docs/research/15_Change_Summary_v1_to_v2.pdf` (“2 lenses → 4 lenses”), corroborated by the Product Roadmap deck and V1 Feature Board. Older docs/brief may still say “two lenses.”

## Positioning rules
- Lead with the **outcome**, then show the surface, then explain the idea.
- “A packaged product, **not a chatbot**.”
- Sell **memory + trust together**.
- Concrete examples: “What do I owe Jane?”, “Prepare renewal summary”, “Show me at‑risk commitments”.
- ⚠ The `UI_Work_Surface` mockup is the **V3 vision** — use it only on the **Vision** page / as aspirational hero accent. Never present it as the V1 product. V1 = four lenses over existing apps.
- No SOC 2 / HIPAA / compliance badges until real. Legal pages need counsel.

## Approved copy (reuse, swap in *Sable*)
- Problem: “A person is coherent. Their digital life is not.”
- How it works: “One foundation. Resolved once. Used everywhere.”
- Trust tagline / footer: “Your data. Your context. Your decisions.”
- Privacy hero: “Your data was protected before a single line was written.”
- Hero candidates: “An AI that actually knows you.” / “Stop re‑explaining yourself to AI.”

## Design tokens (light, calm, premium — from the product UI)
```
--bg #F6F7F9  --surface #FFFFFF  --ink #1B1F2A  --ink-2 #454B57  --muted #6B7280
--border #E7E9EE  --primary #5B4EF0  --primary-700 #4A3ED6  --primary-50 #ECEAFE
--grad linear-gradient(135deg,#6A5CF6,#8B7CF8)
accents: blue #3B82F6 green #10B981 teal #14B8A6 amber #F59E0B violet #8B5CF6 rose #F43F5E
font: Inter (variable). Headings tight (-0.02em), large. Body 16–18px / ~1.6.
radius: cards 14px, buttons 10px, chips pill. Soft low shadows. 1px --border on cards.
```
Motion restrained; respect `prefers-reduced-motion`. Tone: plain‑spoken, confident, unhurried, reassuring on data.

## Stack & structure
Astro + Tailwind + MDX (alt: Next.js + Tailwind + shadcn/ui). **All copy lives in MDX/data, never hard‑coded in components.**
Components: Nav, Footer, Button, SectionShell, Card, FeatureBlock, LensCard, StepDiagram, PricingTable, FAQ, TrustPoints, CTASection, Logos.

## Routes
Phase 1: `/` `/how-it-works` `/lenses` `/privacy` `/home-server` `/pricing` `/vision` `/waitlist` `/legal/privacy-policy` `/legal/terms`
Phase 2 (reserve URLs): `/lenses/communications` `/lenses/reasoning` `/security` `/company` `/blog` `/docs` `/for-ai-assistants` `/llms.txt`

## Home section order (see brief §6)
Nav → Hero → Problem → How it works → Lenses → Works over your apps → Trust by design → Your data, your place (Cloud vs Home Server) → Credibility → Pricing → FAQ → Final CTA + footer.

## Assets
`Architecture Graphics/`: `UI_Work_Surface.jpeg` (V3 — Vision only), `Component_Map.png`, `PSL_OSL.png`, `PSL_Package.png`.
Mockups to create as HTML/CSS prototypes (V1‑honest): Communications lens, Reasoning lens, Navigator approval moment, onboarding, Foundation/audit view, Home‑Server, review digest, 3‑tier diagram.

## Quality bar
WCAG 2.1 AA · Lighthouse ≥ 95 · near‑zero JS · optimized images · per‑page title/meta/OG · sitemap.xml.
