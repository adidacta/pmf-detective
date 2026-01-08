# Phase 2: StoryBrand Narrative Building

## Goal
Deliver a compelling brand narrative following the 7-part StoryBrand framework.

## Important: Offer Options, Don't Ask to Describe

DO NOT ask the user to "describe" anything. Instead:
1. Read the ICP profile from `pmf/icp-profile.md`
2. Generate 2-3 options for each StoryBrand element based on the ICP data
3. Use AskUserQuestion to let the user pick or customize

## The 7 Parts

Build the narrative by having the user select/confirm each component:

1. **A character** - Who is the hero? (how THEY see themselves)
2. **Has a problem** - What frustration makes this product relevant?
3. **And meets a guide** - How does your product enter their story?
4. **And gives them a plan** - What's your simple framework/promise?
5. **And calls them to action** - What specific action should they take?
6. **That helps them avoid failure** - What negative outcome do they escape?
7. **And ends in success** - What does winning look like?

## Process for Each Part

### Part 1: The Character

Generate options based on ICP psychographics (how they see themselves):

```
Use AskUserQuestion:

questions: [
  {
    question: "How does your ideal customer see themselves?",
    header: "Character",
    multiSelect: false,
    options: [
      { label: "[Option 1 from ICP]", description: "Based on their values: [value]" },
      { label: "[Option 2 from ICP]", description: "Based on their goals: [goal]" },
      { label: "[Option 3 from ICP]", description: "Based on their identity: [identity]" },
      { label: "Not sure", description: "Research how they describe themselves" }
    ]
  }
]
```

### Part 2: The Problem

Generate options based on ICP pain points:

```
questions: [
  {
    question: "What specific problem makes your product relevant to them?",
    header: "Problem",
    multiSelect: false,
    options: [
      { label: "[Pain point 1 from ICP]", description: "[Why this matters to them]" },
      { label: "[Pain point 2 from ICP]", description: "[Why this matters to them]" },
      { label: "[Pain point 3 from ICP]", description: "[Why this matters to them]" },
      { label: "Not sure", description: "Research their biggest frustration" }
    ]
  }
]
```

### Part 3: The Guide

Ask about how their product enters the story:

```
questions: [
  {
    question: "How does your product enter their story as a trusted guide?",
    header: "Guide",
    multiSelect: false,
    options: [
      { label: "Expert authority", description: "You know what they don't" },
      { label: "Been there", description: "You've solved this yourself" },
      { label: "Proven system", description: "You have a method that works" },
      { label: "Not sure", description: "Research what builds trust" }
    ]
  }
]
```

### Part 4: The Plan

Ask about their framework/promise:

```
questions: [
  {
    question: "What simple plan or promise do you offer?",
    header: "Plan",
    multiSelect: false,
    options: [
      { label: "Step-by-step process", description: "Clear numbered steps" },
      { label: "Single powerful tool", description: "One thing that changes everything" },
      { label: "Transformation framework", description: "From [current] to [desired]" },
      { label: "Not sure", description: "Research what promises resonate" }
    ]
  }
]

Then follow up to get specifics based on their choice.
```

### Part 5: Call to Action

```
questions: [
  {
    question: "What action should they take first?",
    header: "CTA",
    multiSelect: false,
    options: [
      { label: "Start free trial", description: "Low commitment entry" },
      { label: "Book a call", description: "High-touch sales" },
      { label: "Download resource", description: "Lead magnet approach" },
      { label: "Buy now", description: "Direct purchase" },
      { label: "Not sure", description: "Research what converts" }
    ]
  }
]
```

### Part 6: Avoid Failure

Generate from ICP fears:

```
questions: [
  {
    question: "What negative outcome does following your plan help them avoid?",
    header: "Failure",
    multiSelect: false,
    options: [
      { label: "[Fear 1 from ICP]", description: "[What happens if they don't act]" },
      { label: "[Fear 2 from ICP]", description: "[What happens if they don't act]" },
      { label: "Status quo pain", description: "Keep experiencing [main pain]" },
      { label: "Not sure", description: "Research what they fear most" }
    ]
  }
]
```

### Part 7: Success

Generate from ICP goals:

```
questions: [
  {
    question: "What does a successful outcome look like for them?",
    header: "Success",
    multiSelect: false,
    options: [
      { label: "[Goal 1 from ICP]", description: "[Specific outcome]" },
      { label: "[Goal 2 from ICP]", description: "[Specific outcome]" },
      { label: "[Transformation]", description: "From [before] to [after]" },
      { label: "Not sure", description: "Research what they aspire to" }
    ]
  }
]
```

## Compile the Narrative

Once all 7 parts are collected, generate and display:

```
┌─────────────────────────────────────────────────────────────┐
│  📖 YOUR STORYBRAND NARRATIVE                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Generated narrative in natural, story-driven language]    │
│                                                             │
│  ---                                                        │
│                                                             │
│  Character: [Selected]                                      │
│  Problem: [Selected]                                        │
│  Guide: [Selected]                                          │
│  Plan: [Selected]                                           │
│  CTA: [Selected]                                            │
│  Failure: [Selected]                                        │
│  Success: [Selected]                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Items to research: [Any "Not sure" selections]             │
└─────────────────────────────────────────────────────────────┘

Does this narrative feel authentic to your brand and ICP?
```

## Save Narrative

Write to `pmf/brand-narrative.md` using the template from `templates/outputs/brand-narrative.md`

## Phase Completion

Show progress only at phase end:

```
┌─────────────────────────────────────────┐
│  Phase 2 Complete: StoryBrand Narrative │
│  ██████░░░░░░░░░░░░░░  2/6 phases       │
└─────────────────────────────────────────┘
```

## Transition

After narrative is confirmed, proceed to Phase 3 (Generate VP Assumptions).
