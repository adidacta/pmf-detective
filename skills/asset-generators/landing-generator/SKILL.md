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
- `pmf/value-prop.md` - Why they should care
- `pmf/aha-moments.md` - Key benefits to highlight

If any are missing, inform the user:
```
To generate a landing page, I need your PMF context layer.

Missing:
[ ] pmf/icp.md
[✓] pmf/value-prop.md
[ ] pmf/aha-moments.md

Use /pmf-plan to build your context layer first.
```

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
- **Headline:** Core Message from `pmf/value-prop.md`
- **Subheadline:** Problem statement from StoryBrand
- **CTA button:** Based on Plan from StoryBrand
- Optional: Hero image placeholder

### 2. Problem Section
- From StoryBrand "Problem" in `pmf/value-prop.md`
- Agitate the pain using language from `pmf/icp.md`
- Show you understand their frustration

### 3. Solution Section
- From StoryBrand "Guide" and "Plan" components
- How you solve it
- Your unique approach

### 4. Benefits Section
- From `pmf/aha-moments.md` Must-Deliver Benefits
- 3 key benefits with explanations
- Icon placeholders

### 5. Social Proof (Placeholder)
- From `pmf/aha-moments.md` Proof Points
- Testimonial placeholders
- Trust indicators

### 6. CTA Section
- Repeat Core Message from `pmf/value-prop.md`
- Clear action button
- Reference Success from StoryBrand

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

1. Read all PMF context files:
   - `pmf/icp.md`
   - `pmf/value-prop.md`
   - `pmf/aha-moments.md`

2. Extract content for each section:
   - Hero: Core Message, Problem
   - Problem: Pain points, current frustrations
   - Solution: Guide, Plan
   - Benefits: Must-Deliver Benefits
   - Social Proof: Proof Points
   - CTA: Success, call to action

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
- Value Prop from pmf/value-prop.md
- Benefits from pmf/aha-moments.md

Feel free to customize the design and copy!

Created by Adi Shmorak, The P/MF Detective
```

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
