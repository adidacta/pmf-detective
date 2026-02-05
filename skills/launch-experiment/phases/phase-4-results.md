# Phase 4: Post-Launch Review and Next Steps

## Goal
Review results against your preset PMF goal and determine GO/ITERATE/PIVOT.

## CRITICAL: Read PMF Goal First

**Read `pmf/pmf-plan.md`** to get the preset thresholds.

Your success criteria are ALREADY DEFINED:
- GO threshold: [from pmf-plan.md]
- ITERATE range: [from pmf-plan.md]
- PIVOT threshold: [from pmf-plan.md]

## Collect Results

Use AskUserQuestion:

```
questions: [
  {
    question: "How many [target metric from goal] did you achieve?",
    header: "Result",
    multiSelect: false,
    options: [
      { label: "[GO threshold]+", description: "Hit or exceeded target" },
      { label: "[ITERATE range]", description: "Partial success" },
      { label: "<[PIVOT threshold]", description: "Below minimum" }
    ]
  }
]
```

Then ask for qualitative feedback:
```
Great. Now tell me:
1. **Feedback:** What did people say? Any patterns?
2. **Surprises:** What did you learn that you didn't expect?
```

## Automatic GO/ITERATE/PIVOT

Based on the number reported, the recommendation is **automatic**:

| Result | Recommendation |
|--------|----------------|
| At or above GO threshold | **GO** - Scale up |
| In ITERATE range | **ITERATE** - Adjust and retry |
| Below PIVOT threshold | **PIVOT** - Revisit ICP or value prop |

**Do not subjectively assess success.** Use the preset thresholds.

## Results Analysis Framework

```
**Your Experiment Analysis**

**What worked:**
- [Positive finding 1]
- [Positive finding 2]

**What didn't work:**
- [Challenge 1]
- [Challenge 2]

**Key learnings:**
- About your ICP: [Insight]
- About your value prop: [Insight]
- About your approach: [Insight]

**Assumptions validated:**
- [Assumption that proved true]

**Assumptions invalidated:**
- [Assumption that was wrong]
```

## Recommendation (Automatic Based on Goal)

Show the result in a visual box:

### If GO (hit threshold):
```
┌─────────────────────────────────────────────────────────────┐
│  ✅ RESULT: GO                                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Goal: [Goal from pmf-plan.md]                       │
│  Target: [Number]                                           │
│  Actual: [User's result]                                    │
│                                                             │
│  You hit your PMF goal! This is a strong signal.            │
│                                                             │
│  Next steps:                                                │
│  1. Double down on what worked                              │
│  2. Increase volume/budget                                  │
│  3. Consider building the full product                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### If ITERATE (partial):
```
┌─────────────────────────────────────────────────────────────┐
│  🔄 RESULT: ITERATE                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Goal: [Goal from pmf-plan.md]                       │
│  Target: [Number]                                           │
│  Actual: [User's result]                                    │
│                                                             │
│  You got a partial signal. There's interest, but not enough.│
│                                                             │
│  Next steps:                                                │
│  1. Review what worked vs what didn't                       │
│  2. Adjust your offer or messaging                          │
│  3. Run another experiment cycle                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### If PIVOT (below threshold):
```
┌─────────────────────────────────────────────────────────────┐
│  ❌ RESULT: PIVOT                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Goal: [Goal from pmf-plan.md]                       │
│  Target: [Number]                                           │
│  Actual: [User's result]                                    │
│                                                             │
│  The signal is too weak to continue this direction.         │
│                                                             │
│  Pivot options:                                             │
│  1. Different ICP - Maybe the wrong customer segment        │
│  2. Different value prop - Maybe wrong pain point           │
│  3. Different approach - Maybe wrong channel                │
│                                                             │
│  Say "help me restart with a new goal" to begin again.      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Save Results

Write to `pmf/experiment/results.md`:

```markdown
# Experiment Results
*Generated: [Date] | Sprint: Launch Experiment*

## Experiment Summary
- **ICP:** [Summary]
- **Value Prop:** [Summary]
- **Approach:** [Cold/Organic/Paid]
- **Duration:** [X days]

## Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| [Metric 1] | [X] | [Y] |
| [Metric 2] | [X] | [Y] |

## Qualitative Feedback
- [Quote or pattern 1]
- [Quote or pattern 2]
- [Quote or pattern 3]

## Analysis

### What Worked
- [Finding]

### What Didn't Work
- [Finding]

### Key Learnings
- [Learning]

## Recommendation
**[SCALE / ITERATE / PIVOT]**

[Rationale]

## Next Steps
1. [Action item]
2. [Action item]
3. [Action item]

---
*Created by Adi Shmorak, The P/MF Detective*
```

## Sprint Completion

```
**Congratulations!**

You've completed all 5 sprints of PMF Detective!

**Your PMF Journey:**
✓ Sprint 1: ICP Workshop - Defined your ideal customer
✓ Sprint 2: Value Prop Builder - Created your messaging
✓ Sprint 3: Mini-Product Planner - Planned your test product
✓ Sprint 4: Irresistible Offer - Crafted your promotion strategy
✓ Sprint 5: Launch Experiment - Tested and learned

**Your Results:** [Summary]
**Recommendation:** [Scale/Iterate/Pivot]

All your work is saved in the pmf/ folder.

Most experiments don't go viral right away. Keep testing, keep refining, and stay patient. You're learning what works!

Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```

## Progress Display

```
Your Progress
Phase 4 of 4: Results Review
Progress: [oooo] 100%
```
