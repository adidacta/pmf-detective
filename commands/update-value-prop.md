---
description: Update your Value Proposition section
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Update Value Prop

Update the Value Proposition section of your PMF context layer.

## Instructions

1. Check if `pmf/value-prop.md` exists
   - If exists: Read it and show summary, ask what to update
   - If not: Inform user and offer to create it

2. If file exists, show current state:

```
┌─────────────────────────────────────────────────────────────┐
│  CURRENT VALUE PROPOSITION                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Core: [Primary headline]                                   │
│                                                             │
│  StoryBrand:                                                │
│  • Character: [...]                                         │
│  • Problem: [...]                                           │
│  • Guide: [...]                                             │
│  • Plan: [...]                                              │
│  • Success: [...]                                           │
│  • Failure: [...]                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

What would you like to update?
1. Core Message (headline)
2. StoryBrand Narrative
3. Alternative Angles
4. Start over completely
```

3. Use AskUserQuestion for the selection

4. Update only the selected section(s)

5. Save the updated file to `pmf/value-prop.md`

## If No Value Prop Exists

Check if ICP exists first (`pmf/icp.md`):
- If ICP missing: "Define your ICP first, then create your value proposition."
- If ICP exists: Offer to create value proposition using value-prop-builder skill
