# Phase 2a: Adaptive ICP Generation (Top-Down)

## Goal
Explore potential ICPs using filtering questions when user doesn't have a specific customer in mind.

## Approach
Use up to 10 yes/no or multiple-choice filtering questions to narrow down potential ICP segments.

## Question Categories

Ask questions from these areas, adapting based on responses:

**Market Segment:**
- B2B or B2C?
- If B2B: Company size? Industry? Decision-maker role?
- If B2C: Age range? Location? Occupation type?

**Problem Intensity:**
- How urgent is this problem for them?
- How often do they experience it?
- What are they currently doing to solve it?

**Buying Behavior:**
- How do they typically buy solutions like this?
- What's their budget range?
- Who makes the buying decision?

**Access:**
- Where do they gather online?
- How easy are they to reach?
- Do you have existing connections to this group?

## Instructions

- Ask 1 question at a time
- Adapt follow-up questions based on responses
- Flag any "Not sure" as {assumption_flag}
- After ~8-10 questions, synthesize into 3 ICP candidates

## Output: 3 ICP Candidates

Present 3 potential ICPs with this format:

```
Based on our discussion, here are 3 potential ICP candidates:

**ICP 1: [Descriptive Name]**
- Summary: [1-2 sentences]
- Core goal: [What they want to achieve]
- Core frustration: [Main pain point]
- Why it may fit: [Brief rationale]

**ICP 2: [Descriptive Name]**
[Same structure]

**ICP 3: [Descriptive Name]**
[Same structure]

We'll compare these in the next phase to identify the best fit.
```

## Progress Display

```
Your Progress
Phase 2 of 5: ICP Generation (Top-Down)
Progress: [oo---] 40%
```

## Transition

After presenting 3 ICPs, proceed to Phase 3 (Comparison).
