---
description: Show PMF context layer status
allowed-tools: Read, Glob
---

# PMF Status

Check the status of the user's PMF context layer.

## Instructions

1. Use Glob to check for files in the `pmf/` directory:
   - `pmf/icp.md` → ICP defined (assumption)
   - `pmf/value-prop.md` → Value proposition defined (assumption)
   - `pmf/aha-moments.md` → Aha moments captured (assumption)
   - `pmf/validation-plan.md` → Validation plan set

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
│  • icp.md - Who your customer is (assumption)               │
│  • value-prop.md - Why they should care (assumption)        │
│  • aha-moments.md - Key benefits you must deliver (assump.) │
│  • validation-plan.md - How you'll test these assumptions   │
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
│  [✓] ICP (assumption)                                       │
│      Who: [Brief summary from icp.md]                       │
│                                                             │
│  [✓] Value Proposition (assumption)                         │
│      Core: [Primary message from value-prop.md]             │
│                                                             │
│  [ ] Aha Moments (assumption)                               │
│      Not yet defined                                        │
│                                                             │
│  [ ] Validation Plan                                        │
│      Not yet defined                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ██████████░░░░░░░░░░  2/4 sections               │
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
│  [✓] ICP - pmf/icp.md (assumption)                          │
│      Who: [Brief summary]                                   │
│                                                             │
│  [✓] Value Proposition - pmf/value-prop.md (assumption)     │
│      Core: [Primary message]                                │
│                                                             │
│  [✓] Aha Moments - pmf/aha-moments.md (assumption)          │
│      Core Aha: [Key realization]                            │
│                                                             │
│  [✓] Validation Plan - pmf/validation-plan.md               │
│      Goal: [N] [metric] | GO/ITERATE/PIVOT thresholds       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████████████████████  4/4 sections               │
├─────────────────────────────────────────────────────────────┤
│  Your context layer is ready.                               │
│  Run your validation plan to test your assumptions.         │
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
