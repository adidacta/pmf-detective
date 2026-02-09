---
name: landing-generator
description: >
  Generate a React + Vite landing page from PMF context files.
  Use when user says "build landing page", "generate landing", "create website",
  "make a page", "landing page for my product", or wants to create a marketing page.
allowed-tools: Read, Write, Glob, Bash
---

# Landing Page Generator

Generate a complete, production-ready landing page based on the user's PMF context layer.

## The Goal: Conversion

This page has one job — get the visitor to click the CTA. Every section exists to move them closer to that action. The CTA from `pmf/value-prop.md` is the validation goal — conversions on this page are the signal that tests whether the value prop is working.

## Design Principles

**Visual design:**
- Clean, modern, and professional — not generic or templated
- Strong visual hierarchy — headline dominates, supporting text recedes
- Generous whitespace — let the copy breathe
- Consistent color system — one primary action color for all CTAs, muted tones elsewhere
- Smooth transitions and subtle hover states — the page should feel alive
- Mobile-first responsive — most ICP traffic will come from mobile/social

**Persuasive copy:**
- Write in the ICP's language — use phrases from "How They Talk About It" in `pmf/icp.md`
- Problem section should make the reader feel understood, not attacked (seen, not judged)
- Solution section paints the Magnet — make the desired future feel tangible and inevitable
- Each section should answer "why should I keep reading?" and end with a reason to scroll down
- CTA copy should be action-oriented and low-friction — match the CTA from value-prop.md exactly

**Conversion focus:**
- CTA appears at least twice — hero and bottom. Consider a sticky header CTA for long pages.
- Remove all friction — no navigation links that lead away from the page
- Every section builds toward the CTA — problem → solution → proof → act
- Social proof reduces perceived risk — even placeholder testimonials set the right structure
- The bottom CTA should feel like the natural conclusion, not an afterthought

## Prerequisites

Requires the PMF context layer:
- `pmf/icp.md` - Who the customer is
- `pmf/value-prop.md` - Why they should care (Callout + Magnet + Message)

If any are missing, inform the user:
```
To generate a landing page, I need your PMF context layer.

Missing:
[ ] pmf/icp.md
[✓] pmf/value-prop.md

Use /plan-pmf to build your context layer first.
```

Optional (enhances the page if present):
- `pmf/aha-moments.md` - MVP PRD with aha moment and path to highlight

## Page Structure

Generate these sections using the PMF context:

### 1. Hero Section
- **Headline:** "The Message" from `pmf/value-prop.md`
- **Subheadline:** "The Callout" — the 3-part descriptor that makes the ICP say "that's me"
- **CTA button:** "CTA" from `pmf/value-prop.md`
- Optional: Hero image placeholder

### 2. Problem Section
- From "The Callout" Pain/Fear in `pmf/value-prop.md`
- Agitate the pain using language from `pmf/icp.md` "How They Talk About It"
- Show you understand their frustration

### 3. Solution Section
- From "The Magnet" in `pmf/value-prop.md` — the desired future
- How your product gets them there
- Bridge from current pain to the utopic outcome

### 4. Benefits Section
- If `pmf/aha-moments.md` exists: use the Path to Aha steps as benefit headlines (what the user gets at each step, not how it works)
- If not: derive 3 key benefits from the Callout (what pain goes away) and Magnet (what they gain)
- Icon placeholders

### 5. Social Proof (Placeholder)
- If `pmf/aha-moments.md` exists: frame around the Core Aha Moment and Success Criteria
- Otherwise: generic testimonial placeholders
- Trust indicators

### 6. CTA Section
- Repeat "The Message" from `pmf/value-prop.md`
- Clear action button using "CTA" from `pmf/value-prop.md`
- Reinforce "The Magnet" — the desired future they'll reach

### 7. Footer
- Simple contact/links
- Attribution

## Tech Stack

- React + Vite (lightweight, fast to generate and run)
- Tailwind CSS
- TypeScript
- Minimal dependencies

## Output Structure

```
landing/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Generation Process

1. Read PMF context files:
   - `pmf/icp.md` (required)
   - `pmf/value-prop.md` (required)
   - `pmf/aha-moments.md` (optional — MVP PRD with aha moment and path)

2. Extract content for each section:
   - Hero: The Message (headline), The Callout (subheadline), CTA (button)
   - Problem: Callout Pain/Fear, ICP language
   - Solution: The Magnet (desired future)
   - Benefits: Path to Aha steps from MVP PRD (if available) or derived from Callout + Magnet
   - Social Proof: Core Aha Moment + Success Criteria (if available) or placeholders
   - CTA: The Message + CTA + The Magnet reinforcement

3. Generate component files with real content

4. Create package.json with dependencies

5. Create Tailwind config

6. Generate README with run instructions

## After Generation

```
Your landing page has been generated in the `landing/` folder.

**To run locally:**
cd landing
npm install
npm run dev

**To deploy:**
- Push to GitHub
- Connect to Vercel
- Auto-deploy on every push

The page uses your PMF context:
- ICP from pmf/icp.md
- Value Prop (Callout + Magnet) from pmf/value-prop.md

Feel free to customize the design and copy!

Created by Adi Shmorak, The P/MF Detective
```

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
