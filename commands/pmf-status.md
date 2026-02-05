---
description: Show PMF Detective sprint progress
allowed-tools: Read, Glob, TaskList
---

# PMF Status

Check the user's progress through the PMF Detective validation sprints.

## Instructions

1. Use Glob to check for files in the `pmf/` directory
2. **FIRST** check for `pmf/pmf-plan.md` - if exists, read it to get the goal
3. Use TaskList to show sprint task status alongside the ASCII progress display
4. Determine which sprints are complete based on existing files:
   - `pmf/pmf-plan.md` → PMF Goal set
   - `pmf/icp-profile.md` → Sprint 1 (ICP Investigation) complete
   - `pmf/value-proposition.md` → Sprint 2 (Value Prop Builder) complete
   - `pmf/mini-mvp-plan.md` → Sprint 3 (Mini-MVP Builder) complete
   - `pmf/offer/strategy.md` → Sprint 4 (Irresistible Offer) complete
   - `pmf/experiment/results.md` → Sprint 5 (Launch Experiment) complete

4. Display progress with **GOAL at the top**, showing BOTH file-based status AND Tasks:

```
┌─────────────────────────────────────────────────────────────┐
│  📊 PMF DETECTIVE STATUS                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🎯 Goal: [Goal from pmf-plan.md]                           │
│     Target: [Number]                                        │
│     GO: [X]+ | ITERATE: [Y-Z] | PIVOT: <[Y]                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [✓] Sprint 1: ICP Investigation                            │
│      └─ pmf/icp-profile.md                                  │
│                                                             │
│  [✓] Sprint 2: Value Prop Builder                           │
│      └─ pmf/value-proposition.md                            │
│                                                             │
│  [ ] Sprint 3: Mini-MVP Builder                             │
│                                                             │
│  [ ] Sprint 4: Irresistible Offer                           │
│                                                             │
│  [ ] Sprint 5: Launch Experiment                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ██████████░░░░░░░░░░  2/5 sprints                │
├─────────────────────────────────────────────────────────────┤
│  📍 Next: Mini-MVP Builder                                  │
│     Say "help me plan my mini MVP" or use:                  │
│     /start-sprint mini-mvp                                  │
└─────────────────────────────────────────────────────────────┘
```

5. Also call TaskList to show task-level progress. Display it alongside:

```
📋 Task Progress:
[Show TaskList output here - tasks with status indicators]
```

6. If no pmf/ folder exists or no pmf-plan.md:

```
┌─────────────────────────────────────────────────────────────┐
│  📊 PMF DETECTIVE STATUS                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  No PMF journey started yet.                                │
│                                                             │
│  PMF Detective helps you define your project's PMF context  │
│  with a clear, goal-driven approach:                        │
│                                                             │
│  First, you'll set a PMF goal (e.g., 100 signups,           │
│  10 paying customers). Then 5 sprints help you get there:   │
│                                                             │
│  1. ICP Investigation - Who is your customer?               │
│  2. Value Prop Builder - What should you say?               │
│  3. Mini-MVP Builder - What should you build?               │
│  4. Irresistible Offer - How do you present it?             │
│  5. Launch Experiment - Did you hit your goal?              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  📍 Start: "help me define my PMF context"                  │
└─────────────────────────────────────────────────────────────┘

Created by Adi Shmorak, The P/MF Detective
```

7. If all sprints complete:

```
┌─────────────────────────────────────────────────────────────┐
│  🎉 PMF DETECTIVE - ALL SPRINTS COMPLETE                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [✓] Sprint 1: ICP Investigation                            │
│  [✓] Sprint 2: Value Prop Builder                           │
│  [✓] Sprint 3: Mini-MVP Builder                             │
│  [✓] Sprint 4: Irresistible Offer                           │
│  [✓] Sprint 5: Launch Experiment                            │
│                                                             │
│  Progress: ████████████████████  5/5 sprints                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  📍 What's Next?                                            │
│                                                             │
│  Review pmf/experiment/results.md and decide:               │
│  • Scale - Results were strong, invest more                 │
│  • Iterate - Adjust and run another experiment              │
│  • Pivot - Try a different ICP or approach                  │
└─────────────────────────────────────────────────────────────┘

Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```
