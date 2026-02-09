---
name: campaign-assets
description: >
  Generate marketing campaign assets for Facebook, Instagram, LinkedIn.
  Use when user says "create ads", "campaign assets", "ad copy",
  "Facebook ads", "Instagram ads", "LinkedIn ads", "targeting",
  "marketing materials", or needs promotion content.
allowed-tools: Read, Write, Glob
---

# Campaign Assets Generator

Generate complete marketing campaign assets for paid advertising.

## Prerequisites

Requires the PMF context layer:
- `pmf/icp.md` - Who the customer is
- `pmf/value-prop.md` - Why they should care
- `pmf/aha-moments.md` - Key benefits to highlight

If any are missing, inform the user:
```
To generate campaign assets, I need your PMF context layer.

Missing:
[ ] pmf/icp.md
[✓] pmf/value-prop.md
[ ] pmf/aha-moments.md

Use /plan-pmf to build your context layer first.
```

## Platform Options

Ask user:
```
Which platform are you creating ads for?

1. **Facebook/Instagram** (Meta)
2. **LinkedIn**
3. **Google Ads**
4. **All platforms**

Reply with a number.
```

## Assets Generated

### Ad Copy Package
- 3-5 headline variations
- 3-5 primary text variations
- CTA options
- Description variations (for search)

### Targeting Recommendations
- Demographics from ICP
- Interest targeting
- Behavior targeting
- Lookalike suggestions
- Exclusions

### Creative Brief
- Visual direction
- Image suggestions
- Video script (if applicable)
- Carousel structure
- Format recommendations

### Campaign Structure
- Campaign objective
- Ad set structure
- Budget recommendations
- Testing plan

## Output Format

Write to `pmf/campaigns/[platform]/`:

### `ad-copy.md`
```markdown
# Ad Copy - [Platform]

## Headlines
1. [Headline] - Focus: [Pain/Solution/Benefit]
2. [Headline] - Focus: [Different angle]
3. [Headline] - Focus: [Social proof angle]

## Primary Text

**Version 1 (Problem-focused)**
[Copy]

**Version 2 (Solution-focused)**
[Copy]

**Version 3 (Social proof)**
[Copy]

## CTAs
- [CTA option 1]
- [CTA option 2]
- [CTA option 3]
```

### `targeting.md`
```markdown
# Targeting - [Platform]

## Demographics
- Age: [Range]
- Gender: [If applicable]
- Location: [Geo]
- Language: [Language]

## Interests
- [Interest 1]
- [Interest 2]
- [Interest 3]

## Behaviors
- [Behavior 1]
- [Behavior 2]

## Exclusions
- [Exclude 1]
- [Exclude 2]

## Lookalike Suggestions
- [Source audience idea]
```

### `creative-brief.md`
```markdown
# Creative Brief - [Platform]

## Visual Direction
[Description of visual style, mood, colors]

## Image Recommendations
1. [Image concept 1]
2. [Image concept 2]
3. [Image concept 3]

## Video Script (15-30 sec)
[Scene-by-scene breakdown if applicable]

## Carousel Structure
Card 1: [Content]
Card 2: [Content]
Card 3: [Content]
Card 4: [CTA]

## Format Recommendations
- Primary: [Format]
- Secondary: [Format]
- Test: [Format]
```

### `campaign-structure.md`
```markdown
# Campaign Structure - [Platform]

## Objective
[Traffic/Conversions/Leads]

## Campaign Budget
[Recommendation based on testing]

## Ad Set Structure
- Ad Set 1: [Targeting angle]
- Ad Set 2: [Different targeting]
- Ad Set 3: [Lookalike]

## Testing Plan
Week 1: [Test X]
Week 2: [Test Y]

## Success Metrics
- CTR target: [X%]
- CPC target: [$X]
- Conversion target: [X]
```

## Generation Process

1. Read PMF context files:
   - `pmf/icp.md` - For targeting
   - `pmf/value-prop.md` - For messaging
   - `pmf/aha-moments.md` - For benefits
2. Generate platform-specific assets
3. Save to campaign folder

## After Generation

```
Your campaign assets have been generated!

**Files created:**
- pmf/campaigns/[platform]/ad-copy.md
- pmf/campaigns/[platform]/targeting.md
- pmf/campaigns/[platform]/creative-brief.md
- pmf/campaigns/[platform]/campaign-structure.md

**Next steps:**
1. Review and customize the copy
2. Create visuals based on the brief
3. Set up campaign in ads manager
4. Start with testing budget
5. Track and optimize

Need help with a different platform? Just ask!

Created by Adi Shmorak, The P/MF Detective
```
