---
description: Update your Value Proposition section
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion
---

# Update Value Prop

Update the Value Proposition section of your PMF context layer.

## Instructions

1. Check if `pmf/value-prop.md` exists
   - If exists: Read it and show summary, ask what to update
   - If not: Inform user and offer to create it

2. If file exists, show current state:

```
┌─────────────────────────────────────────────────────────────┐
│  CURRENT VALUE PROPOSITION                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Callout: [3-part descriptor]                                │
│  Magnet: [Desired future]                                    │
│  Message: [Selected value prop]                              │
│  CTA: [Call to action] → validation goal                     │
│                                                              │
│  Alternatives: [N] saved for A/B testing                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

3. Use AskUserQuestion: "What would you like to update about your value proposition?"

Options:
1. "The Callout" — description: "Refine what makes your ICP stop and say 'that's me'"
2. "The Magnet" — description: "Refine the desired future / promised outcome"
3. "The Message" — description: "Regenerate value prop options from current Callout + Magnet"
4. "CTA" — description: "Update the call to action (your validation goal)"
5. "Switch to an alternative" — description: "Promote a different angle to primary"
6. "Start over completely" — description: "Rebuild from scratch using value-prop-builder"

4. Handle each option:

### Option 1: The Callout
- Show current Callout (Identity, Context, Pain/Fear)
- Run Phase B from value-prop-builder (generate new Callout options from ICP data)
- After new Callout is set, regenerate value prop options (Phase D) and let user re-pick

### Option 2: The Magnet
- Show current Magnet
- Run Phase C from value-prop-builder (generate new Magnet options from ICP data)
- After new Magnet is set, regenerate value prop options (Phase D) and let user re-pick

### Option 3: The Message
- Keep current Callout + Magnet
- Regenerate 3-4 value prop options (Phase D) with different angles
- Let user pick a new one

### Option 4: CTA
- Show current CTA
- Ask user for new CTA
- Update only the CTA section

### Option 5: Switch to an alternative
- Show all alternative options from the file
- Let user pick which alternative to promote
- Swap: promoted option becomes Selected, old selected moves to Alternatives
- Update "Why not selected" on the demoted option

### Option 6: Start over
- Confirm with user
- Route to full value-prop-builder skill (Phases A-E)

5. Save the updated file to `pmf/value-prop.md`

## If No Value Prop Exists

Check if ICP exists first (`pmf/icp.md`):
- If ICP missing: "Define your ICP first, then create your value proposition."
- If ICP exists: Offer to create value proposition using value-prop-builder skill
