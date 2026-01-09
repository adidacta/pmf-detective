---
name: validation-goal
description: >
  Set validation goal at the start of PMF Detective journey.
  This skill should run FIRST before any other PMF sprint.
  Triggered by pmf-detective coordinator when pmf/validation-goal.md doesn't exist.
allowed-tools: Read, Write, AskUserQuestion
---

# Validation Goal Selection

You help founders set a clear, achievable validation goal before starting their PMF journey.

## Why This Matters

Without a clear goal, validation becomes open-ended. By setting a specific target upfront, everything else (ICP, value prop, mini-MVP, offer) becomes focused on achieving that goal.

## Process

### Step 1: Ask Stage

Use AskUserQuestion to determine where the user is:

```
questions: [
  {
    question: "Where are you in your startup journey?",
    header: "Stage",
    multiSelect: false,
    options: [
      { label: "Just an idea", description: "No product built yet" },
      { label: "Prototype", description: "Something rough/early built" },
      { label: "MVP - no users", description: "Functional product, but no adoption yet" },
      { label: "MVP + beta testers", description: "Have users, but no paying customers" },
      { label: "Product + paying users", description: "Already have revenue" }
    ]
  }
]
```

### Step 2: Show Filtered Goals

Based on stage, present 2-3 relevant goals using AskUserQuestion.

**Stage: Just an idea**
```
questions: [
  {
    question: "What validation goal would you like to hit?",
    header: "Goal",
    multiSelect: false,
    options: [
      { label: "100 Waitlist Signups", description: "Validate demand with a landing page" },
      { label: "50 Interest Conversations", description: "Validate problem through outreach + surveys" }
    ]
  }
]
```

**Stage: Prototype**
```
questions: [
  {
    question: "What validation goal would you like to hit?",
    header: "Goal",
    multiSelect: false,
    options: [
      { label: "30 Beta Testers", description: "Get active users testing your prototype" },
      { label: "100 Waitlist Signups", description: "Build interest before full launch" }
    ]
  }
]
```

**Stage: MVP - no users**
```
questions: [
  {
    question: "What validation goal would you like to hit?",
    header: "Goal",
    multiSelect: false,
    options: [
      { label: "30 Beta Testers", description: "Get active users on your MVP" },
      { label: "10 Paying Customers", description: "Validate willingness to pay" }
    ]
  }
]
```

**Stage: MVP + beta testers**
```
questions: [
  {
    question: "What validation goal would you like to hit?",
    header: "Goal",
    multiSelect: false,
    options: [
      { label: "10 Paying Customers", description: "Convert beta users to paid" },
      { label: "30 New Users (New Segment)", description: "Expand to adjacent ICP" }
    ]
  }
]
```

**Stage: Product + paying users**
```
questions: [
  {
    question: "What validation goal would you like to hit?",
    header: "Goal",
    multiSelect: false,
    options: [
      { label: "50 More Customers", description: "Scale existing customer acquisition" },
      { label: "30 Users in New Segment", description: "Validate expansion to new ICP" },
      { label: "5 Enterprise LOIs", description: "Validate B2B/enterprise demand" }
    ]
  }
]
```

### Step 3: Confirm and Save

After user selects, show confirmation with visual box:

```
┌─────────────────────────────────────────────────────────────┐
│  🎯 YOUR VALIDATION GOAL                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Stage: [Selected stage]                                    │
│  Goal: [Selected goal]                                      │
│  Target: [Number]                                           │
│                                                             │
│  Success Criteria:                                          │
│  ✅ GO: [threshold]+ → Scale up                             │
│  🔄 ITERATE: [range] → Adjust and try again                 │
│  ❌ PIVOT: <[threshold] → Revisit ICP or value prop         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Mini-MVP: [preset type based on goal]                      │
│  Offer Focus: [preset approach based on goal]               │
├─────────────────────────────────────────────────────────────┤
│  💾 Saved to: pmf/validation-goal.md                        │
└─────────────────────────────────────────────────────────────┘
```

## Goal Definitions

| Goal | Target | Mini-MVP | Offer Focus | GO | ITERATE | PIVOT |
|------|--------|----------|-------------|-----|---------|-------|
| 100 Waitlist Signups | 100 | Landing page + email capture | Content/ads/outreach to drive traffic | 100+ | 50-99 | <50 |
| 50 Interest Conversations | 50 | Outreach script + survey | Direct outreach to ICP | 50+ | 25-49 | <25 |
| 30 Beta Testers | 30 | Product access + onboarding | Community/outreach recruitment | 30+ | 15-29 | <15 |
| 10 Paying Customers | 10 | Sales page + payment | Direct sales outreach | 10+ | 5-9 | <5 |
| 30 New Users (New Segment) | 30 | Repositioned landing | Outreach to new ICP | 30+ | 15-29 | <15 |
| 50 More Customers | 50 | Optimized funnel | Scaled acquisition | 50+ | 25-49 | <25 |
| 5 Enterprise LOIs | 5 | Deck + proposal | B2B cold outreach | 5+ | 2-4 | <2 |

## Output File

Save to `pmf/validation-goal.md`:

```markdown
# Validation Goal
*Generated: [Date]*

**Stage:** [e.g., "MVP - no users"]
**Goal:** [e.g., "10 Paying Customers"]
**Target:** 10 paying customers

## Success Criteria

| Result | Meaning | Next Step |
|--------|---------|-----------|
| **GO:** 10+ | Strong validation | Scale up acquisition |
| **ITERATE:** 5-9 | Partial validation | Adjust offer/positioning, try again |
| **PIVOT:** <5 | Weak validation | Revisit ICP or value proposition |

## Preset Mini-MVP

**Type:** Sales page with early-access pricing + payment flow

**What to build:**
- Landing page focused on your ICP
- Clear value proposition messaging
- Payment integration (Stripe/Gumroad/etc)
- Early-access or founder pricing offer

## Preset Offer Approach

**Focus:** Direct sales outreach

**Recommended channels:**
- Cold email to ICP
- LinkedIn outreach
- Warm network referrals

---
*Your entire PMF journey is now focused on hitting this goal.*
```

## After Saving

Show next steps:

```
┌─────────────────────────────────────────────────────────────┐
│  ✅ VALIDATION GOAL SET                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Your goal: [Goal] ([Target])                               │
│                                                             │
│  Now let's define WHO you're targeting.                     │
│                                                             │
│  📍 Next: ICP Investigation                                 │
│                                                             │
│  Say "let's define my ICP" or use:                          │
│  /start-sprint icp                                          │
└─────────────────────────────────────────────────────────────┘

---
Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```

## Important Rules

- This skill runs ONCE at the start
- Goal cannot be changed mid-journey (user must restart if they want different goal)
- All subsequent sprints read from `pmf/validation-goal.md`
- Don't skip this step - it anchors the entire validation journey
