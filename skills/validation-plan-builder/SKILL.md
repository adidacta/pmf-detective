---
name: validation-plan-builder
description: >
  Create a validation plan to test your PMF assumptions.
  Use when user says "validate", "test my assumptions", "validation plan",
  "how do I know if this works", or after completing the PMF context layer.
allowed-tools: Read, Write, Glob, AskUserQuestion
---

# Validation Plan Builder

You help product builders create a plan to validate their PMF assumptions.

## Context

The PMF context layer (ICP, Value Prop, Aha Moments) is based on **assumptions**. This skill helps users define how they'll test those assumptions with real signals from the market.

## Prerequisites

Check if the context layer exists:
- `pmf/icp.md`
- `pmf/value-prop.md`
- `pmf/aha-moments.md`

If missing, inform user: "Let's build your PMF context first, then create a validation plan."

## The Questions

### Question 1: What's the core assumption to test?

Read the context files and summarize the key assumption:

"Based on your PMF context, the core assumption to test is:

**[ICP] will [take action] because [value prop]**

Does this capture what you want to validate?"

### Question 2: What validation metric makes sense?

"How do you want to measure validation? What signal would tell you this is working?"

Options based on their stage:
- **Pre-orders** - People pay before the product exists (strongest signal)
- **Beta signups** - People give email/info to get early access
- **Conversations** - People agree to talk about the problem
- **Waitlist signups** - People express interest via landing page
- **Letter of Intent (LOI)** - Companies express formal interest

### Question 3: What's your target number?

"How many [metric] would be a strong signal?"

Provide guidance:
- Pre-orders: 10+ is strong for most products
- Beta signups: 30-50 is a good signal
- Conversations: 20-30 quality conversations
- Waitlist: 100+ for consumer, 30+ for B2B
- LOI: 3-5 for enterprise

### Question 4: What's your validation approach?

"How will you reach your ICP to get this signal?"

Options:
- **Landing page** - Drive traffic to capture signups/pre-orders
- **Direct outreach** - Cold email/LinkedIn to ICP
- **Community posting** - Share in relevant communities (Reddit, Discord, etc.)
- **Warm network** - Leverage existing connections
- **Paid ads** - Run targeted ads to ICP

### Question 5: Timeline

"How long will you run this validation experiment?"

Options:
- 1 week (fast learning, smaller numbers)
- 2 weeks (recommended for most)
- 4 weeks (larger sample, more patience needed)

## Output

Save to `pmf/validation-plan.md`:

```markdown
# Validation Plan

## What We're Testing
[ICP] will [action] because [value prop]

This is an assumption. This plan will help us validate it with real market signals.

## Success Metric
**Goal:** [N] [metric] in [timeframe]

| Result | Meaning | Next Step |
|--------|---------|-----------|
| **GO:** [threshold]+ | Strong signal | Scale up acquisition |
| **ITERATE:** [range] | Partial signal | Adjust approach and retry |
| **PIVOT:** <[threshold] | Weak signal | Revisit ICP or value prop |

## Validation Approach
**Method:** [approach]
**Channels:** [specific channels from ICP]

## Timeline
[X] weeks starting [date or "when ready"]

## What You'll Learn
If successful: [assumption] is validated - invest more
If not: Learn why and adjust [ICP/value prop/approach]
```

## Progress Display

```
┌─────────────────────────────────────────────────────────────┐
│  VALIDATION PLAN SET                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Goal: [N] [metric] in [timeframe]                          │
│  Approach: [method]                                         │
│                                                             │
│  GO: [X]+  |  ITERATE: [Y-Z]  |  PIVOT: <[Y]                │
│                                                             │
│  Saved to: pmf/validation-plan.md                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
