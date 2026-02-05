# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

PMF Detective is a Claude Code plugin that guides product builders through PMF discovery using a goal-driven 5-sprint workflow. It's a pure markdown-based plugin with no build system or tests.

## Architecture

**Plugin Type:** Claude Code marketplace plugin (skills + commands)

**Core Structure:**
- `skills/` - AI-triggered skills with YAML frontmatter
- `commands/` - User-invoked slash commands
- `templates/outputs/` - Output file templates
- `.claude-plugin/plugin.json` - Plugin metadata

**Skill Hierarchy:**
```
pmf-detective (coordinator)
├── pmf-plan               (Goal Setup - FIRST)
├── icp-investigation      (Sprint 1)
├── value-prop-builder     (Sprint 2)
├── mini-mvp-builder       (Sprint 3)
├── offer-architect        (Sprint 4)
├── launch-experiment      (Sprint 5)
└── asset-generators/
    ├── landing-generator
    └── campaign-assets
```

**Goal-First Flow:** Users MUST set a PMF goal before starting sprints. The goal determines:
- Mini-MVP type (landing page, outreach script, beta access, etc.)
- Offer approach (cold outreach, organic content, paid ads)
- Success thresholds (GO/ITERATE/PIVOT numbers)

**Task Integration:** After the PMF goal is set, tasks are created for all 5 sprints with dependencies. Each sprint updates task status (in_progress when starting, completed when done).

**Stage → Goal Mapping:**
| Stage | Example Goals |
|-------|---------------|
| Idea | 100 Waitlist Signups, 50 Interest Conversations |
| Prototype | 30 Beta Testers, 50 Interest Conversations |
| MVP (no users) | 10 Paying Customers, 30 Beta Testers |
| MVP (beta testers) | 10 Paying Customers, 30 New Segment Users |
| Product (paying) | 50 More Customers, 5 Enterprise LOIs |

**Phase Files Pattern:** Each sprint skill has a `phases/` subdirectory with separate markdown files for each phase. The SKILL.md reads phase files via `Read phases/phase-X-name.md` instructions.

**Progress Tracking:** Sprints detect completion by checking for files in user's `pmf/` directory:
- `pmf/pmf-plan.md` → Goal set (required before sprints)
- `pmf/icp-profile.md` → Sprint 1 complete
- `pmf/value-proposition.md` → Sprint 2 complete
- `pmf/mini-mvp-plan.md` → Sprint 3 complete
- `pmf/offer/strategy.md` → Sprint 4 complete
- `pmf/experiment/results.md` → Sprint 5 complete

**Automatic Success Criteria:** GO/ITERATE/PIVOT is determined automatically by comparing results to preset thresholds from pmf-plan.md. Do not subjectively assess success.

## Key Conventions

**SKILL.md Format:**
```yaml
---
name: skill-name
description: >
  Trigger conditions and purpose.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion, TaskUpdate, TaskList
---
```

**UI Patterns:**
- Use `AskUserQuestion` tool for user choices (with multiSelect, options arrays)
- Always include "Not sure" option that routes to research
- Visual boxes using Unicode box-drawing characters (┌─┐│└─┘)
- Progress bars: `████████░░░░░░░░░░░░ X/Y phases`
- Show progress only at phase END, not after every message

**Output Files:** All user outputs go to `pmf/` folder using templates from `templates/outputs/`

**No Time Estimates:** Task lists use phases (Setup → Execute → Track → Analyze), never day-by-day schedules.

## Attribution

Created by Adi Shmorak, The P/MF Detective. Feedback: adi@adidacta.com
