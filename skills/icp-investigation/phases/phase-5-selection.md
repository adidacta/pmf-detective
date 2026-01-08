# Phase 5: Final ICP Selection & Optimization

## Goal
Select one Primary ICP for validation and document all ICPs with detailed profiles.

## Important: This is an Assumption

Before making the selection, remind the user:

```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️  IMPORTANT: YOUR ICP IS AN ASSUMPTION                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  We're making an educated guess based on research.          │
│  You might get it wrong - and that's OK!                    │
│                                                             │
│  The whole point of the next sprints is to TEST this        │
│  assumption quickly and cheaply. If it's wrong, you'll      │
│  learn fast and pivot to a secondary ICP.                   │
│                                                             │
│  Don't overthink this choice. Pick one and move forward.    │
└─────────────────────────────────────────────────────────────┘
```

## Process

1. Use research findings to compare assumptions with reality
2. Present recommendation with rationale
3. Use AskUserQuestion for final selection
4. Generate detailed profiles
5. Show clear next steps

## Selection Question

Use AskUserQuestion tool:

```
questions: [
  {
    question: "Which ICP do you want to validate first?",
    header: "Primary ICP",
    multiSelect: false,
    options: [
      { label: "[ICP 1 Name]", description: "[Brief reason why this could work]" },
      { label: "[ICP 2 Name]", description: "[Brief reason why this could work]" },
      { label: "[ICP 3 Name]", description: "[Brief reason why this could work]" }
    ]
  }
]
```

Before the question, provide your recommendation:

```
Based on research, I'd recommend **[ICP X]** because:
• [Reason 1: urgency/pain]
• [Reason 2: reachability]
• [Reason 3: research alignment]

But this is YOUR call. Pick the one that feels right to you.
```

## Final Output

Write to `pmf/icp-profile.md`:

```markdown
# ICP Profile
*Generated: [Date] | Sprint: ICP Investigation*

> **Remember:** This is an assumption to validate, not a final answer.

## Primary ICP: [Name]
**Selected for validation based on:** [Brief rationale]

### Summary
[1-2 sentence description]

### Demographics
| Attribute | Value | Status |
|-----------|-------|--------|
| [Attribute] | [Value] | [Validated/Assumption] |

### Psychographics
- Values: [What they care about]
- Fears: [What they worry about]
- Goals: [What they want to achieve]

### Pain Points
1. [Primary pain point]
2. [Secondary pain point]
3. [Additional pain points]

### Language & Phrases
- "[Phrase they use]"
- "[Another phrase]"

### Where They Gather
- [Channel 1]
- [Channel 2]

### Assumptions to Validate
- [ ] [Assumption 1]
- [ ] [Assumption 2]

---

## Secondary ICP 1: [Name]
[Condensed profile - backup if primary doesn't work]

## Secondary ICP 2: [Name]
[Condensed profile - backup if primary doesn't work]

---

*Created by Adi Shmorak, The P/MF Detective*
```

## Display the Profile

Show the profile in a visual box:

```
┌─────────────────────────────────────────────────────────────┐
│  📋 YOUR ICP PROFILE                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Primary ICP: [Name]                                        │
│                                                             │
│  Summary: [1-2 sentences]                                   │
│                                                             │
│  Core Pain: "[Their main complaint in their words]"         │
│                                                             │
│  Where to find them: [Top 2-3 channels]                     │
│                                                             │
│  Willingness to pay: [Brief note]                           │
│                                                             │
│  Key assumptions to validate:                               │
│  • [Assumption 1]                                           │
│  • [Assumption 2]                                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Secondary ICPs documented:                                 │
│  1. [ICP 2 Name] - [One-liner reason]                       │
│  2. [ICP 3 Name] - [One-liner reason]                       │
├─────────────────────────────────────────────────────────────┤
│  💾 Saved to: pmf/icp-profile.md                            │
└─────────────────────────────────────────────────────────────┘
```

## User Feedback Round

After displaying the profile:

```
Review your ICP profile above. Would you like to adjust anything?

(Just say "looks good" to finalize, or tell me what to change)
```

Make adjustments if requested, then proceed to completion.

## Sprint Completion

After confirmation, show clear next steps:

```
┌─────────────────────────────────────────────────────────────┐
│  ✅ ICP INVESTIGATION COMPLETE                              │
│  ████████████████████  5/5 phases                           │
└─────────────────────────────────────────────────────────────┘

Your ICP profile has been saved to pmf/icp-profile.md

📍 **Next Step:** Create your value proposition

Now that you know WHO you're targeting, let's figure out
WHAT to say to them.

Say "help me create my value proposition" or use:
/start-sprint value-prop

---
Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```
