---
description: Update your MVP PRD (Aha Moments & Scope)
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Update MVP PRD

Update the MVP PRD section of your PMF context layer.

## Instructions

1. Check if `pmf/aha-moments.md` exists
   - If exists: Read it and show summary, ask what to update
   - If not: Inform user and offer to create it

2. If file exists, show current state:

```
┌─────────────────────────────────────────────────────────────┐
│  CURRENT MVP SCOPE                                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Aha Moment: [The key experience]                            │
│                                                              │
│  Path to Aha:                                                │
│  1. [Start] → 2. [Step] → ... → N. [Aha moment]             │
│                                                              │
│  Out of Scope: [N] items                                     │
│  Success: [Behavioral signal]                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘

What would you like to update?
1. The Core Aha Moment (redefine the key experience)
2. Path to Aha (add, remove, or reorder steps)
3. Out of Scope (move items in or out of v1)
4. Success Criteria (redefine how you'll know it's working)
5. Start over completely
```

3. Use AskUserQuestion for the selection

4. Update only the selected section(s)

5. Save the updated file to `pmf/aha-moments.md`

## If No MVP PRD Exists

Check prerequisites:
- If ICP missing: "Define your ICP first"
- If Value Prop missing: "Define your value proposition first"
- If both exist: Offer to create MVP PRD using aha-moments-builder skill
