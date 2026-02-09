---
description: Update your ICP section
allowed-tools: Read, Write, Glob, WebSearch, AskUserQuestion, Task
---

# Update ICP

Update the ICP (Ideal Customer Profile) section of your PMF context layer.

## Instructions

1. Check if `pmf/icp.md` exists
   - If exists: Read it and show summary, then present update menu
   - If not: Inform user and offer to create it (trigger icp-builder skill)

2. If file exists, show current state:

```
┌─────────────────────────────────────────────────────────────┐
│  CURRENT ICP                                                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Selected: [Hypothesis name]                                 │
│  Who: [Filtered persona summary]                             │
│  Pain: "[Emotional bedrock]"                                 │
│  Evidence: Pain [X]/5 │ Access [X]/5 │ Evidence [X]/5        │
│                                                              │
│  Alternatives on file:                                       │
│  • [Hypothesis B name]                                       │
│  • [Hypothesis C name]                                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

3. Use AskUserQuestion with this menu:

"What would you like to update about your ICP?"

Options:
1. **Who They Are** — Refine persona filters (company stage, tools, behaviors)
2. **Their Pain** — Re-run 5 Whys deep dive to find emotional bedrock
3. **What They Want** — Update goals and desired outcomes
4. **How They Talk About It** — Update language and phrases
5. **Where To Find Them** — Update channels and communities
6. **Switch to an alternative ICP** — Promote one of the alternative hypotheses
7. **Re-run research validation** — Launch fresh research agents for updated scores
8. **Start over completely** — Re-run the full ICP builder from scratch

## Option Details

### Options 1, 3, 4, 5: Section updates
- Ask targeted follow-up questions for the selected section
- Update only that section in `pmf/icp.md`
- Preserve all other sections unchanged

### Option 2: Their Pain (re-run 5 Whys)
- Start from the current surface symptom
- Re-run the 5 Whys drilling process to find deeper emotional bedrock
- Update the "Their Pain" section with new emotional bedrock and surface symptom
- Flag if the new pain differs significantly from what research validated

### Option 6: Switch to an alternative ICP
- Read the Alternative Hypotheses section from `pmf/icp.md`
- Display the alternatives with their scores
- Use AskUserQuestion to let user pick which alternative to promote
- Promote the selected alternative to "Selected ICP" position
- Demote the current selected ICP to "Alternative Hypotheses" section
- Ask gap-fill questions for any missing fields on the newly promoted ICP (goals, language, channels)
- Save updated file

### Option 7: Re-run research validation
- Launch 3 Task agents in parallel (same as icp-builder Phase D)
- Research the current selected ICP + both alternatives with fresh web searches
- Update all research validation scores and key evidence
- Display updated comparison table

### Option 8: Start over completely
- Confirm with user ("This will replace your current ICP. Are you sure?")
- Trigger the full icp-builder skill from Phase A

## If No ICP Exists

```
No ICP defined yet.

Would you like to define your ICP now?
This will walk you through defining who your ideal customer is,
with research-backed validation.
```

Then trigger the icp-builder skill.
