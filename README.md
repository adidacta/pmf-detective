# PMF Context

A Claude Code plugin that helps you build your **PMF context layer** - reference files that capture the "WHY" behind your product.

Created by **Adi Shmorak, The P/MF Detective**

## Installation

```bash
/plugin install github:adidacta/pmf-detective
```

## What is PMF Context?

PMF Context helps you define your market thesis through 3 structured sections:

1. **ICP (Ideal Customer Profile)** - Who your customer is
2. **Value Proposition** - Why they should care (using StoryBrand)
3. **Aha Moments** - Key benefits your product must deliver

**The context layer = your market thesis that Claude references when building anything.**

## The Context Layer

All outputs are saved to a `pmf/` folder in your project:

```
pmf/
├── icp.md           # Who you believe your customer is
├── value-prop.md    # Why they should care
└── aha-moments.md   # Key benefits the product must deliver
```

Claude will reference these files when:
- Building landing pages
- Writing copy
- Designing features
- Creating documentation
- Any other product work

## Quick Start

Just tell Claude what you want to do:

- "Help me define my PMF context"
- "I need to define my ICP"
- "Create a value proposition for my product"
- "Build me a landing page"

Or use slash commands:

- `/pmf-plan` - Build your full context layer
- `/pmf-status` - Check your context status
- `/update-icp` - Update your ICP
- `/update-value-prop` - Update your value proposition
- `/update-aha` - Update your aha moments
- `/generate-assets landing` - Generate a landing page

## The 3 Sections

### 1. ICP (Ideal Customer Profile)

Define who your customer is:
- Who they are
- What they experience (pain, current solutions)
- What they want
- How they talk about it
- Where to find them

**Output:** `pmf/icp.md`

### 2. Value Proposition

Define why they should care using StoryBrand:
- Core message (headline)
- 7-part StoryBrand narrative
- Alternative angles

**Output:** `pmf/value-prop.md`

### 3. Aha Moments

Define the key benefits you must deliver:
- Core aha moment
- 3 must-deliver benefits
- When users "get it"
- Proof points

**Output:** `pmf/aha-moments.md`

## Asset Generation

After building your context layer, generate marketing assets:

- **Landing Pages** - Next.js or React+Vite projects

Use `/generate-assets landing` to create assets.

## Key Features

- **One question at a time** - Never overwhelming
- **Visual progress tracking** - Clear boxes show your progress
- **"Not sure" is always an option** - Uncertainties become open questions
- **Research support** - Uses Claude's web search when you need it
- **Update anytime** - Refine sections as you learn

## Feedback

For questions, suggestions, or feedback:
**adi@adidacta.com**

## Acknowledgments

**Frameworks Used:** StoryBrand 7-part narrative framework by Donald Miller

**Built With:** Claude Code plugin system

## License

MIT License - See [LICENSE](LICENSE) for details.
