# Phase 3: ICP Comparison

## Goal
Compare the 3 ICP candidates systematically using 5 key traits.

## Important
No adaptation allowed in this phase. Follow the exact process.

## Comparison Traits

Rate each ICP on these 5 traits:

1. **Urgency** - How urgent is the problem for them?
2. **Frequency** - How often do they experience this pain?
3. **Size of Pain** - How significant is the problem?
4. **Reachability** - How easy are they to find and contact?
5. **Founder Resonance** - How well does the founder understand/relate to them?

## Use AskUserQuestion Tool

For EACH trait, use the AskUserQuestion tool to collect ratings for all 3 ICPs at once. This creates a cleaner interface than text input.

### Example for Urgency trait:

```
Use AskUserQuestion with 3 questions (one per ICP):

questions: [
  {
    question: "How urgent is the problem for [ICP 1 Name]?",
    header: "ICP 1",
    multiSelect: false,
    options: [
      { label: "High", description: "They need to solve this NOW" },
      { label: "Medium", description: "It's important but not critical" },
      { label: "Low", description: "They can live with the problem" },
      { label: "Not sure", description: "I'll research this" }
    ]
  },
  {
    question: "How urgent is the problem for [ICP 2 Name]?",
    header: "ICP 2",
    multiSelect: false,
    options: [
      { label: "High", description: "They need to solve this NOW" },
      { label: "Medium", description: "It's important but not critical" },
      { label: "Low", description: "They can live with the problem" },
      { label: "Not sure", description: "I'll research this" }
    ]
  },
  {
    question: "How urgent is the problem for [ICP 3 Name]?",
    header: "ICP 3",
    multiSelect: false,
    options: [
      { label: "High", description: "They need to solve this NOW" },
      { label: "Medium", description: "It's important but not critical" },
      { label: "Low", description: "They can live with the problem" },
      { label: "Not sure", description: "I'll research this" }
    ]
  }
]
```

### Rating Scale

- **High** - Strong/significant
- **Medium** - Moderate
- **Low** - Weak/minimal
- **Not sure** - Add to research list (don't guess!)

### Handling "Not sure"

When user selects "Not sure" for any ICP:
- Acknowledge: "I'll add [ICP Name]'s [trait] to our research list"
- Mark as "?" in the comparison table
- Include in Deep Research phase queries

## Process

1. Introduce the comparison phase briefly
2. For each of the 5 traits, use AskUserQuestion to collect ratings
3. After each trait, show the updated comparison table
4. After all 5 traits, display complete table with analysis

## Comparison Table Format

Update and display after each trait:

```
┌──────────────────────────────────────────────────────────┐
│  📊 ICP COMPARISON TABLE                                 │
├──────────────────┬──────────┬──────────┬──────────┬──────┤
│ Trait            │ ICP 1    │ ICP 2    │ ICP 3    │      │
├──────────────────┼──────────┼──────────┼──────────┼──────┤
│ Urgency          │ High     │ Medium   │ ?        │      │
│ Frequency        │ ...      │ ...      │ ...      │      │
│ Size of Pain     │ ...      │ ...      │ ...      │      │
│ Reachability     │ ...      │ ...      │ ...      │      │
│ Founder Resonance│ ...      │ ...      │ ...      │      │
└──────────────────┴──────────┴──────────┴──────────┴──────┘
```

Use "?" for "Not sure" responses - these become research targets.

## After All 5 Traits

Display the complete table and provide initial analysis:

```
┌──────────────────────────────────────────────────────────┐
│  📊 COMPLETE ICP COMPARISON                              │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  [Full comparison table]                                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Initial observations:                                   │
│  • ICP [X] scores highest on urgency and pain            │
│  • ICP [Y] is most reachable                             │
│  • [X] items marked "?" will be researched next          │
└──────────────────────────────────────────────────────────┘

Moving to Deep Research to validate your assessments...
```

## Phase Completion

Show progress only at phase end:

```
┌─────────────────────────────────────────┐
│  Phase 3 Complete: ICP Comparison       │
│  ████████████░░░░░░░░  3/5 phases       │
└─────────────────────────────────────────┘
```

## Transition

After completing the comparison table, proceed to Phase 4 (Deep Research).
