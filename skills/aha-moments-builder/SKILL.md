---
name: aha-moments-builder
description: >
  Build the MVP PRD from your PMF context layer.
  Use when user says "aha moment", "key benefits", "must-deliver",
  "MVP", "PRD", "what to build", "scope", "features",
  or wants to define what the product must deliver.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Aha Moments Builder (MVP PRD)

You help product builders define their MVP scope by working backwards from the core aha moment — the single experience that makes users say "THIS is why I need this."

## The Approach

The aha moment is the north star. Everything in the MVP exists to deliver that moment. To find the minimum path, work backwards like Sherlock Holmes: start from the aha moment and ask "what had to happen right before this?" — keep tracing back until you reach the user's starting point. That chain of steps IS the MVP. Anything not on that chain is out of scope for v1.

## Prerequisites

Check if `pmf/icp.md` and `pmf/value-prop.md` exist. Both are required.

If any are missing, inform the user:
```
To define your MVP scope, I need your PMF context layer.

Missing:
[ ] pmf/icp.md
[✓] pmf/value-prop.md

Use /plan-pmf to build your context layer first.
```

## Core Rules

- Ask ONE question at a time
- Wait for response before continuing
- Ground all options in ICP and value prop data — don't ask from scratch
- Include "Not sure" option that adds to Open Questions
- Always work backwards from the aha moment — never forward from features

## The Flow

### Phase A: Context Review (automated — no questions)

Read `pmf/icp.md` and `pmf/value-prop.md`. Extract:
- ICP identity, pain, desired outcome
- Mirror (identity + context + pain/fear)
- Magnet (desired future)
- CTA (validation goal)

Display summary:

```
┌─────────────────────────────────────────────────────────────┐
│  BUILDING MVP SCOPE FOR:                                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ICP: [Hypothesis name]                                      │
│  Mirror: [3-part descriptor]                                 │
│  Magnet: [Desired future]                                    │
│  CTA: [Validation goal]                                      │
│                                                              │
│  The MVP has one job: deliver the moment that makes          │
│  users say "THIS is why I need this."                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Phase B: Explore Aha Moments (2-3 questions)

The aha moment is the single experience where value clicks. It's not a feature — it's the moment the user's perspective shifts.

**Examples:**
- Slack: First time a teammate replies instantly instead of via email
- Dropbox: First time you access a file from another device
- Notion: First time you connect a note to a database and see it update everywhere
- Trip planner: First time you see a complete dream vacation plan tailored to you

**Q1:** Generate 2-3 aha moment options based on the ICP's pain and the Magnet. Each should be a specific, concrete user experience — not a feature description.

Use AskUserQuestion: "What's the moment your [ICP identity] first thinks 'THIS is why I need this'?"

Options should be grounded in the ICP's pain (from icp.md) and desired future (Magnet from value-prop.md).

**Q2: Where's the most value?** After the user picks or refines, briefly discuss why this aha moment holds the most value for their ICP. Confirm or adjust. The goal is to land on ONE clear aha moment before moving on.

### Phase C: Reverse-Engineer the MVP (2-3 questions)

Now work backwards from the aha moment — like Sherlock Holmes deducing what must be true.

**The logic:** If the aha moment is the destination, what had to happen right before it? And before that? Keep tracing back to the user's starting point. That chain of steps is the minimum the product must deliver.

**Example — Trip planner:**
```
Aha moment: "A complete dream vacation plan tailored to me"
  ← Needs: assembled plan with flights, hotels, activities
  ← Needs: preferences matched to options
  ← Needs: budget + dates + participants defined
  ← Needs: destination selected
  ← Start: user opens the app
```
Each backward step reveals a real requirement. Nothing extra.

**Q3:** Present the reverse-engineered chain as a proposed path from start → aha moment. Show it as a numbered sequence.

Use AskUserQuestion: "Here's what your product needs to deliver [aha moment] for [ICP identity]. Does this path look right?"

Options: "Looks right" / "Something's missing" / "Something doesn't belong" / "Not sure"

**Q4 (conditional):** If user wants to adjust, ask what to add/remove/change. Otherwise, proceed.

The final chain becomes the MVP scope — each step is a concrete, buildable requirement.

### Phase D: Out of Scope (1 question)

Equally important as what's in scope: what's NOT in v1.

Based on the ICP's broader wants (from icp.md) and the Magnet, generate 3-4 things that might seem important but should wait for v2+.

**Q5:** Use AskUserQuestion: "Which of these should be explicitly OUT of scope for v1?" (multiSelect: true)

Frame it as: "Saying 'no' to these now means you ship faster and learn sooner."

### Phase E: Success Criteria (1 question)

How will you know the aha moment has landed? This should be an observable user behavior, not a metric.

**Q6:** Generate 2-3 behavioral signals based on the aha moment.

Use AskUserQuestion: "How will you know a user has experienced the aha moment? What will they do?"

Examples of good success criteria:
- "They take their first note while watching a video"
- "They come back the next day to use it again"
- "They share it with a colleague"

## Output

Save to `pmf/aha-moments.md` using the template from `templates/outputs/aha-moments.md`.

## Progress Display

Show only at the END:

```
┌─────────────────────────────────────────────────────────────┐
│  MVP SCOPE DEFINED                                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Aha Moment: [The key experience]                            │
│                                                              │
│  Path to Aha:                                                │
│  1. [Start] → 2. [Step] → ... → N. [Aha moment]             │
│                                                              │
│  Out of Scope: [N] items deferred to v2+                     │
│  Success: [Behavioral signal]                                │
│                                                              │
│  Saved to: pmf/aha-moments.md                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Updating Existing MVP PRD

If `pmf/aha-moments.md` already exists:
1. Read the current file
2. Show summary to user
3. Ask what they want to update
4. Update only the relevant sections
5. Save the updated file

## Research Support

When user says "not sure" or wants research:
- Use WebSearch to find how similar products describe their core value moment
- Look for onboarding patterns in similar tools
- Present findings and let user decide what fits

## Why This Matters

The MVP PRD file helps Claude:
- Scope features to what actually matters
- Prioritize work around the aha moment
- Know what's explicitly out of scope
- Structure onboarding to lead to the aha moment
- Use the landing page to validate whether the aha moment resonates

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
