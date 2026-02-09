---
name: aha-moments-builder
description: >
  Build the MVP PRD from your PMF context layer.
  Use when user says "aha moment", "key benefits", "must-deliver",
  "MVP", "PRD", "what to build", "scope", "features",
  or wants to define what the product must deliver.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Aha Moments Builder (MVP PRD)

You help product builders create a high-level MVP PRD that an AI coding agent can use as project context. The PRD cascades from the core aha moment down to features and requirements — grounding every line in "why does this matter to the ICP?"

## The Approach

The aha moment is the north star. Everything in the MVP exists to deliver that moment.

**The cascade:**
1. **Aha moment** — The single experience that makes users say "THIS is why I need this"
2. **Steps** — Work backwards: what had to happen right before the aha? And before that? That chain IS the MVP.
3. **Features** — For each step, what does the product need to do?
4. **Requirements** — For each feature, what must it deliver? Specific enough to build from, but focused on WHAT not HOW.

The output is a PRD file that gives an AI agent full context: what to build, why each piece matters, what's out of scope, and how to know it's working.

## Prerequisites

Check if `pmf/icp.md` and `pmf/value-prop.md` exist. Both are required.

If any are missing, inform the user:
```
To define your MVP scope, I need your PMF context layer.

Missing:
[ ] pmf/icp.md
[✓] pmf/value-prop.md

Use /plan-pmf to build your context layer first.
```

## Core Rules

- Ask ONE question at a time
- Wait for response before continuing
- Ground all options in ICP and value prop data — don't ask from scratch
- Include "Not sure" option that adds to Open Questions
- Always work backwards from the aha moment — never forward from features

## The Flow

### Phase A: Anchor the Promise (automated — no questions)

Read `pmf/icp.md` and `pmf/value-prop.md`. Extract:
- ICP identity, pain, desired outcome
- The full value proposition message (Mirror + Magnet)
- CTA

Display the value proposition back to the user as the anchor for everything that follows:

```
┌─────────────────────────────────────────────────────────────┐
│  YOUR VALUE PROPOSITION                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ICP: [Hypothesis name]                                      │
│  Promise: "[The full value prop message]"                    │
│                                                              │
│  Now let's find the moment your ICP feels this               │
│  promise was delivered.                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Phase B: Diverge — Explore Aha Moments (2-4 questions)

The aha moment is the single experience where value clicks. It's not a feature — it's the moment the user's perspective shifts. The goal of this phase is to **explore widely** before narrowing down.

**What is an aha moment?**
- It's NOT a feature ("timestamped notes")
- It IS a moment the user experiences ("I clicked my note and landed on the exact video moment — I actually remember this")
- Famous examples:
  - Slack: First time a teammate replies instantly instead of via email
  - Dropbox: First time you access a file from another device
  - Notion: First time you connect a note to a database and see it update everywhere

**Q1: Open exploration.** Repeat the value proposition and ask the user to describe the moment:

Use AskUserQuestion: "Your promise to [ICP identity] is: '[value prop message]'. Describe the moment they first feel this promise was delivered — what are they doing, and what shifts?"

Options: Generate 2-3 seed aha moments grounded in the ICP's pain and the Magnet. Each should be a specific, concrete user experience — not a feature. Always include a "Something else" option so the user can propose their own.

**Q2-Q3: Keep diverging.** After the user picks or describes one, don't converge yet. Ask: "That's one strong moment. What's another way they might feel the promise was delivered?"

Repeat until you have **3-5 candidate aha moments** on the table. 3 is enough. Don't push past 5. Each should be distinct — different aspects of the product or different stages of the user journey.

Display the full list:
```
We've explored [N] possible aha moments:

1. [Name] — [One-line description]
2. [Name] — [One-line description]
3. [Name] — [One-line description]
```

### Phase C: Converge — Pick the One (1-2 questions)

Now help the user narrow down. The right aha moment for an MVP is:
- **Early:** Happens as close to first use as possible (not after weeks of accumulated data)
- **Visceral:** The user feels it, not just understands it
- **Demonstrable:** You can show it in a demo or landing page

**Q4:** Use AskUserQuestion: "Which of these aha moments should drive your MVP? Pick the one that hits earliest, feels strongest, and you can demo."

Present all candidates with a brief note on timing (first use vs. accumulated use) for each.

**Q5 (optional):** If the user is torn between two, briefly discuss the tradeoffs (timing, buildability, emotional impact) and ask them to commit. The goal is ONE clear aha moment before moving on.

### Phase D: Reverse-Engineer the MVP (2-4 questions, one step at a time)

Now work backwards from the aha moment — like Sherlock Holmes deducing what must be true.

**The logic:** If the aha moment is the destination, what had to happen right before it? And before that? Keep tracing back to the user's starting point. That chain of steps is the minimum the product must deliver.

**Important: Go one step at a time.** Don't present the whole chain at once. Walk backwards with the user.

**Q6:** Start from the aha moment: "For [ICP identity] to experience [aha moment], what has to happen right before that moment?"

Use AskUserQuestion with 2-3 options for the immediately preceding step. Confirm with the user.

**Q7-Q8:** Keep stepping back: "And for [previous step] to happen, what has to happen before that?"

Continue until you reach the user's starting point (opens the app / lands on the page).

**Q9:** Present the complete chain for confirmation:

```
Path to Aha:
1. [Start] → 2. [Step] → 3. [Step] → ... → N. [Aha moment]
```

Use AskUserQuestion: "Here's the full path. Does it look right?"

Options: "Looks right" / "Something's missing" / "Something doesn't belong" / "Not sure"

Adjust if needed. The final chain becomes the MVP scope.

### Phase E: Features & Requirements (1 question per step)

Now cascade each step into features and high-level requirements. This is what turns the path from a user journey into a buildable spec.

**The cascade:**
```
Aha Moment (why)
└── Step (what has to happen)
    └── Feature (what the product does)
        └── Requirement (what the feature must deliver)
