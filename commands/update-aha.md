---
description: Update your Aha Moments section
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Update Aha Moments

Update the Aha Moments section of your PMF context layer.

## Instructions

1. Check if `pmf/aha-moments.md` exists
   - If exists: Read it and show summary, ask what to update
   - If not: Inform user and offer to create it

2. If file exists, show current state:

```
┌─────────────────────────────────────────────────────────────┐
│  CURRENT AHA MOMENTS                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Core Aha: [Key realization]                                │
│                                                             │
│  Must-Deliver Benefits:                                     │
│  1. [Benefit 1]                                             │
│  2. [Benefit 2]                                             │
│  3. [Benefit 3]                                             │
│                                                             │
│  When Users Get It: [...]                                   │
│                                                             │
│  Proof Points: [N items]                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

What would you like to update?
1. Core Aha Moment
2. Must-Deliver Benefits
3. When Users "Get It"
4. Proof Points
5. Start over completely
```

3. Use AskUserQuestion for the selection

4. Update only the selected section(s)

5. Save the updated file to `pmf/aha-moments.md`

## If No Aha Moments Exists

Check prerequisites:
- If ICP missing: "Define your ICP first"
- If Value Prop missing: "Define your value proposition first"
- If both exist: Offer to create aha moments using aha-moments-builder skill
