# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## What This Is

**Plan PMF** is a Claude Code plugin that helps product builders create their PMF context layer — reference files that capture the "WHY" behind their product. Claude references these files when building anything for the product.

**Plugin name:** `plan-pmf` (in `plugin.json`)
**Marketplace name:** `pmf-detective` (in `marketplace.json`)

## Architecture

**Plugin Type:** Claude Code marketplace plugin (skills + commands)

**Core Structure:**
- `skills/` — AI-triggered skills with YAML frontmatter
- `commands/` — User-invoked slash commands
- `templates/outputs/` — Output file templates
- `.claude-plugin/plugin.json` — Plugin metadata
- `.claude-plugin/marketplace.json` — Marketplace listing

**Skill Hierarchy:**
```
pmf-context (coordinator)
├── plan-pmf-mode             (Full context builder — orchestrates the flow)
│
│   Context Layer (assumptions):
├── icp-builder               (ICP section)
├── value-prop-builder        (Value Proposition — Callout + Magnet)
├── mvp-builder               (MVP scope — aha moment → steps → features → requirements)
│
│   Validation:
├── validation-plan-builder   (Choose method + success criteria → routes to execution)
│
│   Execution (based on validation method):
├── asset-generators/
│   └── landing-generator     (Landing page — if validating with signups)
├── outreach-builder          (Outreach plan + Mom Test — if validating with conversations)
└── build-test-guide          (BMAD Method setup — if validating by building)
```

## The Flow

```
1. ICP                → pmf/icp.md           (assumption)
2. Value Proposition  → pmf/value-prop.md     (assumption)
3. MVP PRD            → pmf/mvp.md            (assumption)
4. Validation Plan    → pmf/validation-plan.md (decides HOW to test)
   │
   ├─→ Landing Page     → landing/              (signups/pre-orders)
   ├─→ Outreach         → pmf/outreach-plan.md  (Mom Test conversations)
   └─→ Build & Test     → BMAD Method setup      (build the MVP)
```

The first 3 files are assumptions. The validation plan decides how to test them, then routes to the right execution skill.

## The Context Layer

```
pmf/
├── icp.md              # Who you believe your customer is (assumption)
├── value-prop.md       # Why they should care (assumption)
├── mvp.md              # MVP scope — aha moment, steps, features & requirements (assumption)
├── validation-plan.md  # How you'll test these assumptions + chosen method
└── outreach-plan.md    # (if conversations) Mom Test questions + outreach approach
```

**Progress Tracking:** Context completion is detected by checking for files in user's `pmf/` directory:
- `pmf/icp.md` → ICP defined
- `pmf/value-prop.md` → Value proposition defined
- `pmf/mvp.md` → MVP scope defined
- `pmf/validation-plan.md` → Validation plan set + method chosen

## Commands

| Command | Description |
|---------|-------------|
| `/plan-pmf` | Build full context layer (guided flow) |
| `/update-icp` | Update ICP section |
| `/update-value-prop` | Update value proposition |
| `/update-mvp` | Update MVP scope |
| `/pmf-status` | Show context completion status |
| `/generate-assets landing` | Generate a landing page |

## Key Conventions

**SKILL.md Format:**
```yaml
---
name: skill-name
description: >
  Trigger conditions and purpose.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---
```

**Allowed Tools by Skill:**

| Skill | Tools |
|-------|-------|
| pmf-context (coordinator) | Read, Write, Glob, WebSearch, AskUserQuestion |
| plan-pmf-mode | Read, Write, Glob, WebSearch, AskUserQuestion, Task |
| icp-builder | Read, Write, Glob, WebSearch, AskUserQuestion, Task |
| value-prop-builder | Read, Write, Glob, WebSearch, AskUserQuestion |
| mvp-builder | Read, Write, Glob, WebSearch, AskUserQuestion |
| validation-plan-builder | Read, Write, Glob, WebSearch, AskUserQuestion |
| outreach-builder | Read, Write, Glob, WebSearch, AskUserQuestion |
| landing-generator | Read, Write, Glob, Bash |
| build-test-guide | Read, Glob, AskUserQuestion |

**UI Patterns:**
- Use `AskUserQuestion` tool for user choices
- Always include "Not sure" option that adds to Open Questions
- Visual boxes using Unicode box-drawing characters (┌─┐│└─┘) at 63-char inner width
- Progress bars: `████████░░░░░░░░░░░░ X/Y sections`
- Show progress only at section END, not after every message

**AskUserQuestion Best Practices:**
- The `header` field creates a visual divider — use sparingly (1 word max) or omit
- Make questions **self-contained** — include all context in the question text
- Don't rely on text above the question to provide context
- BAD: "Which type?" with header "Target"
- GOOD: "Which type of YouTube learner is your ideal customer?"

**Output Files:** All user outputs go to `pmf/` folder using templates from `templates/outputs/`

**Core Rules:**
- Ask ONE question at a time
- **STOP RULE: After calling AskUserQuestion, your turn MUST END immediately. Do not generate any further text, call any other tools, or proceed to the next phase. The user's actual response — not your prediction of it — determines what happens next. This rule is non-negotiable regardless of how much context you have.**
- Keep it simple — we're building context, not running experiments
- Every AskUserQuestion must include a **"Not sure (needs research)"** option. When selected: add to Open Questions in the output file with enough context to act on later. Never pressure to guess — uncertainty is valuable data.
- NEVER auto-answer questions. Even if you can predict what the user would say based on prior context, you MUST wait for their actual input. Predicting answers defeats the entire purpose of this tool.

## What's Gitignored

- `pmf/` — User-generated output (not part of the plugin distribution)
- `landing/` — Generated landing page output
- `*.png` — Screenshots and images

## Attribution

Created by Adi Shmorak, The P/MF Detective. Feedback: adi@adidacta.com