```

**For each step in the path**, generate:
- **Features:** What does the product need to do to deliver this step? Each feature is a distinct capability (e.g., "URL input", "embedded player", "note editor").
- **Requirements:** For each feature, 2-4 high-level requirements. These should be specific enough for a developer to build from, but not implementation details. Focus on WHAT, not HOW.

**Good requirement:** "Must extract YouTube video ID from full URLs, short URLs (youtu.be), and URLs with timestamps"
**Bad requirement:** "Use a regex to parse the URL" (implementation detail)
**Bad requirement:** "Handle URLs" (too vague)

**Walk through each step with the user.** For each step, present the proposed features and requirements, then confirm:

Use AskUserQuestion: "Here are the features needed for step [N]: '[step name]'. Does this look right?"

Options: "Looks right" / "Something's missing" / "Too much — simplify" / "Not sure"

Adjust based on feedback before moving to the next step.

**Keep it tight.** The goal is the minimum set of features and requirements to deliver each step. If a requirement isn't directly needed for the aha moment path, it doesn't belong here.

### Phase F: Out of Scope (1 question)

Equally important as what's in scope: what's NOT in v1.

Based on the ICP's broader wants (from icp.md) and the Magnet, generate 3-4 things that might seem important but should wait for v2+.

Use AskUserQuestion: "Which of these should be explicitly OUT of scope for v1?" (multiSelect: true)

Frame it as: "Saying 'no' to these now means you ship faster and learn sooner."

### Phase G: Success Criteria (1 question)

How will you know the aha moment has landed? This should be an observable user behavior, not a metric.

Generate 2-3 behavioral signals based on the aha moment.

Use AskUserQuestion: "How will you know a user has experienced the aha moment? What will they do?"

Examples of good success criteria:
- "They take their first note while watching a video"
- "They come back the next day to use it again"
- "They share it with a colleague"

## Output

Save to `pmf/aha-moments.md` with the following structure:

```markdown
# MVP PRD — [Product Name]

<!-- AI_INSTRUCTION: Use this file as project context for building the MVP.
     Everything exists to deliver the aha moment. Features and requirements
     are scoped to the Path to Aha — anything not listed here is out of scope. -->

## The Aha Moment
[Name and description]
[Why this moment — timing, emotional impact]

## Path to Aha

### Step 1: [Step name]
[What happens from the user's perspective]

**Features:**

**[Feature name]**
- [Requirement]
- [Requirement]

**[Feature name]**
- [Requirement]
- [Requirement]

### Step 2: [Step name]
...

(repeat for each step)

## In Scope for v1 (Beyond Path to Aha)
[Additional features that support the ICP need but aren't on the critical path]

## Out of Scope (v2+)
[Explicitly deferred items with brief rationale]

## Success Criteria
[Observable user behavior that proves the aha moment landed]

## Open Questions
[Unresolved decisions]
```

## Progress Display

Show only at the END:

```
┌─────────────────────────────────────────────────────────────┐
│  MVP PRD COMPLETE                                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Aha Moment: [The key experience]                            │
│                                                              │
│  Path to Aha: [N] steps                                      │
│  Features: [N] features across all steps                     │
│  Requirements: [N] total requirements                        │
│                                                              │
│  Out of Scope: [N] items deferred to v2+                     │
│  Success: [Behavioral signal]                                │
│                                                              │
│  Saved to: pmf/aha-moments.md                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Updating Existing MVP PRD

If `pmf/aha-moments.md` already exists:
1. Read the current file
2. Show summary to user
3. Ask what they want to update
4. Update only the relevant sections
5. Save the updated file

## Research Support

When user says "not sure" or wants research:
- Use WebSearch to find how similar products describe their core value moment
- Look for onboarding patterns in similar tools
- Present findings and let user decide what fits

## Why This Matters

The MVP PRD file is designed as **project context for AI coding agents**. It helps them:
- Understand what to build and why each feature exists (traced back to the aha moment)
- Know the exact requirements for each feature — specific enough to implement
- Know what's explicitly out of scope — prevents scope creep
- Structure onboarding around the path to aha
- Ground all decisions in ICP needs and value prop

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
