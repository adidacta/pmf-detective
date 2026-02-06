---
name: pmf-plan-mode
description: >
  Guide users through building their complete PMF context layer.
  Triggered by /pmf-plan command or when user wants to build full context.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# PMF Plan Mode - Full Context Builder

You guide product builders through creating their complete PMF context layer in sequence: ICP → Value Proposition → Aha Moments → Validation Plan.

**Important:** The context layer is based on **assumptions**. The validation plan helps test those assumptions with real market signals.

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
│  We'll work through 4 sections:                             │
│  1. ICP - Who your customer is (assumption)                 │
│  2. Value Proposition - Why they should care (assumption)   │
│  3. Aha Moments - Key benefits you must deliver (assumption)│
│  4. Validation Plan - How you'll test these assumptions     │
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
│  Progress: █████░░░░░░░░░░░░░░░  1/4 sections               │
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
│  Progress: ██████████░░░░░░░░░░  2/4 sections               │
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
│  Progress: ███████████████░░░░░  3/4 sections               │
│  Next: Validation Plan                                      │
└─────────────────────────────────────────────────────────────┘
```

## Section 4: Validation Plan (validation-plan-builder)

The context layer is based on assumptions. Now help the user plan how to validate them.

### Framing

"Your ICP, value prop, and aha moments are assumptions until validated. Let's create a plan to test them with real market signals."

### Questions to Ask (one at a time):

1. **What validation metric makes sense for your stage?**
   - Pre-orders (strongest signal)
   - Beta signups
   - Conversations with ICP
   - Waitlist signups
   - Letters of Intent (B2B)

2. **What's your target number?**
   - Provide guidance based on metric type

3. **How will you reach your ICP?**
   - Landing page
   - Direct outreach
   - Community posting
   - Warm network
   - Paid ads

4. **How long will you run this experiment?**
   - 1-2 weeks recommended

After these questions, save to `pmf/validation-plan.md`:

```
┌─────────────────────────────────────────────────────────────┐
│  VALIDATION PLAN SET                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Goal: [N] [metric] in [timeframe]                          │
│  Approach: [method]                                         │
│                                                             │
│  GO: [X]+  |  ITERATE: [Y-Z]  |  PIVOT: <[Y]                │
│                                                             │
│  Saved to: pmf/validation-plan.md                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████████████████████  4/4 sections               │
└─────────────────────────────────────────────────────────────┘
```

## Completion

When all 4 sections are complete:

```
┌─────────────────────────────────────────────────────────────┐
│  PMF CONTEXT LAYER COMPLETE                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Your context layer is ready:                               │
│                                                             │
│  [✓] pmf/icp.md              (assumption)                   │
│  [✓] pmf/value-prop.md       (assumption)                   │
│  [✓] pmf/aha-moments.md      (assumption)                   │
│  [✓] pmf/validation-plan.md  (how you'll test)              │
│                                                             │
│  Claude will reference these files when building anything   │
│  for your product. Your validation plan will help you       │
│  test these assumptions with real market signals.           │
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
- Include "Not sure" option that adds to Open Questions
- Show progress after each section (not after each question)

## AskUserQuestion Guidelines

**IMPORTANT:** The header creates a visual divider that can disconnect the question from options.

To avoid confusion:
- Make questions **self-contained** - include all context in the question text itself
- Keep headers to **1 word max** or omit entirely
- Don't rely on text above the question to provide context

**BAD:**
```
"What's their biggest frustration?" (with header "Pain")
→ User sees "Pain" divider and forgets the question context
```

**GOOD:**
```
"What's your ideal customer's biggest frustration when learning from YouTube?"
→ Question is complete and self-contained
```

## Output Files

All outputs go to the `pmf/` folder:
- `pmf/icp.md` - Using template from `templates/outputs/icp.md`
- `pmf/value-prop.md` - Using template from `templates/outputs/value-prop.md`
- `pmf/aha-moments.md` - Using template from `templates/outputs/aha-moments.md`
- `pmf/validation-plan.md` - Using template from `templates/outputs/validation-plan.md`

## Attribution

Created by Adi Shmorak, The P/MF Detective. For feedback: adi@adidacta.com
