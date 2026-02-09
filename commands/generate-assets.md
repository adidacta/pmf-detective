---
description: Generate marketing assets from PMF context layer
argument-hint: <asset-type>
allowed-tools: Read, Write, Glob, Bash
---

# Generate Assets

Generate marketing assets based on your PMF context layer.

## Available Asset Types

- `landing` - Generate a Next.js or React landing page

## Instructions

The user invoked this command with: $ARGUMENTS

1. Parse asset type from arguments

2. Check that required PMF context files exist:
   - `pmf/icp.md` - Who your customer is
   - `pmf/value-prop.md` - Why they should care
   - `pmf/aha-moments.md` - Key benefits to highlight

3. If prerequisites missing:
   ```
   To generate [asset type], I need your PMF context layer.

   Missing:
   [ ] pmf/icp.md
   [✓] pmf/value-prop.md
   [ ] pmf/aha-moments.md

   Use /plan-pmf to build your context layer first.
   ```

4. If prerequisites met, read the PMF context files and generate assets using the landing-generator skill.

## Asset Generation

### Landing Page
Read:
- `pmf/icp.md` - For targeting and language
- `pmf/value-prop.md` - For hero copy, StoryBrand sections
- `pmf/aha-moments.md` - For benefits and proof points

Generate using the landing-generator skill.

## If No Argument Provided

Ask the user what they'd like to generate:

```
What assets would you like to generate?

1. Landing page (Next.js or React)

Reply with a number or asset type.
```
