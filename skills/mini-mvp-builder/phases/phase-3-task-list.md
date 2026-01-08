# Phase 3: Task List

## Goal
Create a clear task list for building the mini-MVP and save the plan.

## Important: No Time Estimates

Do NOT include:
- Day-by-day schedules
- Hour estimates
- Timeline recommendations
- Phases like "Day 1-2" or "Week 1"

Claude Code can help execute quickly - just provide the task list.

## Task List Format

Generate a checklist organized by deliverable:

```
┌─────────────────────────────────────────────────────────────┐
│  📋 TASK LIST: [Mini-MVP Name]                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  **Deliverable 1: [Name]**                                  │
│  - [ ] [Task 1]                                             │
│  - [ ] [Task 2]                                             │
│  - [ ] [Task 3]                                             │
│                                                             │
│  **Deliverable 2: [Name]**                                  │
│  - [ ] [Task 1]                                             │
│  - [ ] [Task 2]                                             │
│                                                             │
│  **Deliverable 3: [Name]**                                  │
│  - [ ] [Task 1]                                             │
│  - [ ] [Task 2]                                             │
│                                                             │
│  **Final Steps**                                            │
│  - [ ] Test everything works                                │
│  - [ ] Prepare tracking (how to measure success)            │
│  - [ ] Ready for offer creation                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Task Guidelines

- Be specific and actionable
- Each task should be completable in one sitting
- Mark which tasks Claude can help with
- Keep the list manageable (10-20 tasks total)

## Save to File

Write to `pmf/mini-mvp-plan.md`:

```markdown
# Mini-MVP Plan
*Generated: [Date] | Sprint: Mini-MVP Builder*

## Overview

**Mini-MVP:** [Name]

**Description:** [2-3 sentences about what this is]

**ICP:** [Summary from previous sprint]

**Value Proposition:** [Summary from previous sprint]

**Validation Signal:** [What success looks like]

## Deliverables

1. **[Deliverable 1]** - [Brief description]
2. **[Deliverable 2]** - [Brief description]
3. **[Deliverable 3]** - [Brief description]

## Task List

### [Deliverable 1]
- [ ] [Task]
- [ ] [Task]
- [ ] [Task]

### [Deliverable 2]
- [ ] [Task]
- [ ] [Task]

### [Deliverable 3]
- [ ] [Task]
- [ ] [Task]

### Final Steps
- [ ] Test everything works
- [ ] Set up tracking method
- [ ] Ready for offer creation

## What Claude Can Help Build

- [Specific thing 1]
- [Specific thing 2]
- [Specific thing 3]

## Success Metrics

How will you know this mini-MVP is working?

- [ ] [Metric 1]: [Target]
- [ ] [Metric 2]: [Target]

## Next Steps

After building your mini-MVP:
1. Create your irresistible offer (/start-sprint offer)
2. Launch and validate (/start-sprint launch)

---
*Created by Adi Shmorak, The P/MF Detective*
```

## Sprint Completion

Show completion with visual box:

```
┌─────────────────────────────────────────────────────────────┐
│  ✅ MINI-MVP BUILDER COMPLETE                               │
│  ████████████████████  3/3 phases                           │
└─────────────────────────────────────────────────────────────┘

Your plan has been saved to pmf/mini-mvp-plan.md

**Your Mini-MVP:** [Name]
**Deliverables:** [Count] items
**Tasks:** [Count] tasks ready to execute

📍 **Next Step:** Create your irresistible offer

Say "help me create my offer" or use:
/start-sprint offer

💡 **Tip:** You can ask Claude to help build any of these tasks!
   Just say "help me build [deliverable name]"

---
Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```

## Important

- Do NOT transition into actually building
- End the sprint clearly
- Point to the next sprint
- Remind user Claude can help execute the tasks
