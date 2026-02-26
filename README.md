# Plan PMF

A Claude Code plugin that walks you from idea to validation. Define your ICP, craft your value proposition, scope your MVP, then validate — with landing pages, Mom Test conversations, or the BMAD Method.

Created by **Adi Shmorak, The P/MF Detective**

## Why This Exists

Most builders skip straight to code. Plan PMF forces you to answer the hard questions first — who is this for, why would they care, and what's the smallest thing you can build to prove it? The output is a set of `pmf/` files that Claude references when building anything for your product.

## Installation

```bash
/install github:adidacta/pmf-detective
```

## How It Works

Plan PMF guides you through 4 sections, then routes you to execute:

```
1. ICP                → pmf/icp.md           (assumption)
2. Value Proposition  → pmf/value-prop.md     (assumption)
3. MVP PRD            → pmf/mvp.md            (assumption)
4. Validation Plan    → pmf/validation-plan.md (decides HOW to test)
   │
   ├─→ Landing Page     (signups / pre-orders)
   ├─→ Outreach         (Mom Test conversations)
   └─→ Build & Test     (BMAD Method)
```

The first 3 sections are assumptions. The validation plan decides how to test them, then routes you to the right execution path.

## Quick Start

Tell Claude what you need:

- "Help me define my ICP"
- "Create a value proposition for my product"
- "Define my MVP"
- "Build me a landing page"

Or use slash commands:

| Command | What it does |
|---------|-------------|
| `/plan-pmf` | Build your full context layer (guided flow) |
| `/pmf-status` | Check context completion status |
| `/update-icp` | Refine your ICP |
| `/update-value-prop` | Refine your value proposition |
| `/update-mvp` | Refine your MVP scope |
| `/generate-assets landing` | Generate a landing page from your context |

## The 4 Sections

### 1. ICP (Ideal Customer Profile)

Define who your customer is. Generates 3 hypotheses, researches each in parallel, and helps you pick the strongest:

- Who they are (role + filters)
- Their pain (drilled to emotional bedrock with 5 Whys)
- How they talk about it (self-recognition language for copy)
- Where to find them (channels, communities, influencers, newsletters)

**Output:** `pmf/icp.md`

### 2. Value Proposition (Callout + Magnet)

Craft messaging that makes your ICP stop and take action:

- **Callout** — Identity + context + pain that makes them say "that's me"
- **Magnet** — The desired future that pulls them toward action
- 4 angles generated (pain-led, aspiration-led, action-led, identity-led) — you pick one

**Output:** `pmf/value-prop.md`

### 3. MVP PRD

Scope what to build by working backwards from the core aha moment:

- **Aha moment** — The single experience that makes users say "THIS is why I need this"
- **Path to Aha** — Reverse-engineered steps from start to aha
- **Features & Requirements** — What the product must deliver at each step
- **Out of scope** — What's NOT in v1

The output is a high-level PRD that any AI coding agent can use as project context.

**Output:** `pmf/mvp.md`

### 4. Validation Plan

Decide how to test your assumptions before going all-in:

- Summarize your 3 core assumptions (ICP, value prop, aha moment)
- Choose a validation method
- Define GO / ITERATE / PIVOT thresholds
- Get routed to the right execution skill

**Output:** `pmf/validation-plan.md`

## Execution Paths

After your validation plan, Plan PMF routes you to one of three paths:

### Landing Page
Generates a React + Vite landing page from your context files. Uses your Callout, Magnet, Path to Aha, CTA, and ICP language. Includes SEO and social tags.

```
/generate-assets landing
```

### Outreach + Mom Test
Creates an outreach plan with Mom Test interview questions. Grounded in your ICP's channels, language, and pain points.

### Build & Test (BMAD Method)
Bridges your PMF context into the [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) for AI-driven development. Your `pmf/` files become the product definition — BMAD handles architecture, sprint planning, and implementation.

## The Context Layer

All outputs live in a `pmf/` folder in your project:

```
pmf/
├── icp.md              # Who your customer is
├── value-prop.md       # Why they should care (Callout + Magnet)
├── mvp.md              # MVP scope — aha moment, features & requirements
├── validation-plan.md  # How you'll test + success thresholds
└── outreach-plan.md    # (if conversations) Mom Test questions + channels
```

Claude references these files when building anything for your product — landing pages, copy, features, architecture, documentation.

**Should you commit `pmf/`?** Yes. These files are your product context. Committing them means every team member and every Claude session shares the same foundation. Update them as you learn from validation.

## Design Principles

- **One question at a time** — Never overwhelming, always focused
- **"Not sure" is always an option** — Uncertainty becomes an open question to research later
- **Parallel research** — ICP hypotheses are researched simultaneously
- **Opinionated frameworks** — Callout + Magnet, 5 Whys, Mom Test, Path to Aha
- **AI-native output** — Every file is structured for Claude to reference when building

## Feedback

Questions, suggestions, or feedback: **adi@adidacta.com**

## Acknowledgments

- Callout + Magnet value proposition framework
- The Mom Test by Rob Fitzpatrick (interview methodology)
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) by BMad Code (build & test path)

## License

MIT — See [LICENSE](LICENSE) for details.
