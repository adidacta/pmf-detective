# TODO — PMF Detective Plugin

## ~~1. Naming mismatch: `aha-moments` vs `MVP PRD`~~ DONE

Renamed to MVP everywhere. Skill is now `mvp-builder`, file is `pmf/mvp.md`, command is `/update-mvp`. Aha moment remains as the internal method within the skill.

---

## ~~2. `plan-pmf-mode` says "delegate" but can't actually delegate~~ DONE

Reframed all "delegate to" → "follow the flow defined in." Added "How This Skill Works" section explaining the orchestration model.

---

## ~~3. Box-drawing alignment inconsistency~~ DONE

Standardized all boxes to 63-char inner width across 14 files using automated script.

---

## ~~4. `landing/` folder is a generated artifact in the repo~~ ALREADY DONE

`.gitignore` already excludes `landing/`, `pmf/`, `test/`, and `*.png`. None are tracked in git.

---

## ~~5. `test/` directory has stale files with old naming~~ DONE

Deleted `test/` directory. Was already excluded from git via `.gitignore`.

---

## ~~6. No guidance on committing `pmf/` files~~ DONE

Added commit guidance to README.md under the context layer section.

---

## ~~7. `landing-generator` output structure missing config files~~ DONE

Added `vite.config.ts`, `tsconfig.json`, and `postcss.config.js` to the output structure in `landing-generator/SKILL.md`.

---

## ~~8. Stale `icp-assistant` skill registration~~ NOT IN THIS REPO

No files or references exist in this repo. The registration comes from an old plugin install. Run `/plugin list` to find and remove it from Claude Code settings.

---

## ~~9. Outreach builder needs concrete message templates~~ DONE

Added 3 outreach templates (Reddit/forum, DM/email, community ask) to `outreach-builder/SKILL.md` Phase B.

---

## ~~10. Add "Not sure (needs research)" to all multi-choice questions~~ DONE

- Added core rule to CLAUDE.md requiring "Not sure (needs research)" on every question type
- Updated core rules in all 6 skills to use consistent phrasing
- Fixed all bare "Not sure" options across: mvp-builder (Phase E, F), validation-plan-builder (all Phase B/C questions), outreach-builder (Phase C), icp-builder (hypothesis 3)
- All "Not sure" selections now explicitly route to Open Questions with context

---

## ~~11. B2B ICPs should include success KPIs~~ DONE

- Added "How They Measure Success" section to `templates/outputs/icp.md` (conditional, B2B only)
- Added B2B KPI question to `icp-builder` Gap Fill phase
- Updated `value-prop-builder` Phase A to extract KPIs, Phase C to ground Magnet in KPIs for B2B
- Updated `landing-generator` Benefits section to frame around KPIs for B2B pages
