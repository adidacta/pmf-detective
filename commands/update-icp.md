---
description: Update your ICP section
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Update ICP

Update the ICP (Ideal Customer Profile) section of your PMF context layer.

## Instructions

1. Check if `pmf/icp.md` exists
   - If exists: Read it and show summary, ask what to update
   - If not: Inform user and offer to create it

2. If file exists, show current state:

```
┌─────────────────────────────────────────────────────────────┐
│  CURRENT ICP                                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Summary from pmf/icp.md]                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

What would you like to update?
1. Who They Are
2. What They Experience
3. What They Want
4. How They Talk About It
5. Where To Find Them
6. Start over completely
```

3. Use AskUserQuestion for the selection

4. Update only the selected section(s)

5. Save the updated file to `pmf/icp.md`

## If No ICP Exists

```
No ICP defined yet.

Would you like to define your ICP now?
This will capture who your ideal customer is.
```

Then trigger the icp-builder skill.
