# Phase 2: Task Breakdown for Launch

## Goal
Generate a clear, actionable task list for the experiment.

## Important: No Specific Days

The experiment task list should NOT have:
- "Day 1-2" type schedules
- Specific hour estimates
- Week-by-week breakdown

Instead, organize by **phases** that the user can execute at their own pace.

## Plan Structure

Organize tasks into logical phases:

1. **Setup** - Get everything ready
2. **Execute** - Run the experiment
3. **Track** - Monitor results
4. **Analyze** - Review and decide

## Task List Format

```
┌─────────────────────────────────────────────────────────────┐
│  📋 EXPERIMENT TASK LIST                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  **Setup Tasks**                                            │
│  - [ ] Review all outreach materials                        │
│  - [ ] Set up tracking (spreadsheet or tool)                │
│  - [ ] Identify first batch of targets                      │
│  - [ ] Test mini-MVP one more time                          │
│                                                             │
│  **Execution Tasks**                                        │
│  - [ ] [First batch of outreach/content/ads]                │
│  - [ ] Log all responses                                    │
│  - [ ] [Second batch]                                       │
│  - [ ] Adjust messaging based on feedback                   │
│  - [ ] [Continue until target reached]                      │
│                                                             │
│  **Tracking Tasks**                                         │
│  - [ ] Log each response/conversion                         │
│  - [ ] Note qualitative feedback                            │
│  - [ ] Track patterns                                       │
│                                                             │
│  **Analysis Tasks**                                         │
│  - [ ] Compile all metrics                                  │
│  - [ ] Compare to success criteria                          │
│  - [ ] Document learnings                                   │
│  - [ ] Make scale/iterate/pivot decision                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## After Sharing Plan

Ask using AskUserQuestion:

```
questions: [
  {
    question: "How would you like to track your progress?",
    header: "Tracking",
    multiSelect: false,
    options: [
      { label: "Here with Claude", description: "I'll be your accountability partner" },
      { label: "Spreadsheet", description: "I'll create a tracking template" },
      { label: "Notion", description: "I'll create a Notion template" },
      { label: "Not sure", description: "Help me decide" }
    ]
  }
]
```

## Save Plan

Write to `pmf/experiment/plan.md`:

```markdown
# Experiment Plan
*Generated: [Date] | Sprint: Launch Experiment*

## Overview

**ICP:** [Summary]
**Value Prop:** [Summary]
**Mini-MVP:** [Summary]
**Approach:** [Cold/Organic/Paid]

## Success Criteria

| Metric | Target | How to Measure |
|--------|--------|----------------|
| [Metric 1] | [Target] | [Method] |
| [Metric 2] | [Target] | [Method] |

## Go/No-Go Criteria

**Scale:** [What indicates success]
**Iterate:** [What indicates need for adjustment]
**Pivot:** [What indicates need to change direction]

## Task List

### Setup
- [ ] Review all outreach materials
- [ ] Set up tracking
- [ ] Identify targets
- [ ] Test mini-MVP

### Execute
- [ ] [Outreach batch 1]
- [ ] Log responses
- [ ] [Outreach batch 2]
- [ ] Adjust based on feedback
- [ ] [Continue...]

### Track
- [ ] Log each response
- [ ] Note feedback
- [ ] Track patterns

### Analyze
- [ ] Compile metrics
- [ ] Compare to criteria
- [ ] Document learnings
- [ ] Decide: scale/iterate/pivot

## Tracking Template

| Date | Action | Responses | Conversions | Notes |
|------|--------|-----------|-------------|-------|
| | | | | |

## Feedback Questions

1. [Question about problem]
2. [Question about solution]
3. [Question about willingness to pay]

---
*Created by Adi Shmorak, The P/MF Detective*
```

## Phase Completion

```
┌─────────────────────────────────────────┐
│  Phase 2 Complete: Task Breakdown       │
│  ██████████░░░░░░░░░░  2/4 phases       │
└─────────────────────────────────────────┘
```

## Transition

Once plan is agreed upon, proceed to Phase 3 (Track & Optimize).
