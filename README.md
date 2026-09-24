---
status: idea
category: learning
stack: TypeScript, Node.js
---

# algo_tasks

LeetCode practice log with a learning system on top: topics in a fixed order, difficulty ramping inside each topic, and a spaced-repetition schedule so solved problems come back before they're forgotten. The goal is a long-term foundation (and material for IT Friday / YouTube), not a solved-problem count.

## how a problem works

One folder per LeetCode problem, named `<4-digit number>-<slug>`:

```
0013-roman-to-integer/
  solution.ts        # exports the function with LeetCode's exact signature
  solution.test.ts   # node:test — LeetCode examples + own edge cases
  README.md          # frontmatter (topic, difficulty, review schedule) + notes
```

1. Pick the next problem from [PLAN.md](./PLAN.md), or one that is due for review.
2. Write tests and a complexity guess first, then the solution.
3. Run: `node --test 0013-roman-to-integer/solution.test.ts` (Node 24 runs `.ts` natively — no build, no dependencies).
4. When green, paste the solution into LeetCode.
5. Write the pattern down in one sentence, rate the attempt 1–3, commit (`0013 roman to integer`).

## learning system

**Topics, in order** (structures → techniques): String → Array → Hash Map/Set → Two Pointers → Sliding Window → Stack/Queue → Linked List → Binary Search → Trees/Tries → Heap → Graphs → Backtracking → DP. Full shortlist in [PLAN.md](./PLAN.md).

**Topic gate:** difficulty ramps Easy → Medium inside a topic. Move on only after solving a Medium without hints — no fixed problem count.

**Rules per problem:**
- 30–45 min for an independent attempt. After that hints are allowed, but the problem is marked `hinted: true` and comes back sooner.
- Tests and the expected complexity are written before the code.
- On a review, re-solve from scratch (`solution.r2.ts`, `solution.r3.ts`, …) without looking at the old solution.
- After every problem, the pattern in one sentence ("two pointers from both ends when the array is sorted").

**Spaced repetition:** every problem has a `next_review` date in its frontmatter. First solve → back in 1 day. After each review, rate 1–3:

| rating | meaning | next interval |
|--------|---------|---------------|
| 1 | couldn't solve / needed a hint | 1 day |
| 2 | solved, but with effort | `ceil(interval × 1.5)` |
| 3 | clean, within the time-box | `ceil(interval × 2.5)` |

**Rhythm:** every session starts with due reviews; a new problem only after the overdue ones are done.

## scripts

npm scripts, zero dependencies:

| script | does |
|--------|------|
| `npm test` | runs every test (`node --test`) |
| `npm run new -- <num> <slug> --topic … --difficulty … --sig "…"` | scaffolds the problem folder: signature stub, test skeleton, README with frontmatter |

Running the tests of one problem (from the repo root):

```bash
node --test 0125-valid-palindrome/solution.test.ts                                   # one problem
node --test 0125-valid-palindrome/                                                   # every test file in the folder (incl. review rounds)
node --test --watch 0125-valid-palindrome/solution.test.ts                           # re-run on save
node --test --test-name-pattern="example 2" 0125-valid-palindrome/solution.test.ts   # only tests whose name matches
```

Planned, not built yet:

| script | does |
|--------|------|
| `due` | lists problems with `next_review <= today`, most overdue first |
| `review <num> <1-3>` | updates the frontmatter after a review (new date, interval, counter) |
| `stats` | problems per topic/difficulty, average rating, weak topics; can render a table into this README |

## where I left off

Design agreed in a Q&A session on 2026-09-19. Scaffolding is done (`package.json`, `new` script) and `0013-roman-to-integer` is created with the LeetCode examples as tests (red, solution not written yet).

## next step

Solve `0013-roman-to-integer`: add your own edge cases and a complexity guess first, then implement `romanToInt` until `npm test` is green.

## resources

- [PLAN.md](./PLAN.md) — topic order and problem shortlist
- [CLAUDE.md](./CLAUDE.md) — conventions, frontmatter schema, scheduling formula
