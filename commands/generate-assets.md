---
description: Generate marketing assets from PMF documents
argument-hint: <asset-type> [platform]
allowed-tools: Read, Write, Glob, Bash
---

# Generate Assets

Generate marketing and campaign assets based on completed PMF sprints.

## Available Asset Types

- `landing` - Generate a Next.js or React landing page
- `emails` - Generate email sequence templates
- `campaign facebook` - Generate Facebook ad campaign assets
- `campaign instagram` - Generate Instagram ad campaign assets
- `campaign linkedin` - Generate LinkedIn ad campaign assets

## Instructions

The user invoked this command with: $ARGUMENTS

1. Parse asset type from arguments
2. Check that required PMF documents exist:
   - Landing page requires: `pmf/value-proposition.md`, `pmf/brand-narrative.md`
   - Emails require: `pmf/value-proposition.md`, `pmf/offer/strategy.md`
   - Campaigns require: `pmf/offer/strategy.md` and approach-specific file

3. If prerequisites missing:
   "To generate [asset type], you need to complete the following sprints first:
    - [list missing prerequisites]

    Use /pmf-status to see your current progress."

4. If prerequisites met, read the relevant PMF documents and generate assets.

## Asset Generation

### Landing Page
Read:
- `pmf/value-proposition.md` - For hero copy and CTA
- `pmf/brand-narrative.md` - For problem/solution sections
- `pmf/mini-product-plan.md` - For features (if exists)
- `pmf/offer/strategy.md` - For offer details (if exists)

Generate a complete Next.js project with:
- Hero section with value proposition
- Problem section from brand narrative
- Solution section
- Features (if mini-product defined)
- CTA aligned with offer
- Tailwind CSS styling

### Email Sequence
Read:
- `pmf/value-proposition.md`
- `pmf/brand-narrative.md`
- `pmf/offer/strategy.md`

Generate:
- Welcome email
- Value delivery email
- Offer email
- Follow-up email

Output to: `pmf/emails/`

### Campaign Assets (Facebook/Instagram/LinkedIn)
Read:
- `pmf/icp-profile.md` - For targeting
- `pmf/value-proposition.md` - For copy
- `pmf/offer/strategy.md` - For offer details
- Approach-specific file from `pmf/offer/`

Generate:
- Ad copy variations (3-5)
- Targeting recommendations
- Format suggestions
- Visual brief for designers
- Video script (if applicable)

Output to: `pmf/campaigns/[platform]/`

## If No Argument Provided

Ask the user what they'd like to generate:

"What assets would you like to generate?

1. Landing page (Next.js)
2. Email sequence
3. Facebook campaign assets
4. Instagram campaign assets
5. LinkedIn campaign assets

Reply with a number or asset type."
