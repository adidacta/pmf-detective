---
description: Show PMF context layer status
allowed-tools: Read, Glob
---

# PMF Status

Check the status of the user's PMF context layer.

## Instructions

1. Use Glob to check for files in the `pmf/` directory:
   - `pmf/icp.md` → ICP defined
   - `pmf/value-prop.md` → Value proposition defined
   - `pmf/aha-moments.md` → Aha moments captured

2. If files exist, read them to show summaries.

3. Display status:

### If no pmf/ folder exists:

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT STATUS                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  No PMF context layer found.                                │
│                                                             │
│  The PMF context layer captures the "WHY" behind your       │
│  product. Claude references these files when building       │
│  anything for your product.                                 │
│                                                             │
│  The context layer:                                         │
│  • icp.md - Who your customer is                            │
│  • value-prop.md - Why they should care                     │
│  • aha-moments.md - Key benefits you must deliver           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Start: /pmf-plan to build your context layer               │
└─────────────────────────────────────────────────────────────┘

Created by Adi Shmorak, The P/MF Detective
```

### If partial context exists:

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT STATUS                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [✓] ICP                                                    │
│      Who: [Brief summary from icp.md]                       │
│                                                             │
│  [✓] Value Proposition                                      │
│      Core: [Primary message from value-prop.md]             │
│                                                             │
│  [ ] Aha Moments                                            │
│      Not yet defined                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ██████████████░░░░░░  2/3 sections               │
├─────────────────────────────────────────────────────────────┤
│  Next: /update-aha to define aha moments                    │
└─────────────────────────────────────────────────────────────┘

Created by Adi Shmorak, The P/MF Detective
```

### If all context complete:

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT LAYER - COMPLETE                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [✓] ICP - pmf/icp.md                                       │
│      Who: [Brief summary]                                   │
│                                                             │
│  [✓] Value Proposition - pmf/value-prop.md                  │
│      Core: [Primary message]                                │
│                                                             │
│  [✓] Aha Moments - pmf/aha-moments.md                       │
│      Core Aha: [Key realization]                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████████████████████  3/3 sections               │
├─────────────────────────────────────────────────────────────┤
│  Your context layer is ready.                               │
│  Claude will reference these when building for your product.│
│                                                             │
│  To update:                                                 │
│  • /update-icp - Refine your ICP                            │
│  • /update-value-prop - Update your value proposition       │
│  • /update-aha - Revise aha moments                         │
│                                                             │
│  To generate assets:                                        │
│  • /generate-assets landing - Create a landing page         │
└─────────────────────────────────────────────────────────────┘

Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```
