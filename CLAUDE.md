# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Scaffolded: `package.json` (scripts only, no dependencies), `scripts/new.ts`, and the first problem `0013-roman-to-integer`. `due`, `review` and `stats` are designed but not built — they are marked "planned" below; update this file when they exist.

Read `README.md` first (workflow and learning rules), then `PLAN.md` (topic order and shortlist). This project is its own git repo, independent of the `~/projects` root repo.

## Commands

```bash
npm test                                               # = node --test, every *.test.ts under the cwd
node --test 0013-roman-to-integer/solution.test.ts     # one problem

# scaffold a problem folder (solution stub + test skeleton + README with frontmatter)
npm run new -- 13 roman-to-integer --topic string --difficulty easy --sig "romanToInt(s: string): number"
```

`new` refuses an existing number and validates `--topic` (the slugs in `scripts/new.ts`) and `--difficulty`. The generated test file contains only `test.todo` placeholders — fill in the LeetCode examples; edge cases are the user's to write.

Planned npm scripts (not built): `due`, `review <num> <1-3>`, `stats`. See README.

## Node native TypeScript constraints

Tests and solutions run directly under Node's type stripping, with no compiler. This means:

- Relative imports need the extension: `import { f } from './solution.ts'`. Without `.ts` it fails with `ERR_MODULE_NOT_FOUND`.
- Only erasable syntax — no `enum`, `namespace`, or constructor parameter properties. Use `import type` for type-only imports.
- Types are not checked at run time. Type errors only show up if `tsc --noEmit` is added later.

## Conventions

**Problem folder:** `<4-digit LeetCode number>-<slug>/` with `solution.ts`, `solution.test.ts`, `README.md`. Review rounds are `solution.r2.ts`, `solution.r3.ts`, … in the same folder.

**Solution contract:** `solution.ts` exports the function with LeetCode's exact name and signature, so it can be pasted into LeetCode as-is. Don't define `ListNode`/`TreeNode` in the solution (LeetCode provides them); shared helpers belong in a `lib/` folder (planned) and may be imported as `import type` only, deleted before pasting.

**Tests:** `node:test` + `node:assert/strict`. The LeetCode examples plus own edge cases, written before the solution.

**Problem README.md** — frontmatter is the source of truth for scheduling and stats:

```yaml
---
leetcode: 13
title: Roman to Integer
url: https://leetcode.com/problems/roman-to-integer/
stream: https://youtube.com/live/YMHjY611XBA   # optional: stream where it was solved; empty if none
topic: string          # string | array | hash | two-pointers | sliding-window | stack-queue | linked-list | binary-search | tree | heap | graph | backtracking | dp
difficulty: easy       # easy | medium | hard
first_solved: 2026-09-19
hinted: false          # true if hints were used after the time-box
reviews: 0             # number of completed reviews
rating: 3              # last self-rating, 1-3
interval_days: 1
next_review: 2026-09-20
---
```

`new` creates the folder with `stream` (unless `--stream <url>` is given), `first_solved`, `rating`, `interval_days` and `next_review` empty — an empty `next_review` means "not solved yet" and must be skipped by `due`.

Body: `approach`, `complexity` (a guess before coding, the actual after), `pattern` (one sentence), `stuck on`.

**Scheduling formula:** after the first solve `interval_days = 1`. On each review with rating `r`: `1 → 1`, `2 → ceil(interval × 1.5)`, `3 → ceil(interval × 2.5)`; then `next_review = today + interval_days`, `reviews += 1`. `hinted` doesn't change the interval; it feeds `stats` and the topic gate.

**Topic gate:** move to the next topic once a Medium in the current one is solved with `hinted: false`. `PLAN.md` is a static shortlist — progress lives only in problem frontmatter, never in `PLAN.md`.

**Git:** one commit per problem, `0013 roman to integer`; a review is `0013 review r2`.

## Working with the user on problems

The point is learning, not throughput. Unless the user explicitly asks for it, give hints and questions before a full solution, and don't fix a solution the user is still within the time-box on. `PLAN.md` numbers were written from memory — check the number/title/difficulty against LeetCode before creating a folder.

## Open decisions

- How `solution.test.ts` covers review rounds (run the same cases against `solution.ts` and every `solution.rN.ts`, or test only the newest).
- Whether LeetCode's editor accepts `export function` as pasted — check on the first submission; if not, strip `export` before pasting (or have `new` generate it without).
- Whether to add `tsc --noEmit` for type checking.
