---
name: plan-pmf-mode
description: >
  Guide users through building their complete PMF context layer.
  Triggered by /plan-pmf command or when user wants to build full context.
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion, Task
---

# PMF Plan Mode - Full Context Builder

You guide product builders through creating their complete PMF context layer in sequence: ICP → Value Proposition → Landing Page → Aha Moments → Validation Plan.

**Important:** The context layer is based on **assumptions**. The validation plan helps test those assumptions with real market signals.

## Your Role

- Walk users through all sections in order
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
│  We'll work through 5 steps:                                │
│  1. ICP - Who your customer is (assumption)                 │
│  2. Value Proposition - Why they should care (assumption)   │
│  3. Landing Page - Test your message in the real world      │
│  4. Aha Moments - Key benefits you must deliver (assumption)│
│  5. Validation Plan - How you'll test these assumptions     │
│                                                             │
│  Each section becomes a reference file Claude uses          │
│  when building anything for your product.                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Section 1: ICP (icp-builder)

**Delegate the full ICP process to the icp-builder skill.** Do NOT ask inline ICP questions here — the icp-builder handles all 5 phases:

1. Context & Broad Target (2 questions)
2. Pain Discovery with 5 Whys (3-6 questions)
3. Hypothesis Formation (2-3 questions, produces 3 hypotheses)
4. Parallel Research (automated — launches 3 research agents)
5. Compare & Select (user picks the strongest hypothesis)

Run the full icp-builder flow. When it completes and saves `pmf/icp.md`, show the transition:

```
┌─────────────────────────────────────────────────────────────┐
│  ICP DEFINED                                                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Selected: [Hypothesis name]                                 │
│  Who: [Filtered persona summary]                             │
│  Pain: "[Emotional bedrock]"                                 │
│  Evidence: Pain [X]/5 │ Access [X]/5 │ Evidence [X]/5        │
│                                                              │
│  Saved to: pmf/icp.md                                        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░░░░░░░░░  1/5 steps                  │
│  Next: Value Proposition                                     │
└─────────────────────────────────────────────────────────────┘
```

## Section 2: Value Proposition (value-prop-builder)

**Delegate the full value prop process to the value-prop-builder skill.** Do NOT ask inline value prop questions here — the value-prop-builder handles all 5 phases:

1. Phase A: ICP Review (automated — reads pmf/icp.md)
2. Phase B: Craft the Mirror (2-3 questions)
3. Phase C: Craft the Magnet (2-3 questions)
4. Phase D: Generate Value Prop Options (1 question)
5. Phase E: Gap Fill (0-1 questions)

Run the full value-prop-builder flow. When it completes and saves `pmf/value-prop.md`, show the transition:

```
┌─────────────────────────────────────────────────────────────┐
│  VALUE PROPOSITION DEFINED                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Callout: [Descriptor]                                       │
│  Magnet: [Desired future]                                    │
│  Message: [Selected value prop]                              │
│  CTA: [Action] → validation goal                             │
│                                                              │
│  Saved to: pmf/value-prop.md                                 │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████████░░░░░░░░░░░░  2/5 steps                  │
│  Next: Landing Page                                          │
└─────────────────────────────────────────────────────────────┘
```

## Section 3: Landing Page (landing-generator)

Now that the ICP and value proposition are defined, offer to generate a landing page to test the message in the real world.

Use AskUserQuestion: "Your ICP and value prop are ready. Want to generate a landing page to test your message, or skip to Aha Moments?"

Options: "Generate landing page" / "Skip to Aha Moments"

If generating: Run the landing-generator skill. It reads `pmf/icp.md` and `pmf/value-prop.md` to build the page.

```
┌─────────────────────────────────────────────────────────────┐
│  LANDING PAGE GENERATED                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Output: landing/ folder                                     │
│  Run: cd landing && npm install && npm run dev               │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Progress: ████████████░░░░░░░░  3/5 steps                   │
│  Next: Aha Moments                                           │
└─────────────────────────────────────────────────────────────┘
```

## Section 4: Aha Moments (aha-moments-builder)

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
│  Progress: ████████████████░░░░  4/5 steps                   │
│  Next: Validation Plan                                      │
└─────────────────────────────────────────────────────────────┘
```

## Section 5: Validation Plan (validation-plan-builder)

The context layer is based on assumptions. Now help the user plan how to validate them.

### Framing

"Your ICP, value prop, and aha moments are assumptions until validated. Let's create a plan to test them with real market signals."

Read `pmf/value-prop.md` and pull the CTA — this is the user's validation goal (the action they're asking people to take). Use it to ground the validation plan.

### Questions to Ask (one at a time):

1. **What validation metric makes sense for your stage?**
   - Default to the CTA from the value prop (e.g., "Try it free" → free trial signups, "Join the waitlist" → waitlist signups)
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
│  Progress: ████████████████████  5/5 steps                   │
└─────────────────────────────────────────────────────────────┘
```

## Completion

When all sections are complete:

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
