---
name: landing-generator
description: >
  Generate Next.js or React landing page from PMF documents.
  Use when user says "build landing page", "generate landing", "create website",
  "make a page", "landing page for my product", or wants to test with a real page.
allowed-tools: Read, Write, Glob, Bash
---

# Landing Page Generator

Generate a complete, production-ready landing page based on the user's PMF documents.

## Prerequisites

Requires at minimum:
- `pmf/value-proposition.md`
- `pmf/brand-narrative.md`

Optional (enhances the page):
- `pmf/icp-profile.md`
- `pmf/mini-product-plan.md`
- `pmf/offer/strategy.md`

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

Generate these sections:

### 1. Hero Section
- Headline: From value proposition
- Subheadline: Problem statement from narrative
- CTA button: Based on offer
- Optional: Hero image placeholder

### 2. Problem Section
- From StoryBrand "problem" component
- Agitate the pain
- Show you understand

### 3. Solution Section
- From StoryBrand "guide" and "plan" components
- How you solve it
- Your unique approach

### 4. Features/Benefits
- From mini-product deliverables
- 3-4 key benefits
- Icon placeholders

### 5. Social Proof (Placeholder)
- Testimonial placeholders
- "As seen in" section
- Trust indicators

### 6. CTA Section
- Repeat main value prop
- Clear action button
- Urgency element from offer

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
│   ├── Features.tsx
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

1. Read all available PMF documents
2. Extract content for each section
3. Generate component files with content
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

The page uses your:
- Value proposition as the headline
- Brand narrative for problem/solution
- [Other elements based on what existed]

Feel free to customize the design and copy!

Created by Adi Shmorak, The P/MF Detective
```
