# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

PMF Detective is a Claude Code plugin that guides founders through Product-Market Fit validation using a 5-sprint workflow. It's a pure markdown-based plugin with no build system or tests.

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
├── icp-investigation      (Sprint 1)
├── value-prop-builder     (Sprint 2)
├── mini-mvp-builder       (Sprint 3)
├── offer-architect        (Sprint 4)
├── launch-experiment      (Sprint 5)
└── asset-generators/
    ├── landing-generator
    └── campaign-assets
```

**Phase Files Pattern:** Each sprint skill has a `phases/` subdirectory with separate markdown files for each phase. The SKILL.md reads phase files via `Read phases/phase-X-name.md` instructions.

**Progress Tracking:** Sprints detect completion by checking for files in user's `pmf/` directory (e.g., `pmf/icp-profile.md` = Sprint 1 complete).

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
- Use `AskUserQuestion` tool for user choices (with multiSelect, options arrays)
- Always include "Not sure" option that routes to research
- Visual boxes using Unicode box-drawing characters (┌─┐│└─┘)
- Progress bars: `████████░░░░░░░░░░░░ X/Y phases`
- Show progress only at phase END, not after every message

**Output Files:** All user outputs go to `pmf/` folder using templates from `templates/outputs/`

**No Time Estimates:** Task lists use phases (Setup → Execute → Track → Analyze), never day-by-day schedules.

## Attribution

Created by Adi Shmorak, The P/MF Detective. Feedback: adi@adidacta.com
