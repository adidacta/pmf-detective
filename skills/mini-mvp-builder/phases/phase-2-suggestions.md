# Phase 2: Mini-MVP Selection

## Goal
Present 2-3 mini-MVP ideas and help user select one.

## Important: Claude Can Build

When suggesting mini-MVPs, remember that Claude Code can help execute most of these. Don't limit suggestions based on perceived user skills - expand what's possible.

**Claude can help build:**
- Landing pages (Next.js, React, HTML/CSS)
- Content (copy, emails, guides, PDFs)
- Simple tools and calculators
- Templates and frameworks
- Automation workflows

## Suggestion Criteria

Each suggestion must:
1. Solve an ICP problem (from `pmf/icp-profile.md`)
2. Validate the value proposition (from `pmf/value-proposition.md`)
3. Be buildable quickly with Claude's help
4. Provide a clear validation signal

## Mini-MVP Types

**For users WITHOUT existing products:**

| Type | What It Is | Best For |
|------|------------|----------|
| Landing page + waitlist | Simple page capturing interest | Testing if ICP cares |
| Custom GPT + landing | AI assistant solving ICP problem | Tech-forward ICPs |
| Notion template | Structured resource on Gumroad | Process/workflow problems |
| Email course | 3-5 email sequence | Educational value props |
| PDF guide/playbook | Downloadable resource | Quick wins |
| Calculator/tool | Interactive solution | Quantifiable problems |

**For users WITH existing products:**

| Type | What It Is | Best For |
|------|------------|----------|
| Landing page redesign | New positioning for ICP | Testing messaging |
| Lead magnet | Resource attracting ICP | Building audience |
| Demo video + CTA | Show product to ICP | Existing features |

## Use AskUserQuestion

Present options with selection interface:

```
questions: [
  {
    question: "Which mini-MVP do you want to build?",
    header: "Mini-MVP",
    multiSelect: false,
    options: [
      { label: "[Option 1 Name]", description: "[Brief: what + validation signal]" },
      { label: "[Option 2 Name]", description: "[Brief: what + validation signal]" },
      { label: "[Option 3 Name]", description: "[Brief: what + validation signal]" },
      { label: "Not sure", description: "Help me decide" }
    ]
  }
]
```

## Before the Question

Show options in a visual format:

```
┌─────────────────────────────────────────────────────────────┐
│  🎯 MINI-MVP OPTIONS                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Option 1: [Name]                                           │
│  • What: [Brief description]                                │
│  • Validates: [What you'll learn]                           │
│  • Claude helps: [What Claude can build]                    │
│                                                             │
│  Option 2: [Name]                                           │
│  • What: [Brief description]                                │
│  • Validates: [What you'll learn]                           │
│  • Claude helps: [What Claude can build]                    │
│                                                             │
│  Option 3: [Name]                                           │
│  • What: [Brief description]                                │
│  • Validates: [What you'll learn]                           │
│  • Claude helps: [What Claude can build]                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Handling "Not sure"

If user selects "Not sure":
- Ask clarifying question about their preference
- What matters more: speed, depth of validation, type of signal?
- Make a recommendation based on their answer

## After Selection

Once user selects, briefly confirm:
- What they'll build
- What deliverables they'll have
- What validation signal they'll get

Then proceed to Phase 3 (Task List).

## Phase Completion

```
┌─────────────────────────────────────────┐
│  Phase 2 Complete: Mini-MVP Selection   │
│  ████████████░░░░░░░░  2/3 phases       │
└─────────────────────────────────────────┘
```
