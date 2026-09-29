import { test } from 'node:test';
import assert from 'node:assert/strict';
import { firstUniqChar } from './solution.ts';

test('example 1: "leetcode"', () => {
  assert.equal(firstUniqChar('leet'), 0);
});

test('example 2: "loveleetcode"', () => {
  assert.equal(firstUniqChar('loveleetcode'), 2);
});

test('example 3: "aabb"', () => {
  assert.equal(firstUniqChar('aabb'), -1);
});

test.todo('edge cases');
