---
name: landing-generator
description: >
  Generate Next.js or React landing page from PMF context files.
  Use when user says "build landing page", "generate landing", "create website",
  "make a page", "landing page for my product", or wants to create a marketing page.
allowed-tools: Read, Write, Glob, Bash
---

# Landing Page Generator

Generate a complete, production-ready landing page based on the user's PMF context layer.

## Prerequisites

Requires the PMF context layer:
- `pmf/icp.md` - Who the customer is
- `pmf/value-prop.md` - Why they should care (Mirror + Magnet + Message)

If any are missing, inform the user:
```
To generate a landing page, I need your PMF context layer.

Missing:
[ ] pmf/icp.md
[✓] pmf/value-prop.md

Use /plan-pmf to build your context layer first.
```

Optional (enhances the page if present):
- `pmf/aha-moments.md` - Key benefits to highlight in the Benefits section

## Framework Options

Ask user:
```
Which framework would you like for your landing page?

1. **Next.js** (Recommended)
   - App Router structure
   - Easy deployment to Vercel
   - Best for full websites

2. **React + Vite**
   - Lightweight and fast
   - Quick local development
   - Good for simple pages

Reply with 1 or 2.
```

## Page Structure

Generate these sections using the PMF context:

### 1. Hero Section
- **Headline:** "The Message" from `pmf/value-prop.md`
- **Subheadline:** "The Mirror" — the 3-part descriptor that makes the ICP say "that's me"
- **CTA button:** "CTA" from `pmf/value-prop.md`
- Optional: Hero image placeholder

### 2. Problem Section
- From "The Mirror" Pain/Fear in `pmf/value-prop.md`
- Agitate the pain using language from `pmf/icp.md` "How They Talk About It"
- Show you understand their frustration

### 3. Solution Section
- From "The Magnet" in `pmf/value-prop.md` — the desired future
- How your product gets them there
- Bridge from current pain to the utopic outcome

### 4. Benefits Section
- If `pmf/aha-moments.md` exists: use Must-Deliver Benefits
- If not: derive 3 key benefits from the Mirror (what pain goes away) and Magnet (what they gain)
- Icon placeholders

### 5. Social Proof (Placeholder)
- If `pmf/aha-moments.md` exists: use Proof Points
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

### Next.js Version
- App Router (`app/` directory)
- Tailwind CSS
- TypeScript
- Shadcn/UI components (optional)

### React + Vite Version
- Single page component
- Tailwind CSS
- JavaScript or TypeScript
- Minimal dependencies

## Output Structure

### For Next.js
```
landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Benefits.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
└── README.md
```

### For React + Vite
```
landing/
├── src/
│   ├── App.jsx
│   ├── main.jsx
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
   - `pmf/aha-moments.md` (optional — enhances Benefits & Social Proof)

2. Extract content for each section:
   - Hero: The Message (headline), The Mirror (subheadline), CTA (button)
   - Problem: Mirror Pain/Fear, ICP language
   - Solution: The Magnet (desired future)
   - Benefits: Aha moments (if available) or derived from Mirror + Magnet
   - Social Proof: Proof Points (if available) or placeholders
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
- Value Prop (Mirror + Magnet) from pmf/value-prop.md

Feel free to customize the design and copy!

Created by Adi Shmorak, The P/MF Detective
```

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
