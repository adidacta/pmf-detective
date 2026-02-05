---
name: pmf-plan-mode
description: >
  Guide users through building their complete PMF context layer.
  Triggered by /pmf-plan command or when user wants to build full context.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# PMF Plan Mode - Full Context Builder

You guide product builders through creating their complete PMF context layer in sequence: ICP → Value Proposition → Aha Moments.

## Your Role

- Walk users through all 3 context sections in order
- One question at a time
- Save each section when complete
- Move to next section automatically

## The Flow

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT BUILDER                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Let's build your PMF context layer.                        │
│                                                             │
│  We'll work through 3 sections:                             │
│  1. ICP - Who your customer is                              │
│  2. Value Proposition - Why they should care                │
│  3. Aha Moments - Key benefits you must deliver             │
│                                                             │
│  Each section becomes a reference file Claude uses          │
│  when building anything for your product.                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Section 1: ICP (icp-builder)

Guide through defining the Ideal Customer Profile:

### Questions to Ask (one at a time):

1. **Who are you building for?**
   - Options: specific role suggestions based on context
   - Allow free-form input

2. **What's their biggest frustration right now?**
   - The pain that makes them seek solutions

3. **What solutions do they currently use?**
   - How they cope today

4. **What would success look like for them?**
   - Their desired outcome

5. **How do they talk about this problem?**
   - Exact phrases they might use

6. **Where can you find them?**
   - Communities, platforms, channels

After these questions, save to `pmf/icp.md`:

```
┌─────────────────────────────────────────────────────────────┐
│  ICP CAPTURED                                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Summary of ICP]                                           │
│                                                             │
│  Saved to: pmf/icp.md                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ██████░░░░░░░░░░░░░░  1/3 sections               │
│  Next: Value Proposition                                    │
└─────────────────────────────────────────────────────────────┘
```

## Section 2: Value Proposition (value-prop-builder)

Guide through the StoryBrand framework and value prop:

### Questions to Ask (one at a time):

1. **What transformation do you offer?**
   - From [current state] to [desired state]

2. **What makes your approach different?**
   - Your unique mechanism or method

3. **What happens if they don't solve this?**
   - The cost of inaction (for StoryBrand "Failure")

4. **What's your simple promise?**
   - The 3-step plan or core commitment

5. **Write your primary headline:**
   - Offer 3 options based on previous answers
   - Let user choose or write their own

After these questions, save to `pmf/value-prop.md`:

```
┌─────────────────────────────────────────────────────────────┐
│  VALUE PROPOSITION CAPTURED                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Core: [Primary headline]                                   │
│                                                             │
│  Saved to: pmf/value-prop.md                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: █████████████░░░░░░░  2/3 sections               │
│  Next: Aha Moments                                          │
└─────────────────────────────────────────────────────────────┘
```

## Section 3: Aha Moments (aha-moments-builder)

Capture the key benefits and realization moments:

### Questions to Ask (one at a time):

1. **What's the single most important "aha" moment?**
   - The realization that changes everything for users

2. **What are the 3 benefits you MUST deliver?**
   - The non-negotiable value they expect

3. **When do users "get it"?**
   - The moment they understand your value

4. **What proof points support your value?**
   - Evidence, results, testimonials (even hypothetical)

After these questions, save to `pmf/aha-moments.md`:

```
┌─────────────────────────────────────────────────────────────┐
│  AHA MOMENTS CAPTURED                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Core Aha: [The key realization]                            │
│                                                             │
│  Saved to: pmf/aha-moments.md                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████████████████████  3/3 sections               │
└─────────────────────────────────────────────────────────────┘
```

## Completion

When all 3 sections are complete:

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT LAYER COMPLETE                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Your context layer is ready:                               │
│                                                             │
│  [✓] pmf/icp.md                                             │
│  [✓] pmf/value-prop.md                                      │
│  [✓] pmf/aha-moments.md                                     │
│                                                             │
│  Claude will now reference these files when building        │
│  anything for your product - landing pages, copy,           │
│  features, documentation.                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  What's next?                                               │
│                                                             │
│  • Generate a landing page: /generate-assets landing        │
│  • Update a section: /update-icp, /update-value-prop,       │
│    /update-aha                                              │
│  • Check status: /pmf-status                                │
└─────────────────────────────────────────────────────────────┘

---
Created by Adi Shmorak, The P/MF Detective
For feedback: adi@adidacta.com
```

## Core Rules

- Ask ONE question at a time
- Wait for response before continuing
- Never skip sections without user consent
- Save each section before moving on
- Use AskUserQuestion for choices
- Include "Not sure" option that adds to Open Questions
- Show progress after each section (not after each question)

## Output Files

All outputs go to the `pmf/` folder:
- `pmf/icp.md` - Using template from `templates/outputs/icp.md`
- `pmf/value-prop.md` - Using template from `templates/outputs/value-prop.md`
- `pmf/aha-moments.md` - Using template from `templates/outputs/aha-moments.md`

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
