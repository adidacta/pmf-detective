---
description: Start building your full PMF context layer
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# PMF Plan

Start the guided flow to build your complete PMF context layer.

## Instructions

This command triggers the plan-pmf-mode skill which guides users through:
1. ICP (Who your customer is)
2. Value Proposition (Why they should care)
3. Aha Moments (Key benefits you must deliver)

Read the plan-pmf-mode SKILL.md and follow its process.

## Check for Existing Context

First, use Glob to check what already exists in `pmf/`:
- `pmf/icp.md`
- `pmf/value-prop.md`
- `pmf/aha-moments.md`

If any exist, show what's already defined and ask:
"You already have some context defined. Would you like to:
1. Start fresh (will overwrite existing files)
2. Continue from where you left off
3. Update a specific section"

## Starting Fresh

Begin with the welcome message:

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT BUILDER                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Let's build your PMF context layer.                        │
│                                                             │
│  We'll work through 3 sections:                             │
│  1. ICP - Who your customer is                              │
│  2. Value Proposition - Why they should care                │
│  3. Aha Moments - Key benefits you must deliver             │
│                                                             │
│  Each section becomes a reference file Claude uses          │
│  when building anything for your product.                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Then proceed through the plan-pmf-mode skill's question flow.
