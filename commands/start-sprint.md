---
description: Start a specific PMF Detective sprint
argument-hint: <sprint-name>
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion, TaskUpdate, TaskList
---

# Start Sprint

Start a specific PMF Detective validation sprint.

## Available Sprints

- `icp` - ICP Investigation (define your ideal customer)
- `value-prop` - Value Prop Builder (create compelling messaging)
- `mini-mvp` - Mini-MVP Builder (plan what to build and test)
- `offer` - Irresistible Offer (craft offer + outreach strategy)
- `launch` - Launch Experiment (execute and track validation)

## Instructions

The user invoked this command with: $ARGUMENTS

1. Parse the sprint name from arguments
2. Map to the appropriate sprint:
   - `icp`, `icp-investigation`, `customer` → Start ICP Investigation
   - `value-prop`, `value-proposition`, `vp`, `storybrand` → Start Value Prop Builder
   - `mini-mvp`, `mini-product`, `mini`, `mvp` → Start Mini-MVP Builder
   - `offer`, `outreach` → Start Offer Architect
   - `launch`, `experiment`, `test` → Start Launch Experiment

3. Check prerequisites:
   - Value Prop requires: `pmf/icp-profile.md`
   - Mini-MVP requires: `pmf/value-proposition.md`
   - Offer requires: `pmf/mini-mvp-plan.md`
   - Launch requires: `pmf/offer/strategy.md`

4. If prerequisites missing, inform user:
   "To start the [Sprint Name], you first need to complete [Previous Sprint].
    Would you like to start [Previous Sprint] instead?"

5. If prerequisites met or starting Sprint 1:
   - Use TaskList to find the corresponding sprint task
   - Use TaskUpdate to set the task status to `in_progress`
   - Begin the sprint by reading the appropriate skill's SKILL.md and following its process.

## Sprint Mapping

| Argument | Sprint | Skill Directory | Prerequisite |
|----------|--------|-----------------|--------------|
| icp | ICP Investigation | icp-investigation | None |
| value-prop | Value Prop Builder | value-prop-builder | icp-profile.md |
| mini-mvp | Mini-MVP Builder | mini-mvp-builder | value-proposition.md |
| offer | Irresistible Offer | offer-architect | mini-mvp-plan.md |
| launch | Launch Experiment | launch-experiment | offer/strategy.md |

## If No Argument Provided

Use AskUserQuestion:

```
questions: [
  {
    question: "Which sprint would you like to start?",
    header: "Sprint",
    multiSelect: false,
    options: [
      { label: "ICP Investigation", description: "Define your ideal customer" },
      { label: "Value Prop Builder", description: "Create compelling messaging" },
      { label: "Mini-MVP Builder", description: "Plan what to build and test" },
      { label: "Irresistible Offer", description: "Craft your offer + outreach" },
      { label: "Launch Experiment", description: "Execute and track validation" }
    ]
  }
]
```
