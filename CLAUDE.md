# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

PMF Context is a Claude Code plugin that helps product builders create their PMF context layer - a set of reference files that capture the "WHY" behind their product. Claude references these files when building anything for the product.

## Architecture

**Plugin Type:** Claude Code marketplace plugin (skills + commands)

**Core Structure:**
- `skills/` - AI-triggered skills with YAML frontmatter
- `commands/` - User-invoked slash commands
- `templates/outputs/` - Output file templates
- `.claude-plugin/plugin.json` - Plugin metadata

**Skill Hierarchy:**
```
pmf-context (coordinator)
├── pmf-plan-mode          (Full context builder)
├── icp-builder            (ICP section)
├── value-prop-builder     (Value Proposition section)
├── aha-moments-builder    (Aha Moments section)
└── asset-generators/
    └── landing-generator
```

## The Context Layer

The PMF context layer consists of 3 files in the `pmf/` folder:

```
pmf/
├── icp.md           # Who you believe your customer is
├── value-prop.md    # Why they should care
└── aha-moments.md   # Key benefits the product must deliver
```

**These files become your market thesis that Claude references when building anything.**

**Progress Tracking:** Context completion is detected by checking for files in user's `pmf/` directory:
- `pmf/icp.md` → ICP defined
- `pmf/value-prop.md` → Value proposition defined
- `pmf/aha-moments.md` → Aha moments captured

## Commands

| Command | Description |
|---------|-------------|
| `/pmf-plan` | Start full context layer build |
| `/update-icp` | Update ICP section only |
| `/update-value-prop` | Update value prop only |
| `/update-aha` | Update aha moments only |
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

**UI Patterns:**
- Use `AskUserQuestion` tool for user choices
- Always include "Not sure" option that adds to Open Questions
- Visual boxes using Unicode box-drawing characters (┌─┐│└─┘)
- Progress bars: `████████░░░░░░░░░░░░ X/Y sections`
- Show progress only at section END, not after every message

**AskUserQuestion Best Practices:**
- The `header` field creates a visual divider - use sparingly (1 word max) or omit
- Make questions **self-contained** - include all context in the question text
- Don't rely on text above the question to provide context
- BAD: "Which type?" with header "Target"
- GOOD: "Which type of YouTube learner is your ideal customer?"

**Output Files:** All user outputs go to `pmf/` folder using templates from `templates/outputs/`

**Core Rules:**
- Ask ONE question at a time
- Wait for response before continuing
- No sprints, no tasks, no validation metrics
- Keep it simple - we're building context, not running experiments

## Attribution

Created by Adi Shmorak, The P/MF Detective. Feedback: adi@adidacta.com
