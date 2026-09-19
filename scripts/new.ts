import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const TOPICS = [
  'string', 'array', 'hash', 'two-pointers', 'sliding-window', 'stack-queue', 'linked-list',
  'binary-search', 'tree', 'heap', 'graph', 'backtracking', 'dp',
];
const DIFFICULTIES = ['easy', 'medium', 'hard'];

const USAGE = `usage: npm run new -- <number> <slug> --topic <topic> --difficulty <difficulty> --sig "<signature>" [--title "<title>"] [--stream "<url>"]

  npm run new -- 13 roman-to-integer --topic string --difficulty easy --sig "romanToInt(s: string): number"

  topic:       ${TOPICS.join(' | ')}
  difficulty:  ${DIFFICULTIES.join(' | ')}
  sig:         LeetCode's function name and signature, exactly as in the editor
  title:       defaults to the slug in Title Case
  stream:      link to the stream where the problem was solved; can be filled in later`;

function fail(message: string): never {
  console.error(`${message}\n\n${USAGE}`);
  process.exit(1);
}

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    topic: { type: 'string' },
    difficulty: { type: 'string' },
    sig: { type: 'string' },
    title: { type: 'string' },
    stream: { type: 'string' },
  },
});

const [num, slug] = positionals;
if (!num || !/^\d+$/.test(num)) fail('missing or invalid <number>');
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail('missing or invalid <slug> (lowercase, dash-separated)');
if (!values.topic || !TOPICS.includes(values.topic)) fail('missing or unknown --topic');
if (!values.difficulty || !DIFFICULTIES.includes(values.difficulty)) fail('missing or unknown --difficulty');
const fnName = values.sig?.match(/^([A-Za-z_]\w*)\(.*\):\s*\S.*$/)?.[1];
if (!values.sig || !fnName) fail('missing or invalid --sig, expected: name(args): returnType');

const title = values.title ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
const padded = num.padStart(4, '0');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

if (readdirSync(root).some((name) => name.startsWith(`${padded}-`))) fail(`problem ${padded} already exists`);
const dir = join(root, `${padded}-${slug}`);
if (existsSync(dir)) fail(`${dir} already exists`);
mkdirSync(dir);

writeFileSync(join(dir, 'solution.ts'), `export function ${values.sig} {
  throw new Error('not implemented');
}
`);

writeFileSync(join(dir, 'solution.test.ts'), `import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ${fnName} } from './solution.ts';

test.todo('LeetCode examples');
test.todo('edge cases');
`);

writeFileSync(join(dir, 'README.md'), `---
leetcode: ${Number(num)}
title: ${title}
url: https://leetcode.com/problems/${slug}/
stream:${values.stream ? ` ${values.stream}` : ''}
topic: ${values.topic}
difficulty: ${values.difficulty}
first_solved:
hinted: false
reviews: 0
rating:
interval_days:
next_review:
---

# ${Number(num)}. ${title}

## approach

## complexity

- guess (before coding):
- actual:

## pattern

## stuck on
`);

console.log(`created ${padded}-${slug}/ (solution.ts, solution.test.ts, README.md)`);
