---
description: Show PMF Detective sprint progress
allowed-tools: Read, Glob
---

# PMF Status

Check the user's progress through the PMF Detective validation sprints.

## Instructions

1. Use Glob to check for files in the `pmf/` directory
2. Determine which sprints are complete based on existing files:
   - `pmf/icp-profile.md` → Sprint 1 (ICP Investigation) complete
   - `pmf/value-proposition.md` → Sprint 2 (Value Prop Builder) complete
   - `pmf/mini-mvp-plan.md` → Sprint 3 (Mini-MVP Builder) complete
   - `pmf/offer/strategy.md` → Sprint 4 (Irresistible Offer) complete
   - `pmf/experiment/results.md` → Sprint 5 (Launch Experiment) complete

3. Display progress using a visual format:

```
┌─────────────────────────────────────────────────────────────┐
│  📊 PMF DETECTIVE STATUS                                    │
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

4. If no pmf/ folder exists:

```
┌─────────────────────────────────────────────────────────────┐
│  📊 PMF DETECTIVE STATUS                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  No validation sprints started yet.                         │
│                                                             │
│  The PMF Detective helps you validate your startup idea     │
│  through 5 structured sprints:                              │
│                                                             │
│  1. ICP Investigation - Who is your customer?               │
│  2. Value Prop Builder - What should you say?               │
│  3. Mini-MVP Builder - What should you build?               │
│  4. Irresistible Offer - How do you present it?             │
│  5. Launch Experiment - Does it work?                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  📍 Start: "help me validate my startup idea" or use:       │
│     /start-sprint icp                                       │
└─────────────────────────────────────────────────────────────┘

Created by Adi Shmorak, The P/MF Detective
```

5. If all sprints complete:

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
