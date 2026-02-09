# PMF Context

A Claude Code plugin that helps you build your **PMF context layer** — reference files that capture the "WHY" behind your product, then guides you to validate it.

Created by **Adi Shmorak, The P/MF Detective**

## Installation

```bash
/plugin install github:adidacta/pmf-detective
```

## What is PMF Context?

PMF Context walks you through defining your market thesis, then helps you test it:

```
1. ICP                → pmf/icp.md           (assumption)
2. Value Proposition  → pmf/value-prop.md     (assumption)
3. MVP PRD            → pmf/aha-moments.md    (assumption)
4. Validation Plan    → pmf/validation-plan.md (decides HOW to test)
   │
   ├─→ Landing Page     (signups / pre-orders)
   ├─→ Outreach         (Mom Test conversations)
   └─→ Build & Test     (BMAD Method)
```

**The first 3 sections are assumptions. The validation plan decides how to test them, then routes you to the right next step.**

## The Context Layer

All outputs are saved to a `pmf/` folder in your project:

```
pmf/
├── icp.md              # Who you believe your customer is
├── value-prop.md       # Why they should care
├── aha-moments.md      # MVP PRD — aha moment, features & requirements
├── validation-plan.md  # How you'll test + chosen method
└── outreach-plan.md    # (if conversations) Mom Test questions + channels
```

Claude references these files when building anything for your product — landing pages, copy, features, documentation.

## Quick Start

Just tell Claude what you want to do:

- "Help me define my PMF context"
- "I need to define my ICP"
- "Create a value proposition for my product"
- "Define my MVP"
- "Build me a landing page"

Or use slash commands:

- `/plan-pmf` — Build your full context layer
- `/pmf-status` — Check your context status
- `/update-icp` — Update your ICP
- `/update-value-prop` — Update your value proposition
- `/update-aha` — Update your MVP PRD
- `/generate-assets landing` — Generate a landing page

## The 4 Sections

### 1. ICP (Ideal Customer Profile)

Define who your customer is (assumption). Produces 3 hypotheses, researches each in parallel, helps you pick the strongest:
- Who they are (role + filters)
- Their pain (drilled to emotional bedrock with 5 Whys)
- How they talk about it (self-recognition language)
- Where to find them (passive channels + active communities, specific influencers, forums, newsletters)

**Output:** `pmf/icp.md`

### 2. Value Proposition

Define why they should care using the Callout + Magnet framework (assumption):
- **Callout** — Identity + context + pain that makes your ICP say "that's me"
- **Magnet** — The desired future that pulls them toward action
- 4 value prop angles (pain-led, aspiration-led, action-led, identity-led)

**Output:** `pmf/value-prop.md`

### 3. MVP PRD

Define what to build by working backwards from the core aha moment (assumption):
- **Aha moment** — The single experience that makes users say "THIS is why I need this"
- **Path to Aha** — Reverse-engineered steps from start to aha moment
- **Features & Requirements** — For each step, what the product must deliver
- **Out of scope** — What's NOT in v1

The output is a high-level PRD that an AI coding agent can use as project context.

**Output:** `pmf/aha-moments.md`

### 4. Validation Plan

Decide how to test your assumptions, then execute:
- Summarize your 3 core assumptions (ICP, value prop, aha moment)
- Choose validation method
- Define GO / ITERATE / PIVOT thresholds
- Route to the right execution skill

**Output:** `pmf/validation-plan.md`

## Execution (after validation plan)

Based on your chosen validation method:

### Landing Page
Generate a React + Vite landing page from your context files. Uses your Callout, Magnet, Path to Aha, and CTA.

Use `/generate-assets landing` to create it.

### Outreach + Mom Test
Create an outreach plan with Mom Test interview questions for conversation-based validation. Grounded in your ICP's channels and language.

### Build & Test
Set up the [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) with your PMF context files. BMAD handles architecture, sprint planning, and implementation — your `pmf/` files provide the product definition.

## Key Features

- **One question at a time** — Never overwhelming
- **Visual progress tracking** — Clear boxes show your progress
- **"Not sure" is always an option** — Uncertainties become open questions
- **Parallel research** — 3 ICP hypotheses researched simultaneously
- **Update anytime** — Refine sections as you learn

## Feedback

For questions, suggestions, or feedback:
**adi@adidacta.com**

## Acknowledgments

**Frameworks Used:**
- Callout + Magnet value proposition framework
- The Mom Test by Rob Fitzpatrick (interview methodology)
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) by BMad Code (build & test path)

**Built With:** Claude Code plugin system

## License

MIT License - See [LICENSE](LICENSE) for details.
