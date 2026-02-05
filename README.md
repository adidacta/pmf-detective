# PMF Detective

A Claude Code plugin that guides product builders through **PMF discovery** using the **Startup Sprints System** - a structured 5-sprint workflow.

Created by **Adi Shmorak, The P/MF Detective**

## Installation

```bash
/plugin install github:adidacta/pmf-detective
```

## What is PMF Detective?

PMF Detective helps you define your project's PMF context through 5 structured sprints:

1. **ICP Investigation** - Define your Ideal Customer Profile
2. **Value Prop Builder** - Create compelling value propositions using StoryBrand
3. **Mini-MVP Builder** - Plan a testable mini-MVP based on your skills
4. **Irresistible Offer** - Craft offers and choose your outreach strategy
5. **Launch Experiment** - Execute, track, and iterate on your PMF experiment

Each sprint builds on the previous one, creating a complete PMF journey from idea to market feedback.

## Quick Start

Just tell Claude what you want to do:

- "Help me define my PMF context"
- "I need to define my ICP"
- "Create a value proposition for my product"
- "What mini-MVP should I build?"
- "Help me create an irresistible offer"
- "Launch my PMF experiment"

Or use slash commands:

- `/pmf-status` - Check your sprint progress
- `/start-sprint icp` - Start a specific sprint
- `/generate-assets landing` - Generate campaign assets

## The 5 Sprints

### Sprint 1: ICP Investigation
Define your Ideal Customer Profile through a structured 5-phase process:
- Context gathering
- Starting point detection
- ICP generation (top-down or bottom-up)
- Comparison matrix
- Deep research exploration
- Final selection

**Output:** `pmf/icp-profile.md`

### Sprint 2: Value Prop Builder
Create compelling value propositions using the StoryBrand framework:
- 7-part brand narrative
- 4 value proposition variations
- Research exploration
- Final selection

**Outputs:** `pmf/brand-narrative.md`, `pmf/value-proposition.md`

### Sprint 3: Mini-MVP Builder
Plan a testable mini-MVP to explore your assumptions:
- Mini-MVP selection (Claude can help build most options)
- Deliverables breakdown
- Task list for execution

**Note:** If you already have a product, this sprint focuses on landing page and positioning instead.

**Output:** `pmf/mini-mvp-plan.md`

### Sprint 4: Irresistible Offer
Craft your offer and choose your outreach strategy:
- Cold Outreach (LinkedIn, email)
- Organic Content (posts, videos)
- Paid Ads (Facebook, Instagram, LinkedIn)

**Output:** `pmf/offer/strategy.md` + approach-specific materials

### Sprint 5: Launch Experiment
Execute and track your PMF experiment:
- Phase-based execution plan (Setup → Execute → Track → Analyze)
- Metrics tracking by approach
- Results analysis
- Scale / Iterate / Pivot guidance

**Output:** `pmf/experiment/plan.md`, `pmf/experiment/results.md`

## Output Files

All sprint outputs are saved to a `pmf/` folder in your project:

```
pmf/
├── pmf-plan.md
├── icp-profile.md
├── brand-narrative.md
├── value-proposition.md
├── mini-mvp-plan.md
├── offer/
│   ├── strategy.md
│   ├── cold-outreach.md
│   ├── organic-content.md
│   └── paid-ads.md
└── experiment/
    ├── plan.md
    ├── metrics.md
    └── results.md
```

## Asset Generation

After completing the sprints, you can generate:

- **Landing Pages** - Next.js or React+Vite projects
- **Email Sequences** - Campaign email templates
- **Campaign Assets** - Ad copy, targeting, visual briefs

Use `/generate-assets [type]` to create assets.

## Key Features

- **One question at a time** - Never overwhelming
- **Visual progress tracking** - Clear boxes show your progress
- **Task integration** - Claude Tasks track sprint progress
- **"Not sure" is always an option** - Uncertainties get researched, not guessed
- **Deep research integration** - Uses Claude's web search for exploration
- **Skills-based recommendations** - Mini-MVPs match your abilities
- **AskUserQuestion interface** - Clean selection UI for choices

## Feedback

For questions, suggestions, or feedback:
**adi@adidacta.com**

## Acknowledgments

**Methodology:** Startup Sprints System by Adi Shmorak

**Frameworks Used:** StoryBrand 7-part narrative framework by Donald Miller

**Built With:** Claude Code plugin system, Claude's WebSearch for market research

## License

MIT License - See [LICENSE](LICENSE) for details.
