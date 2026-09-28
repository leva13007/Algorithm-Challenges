import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverseString } from './solution.ts';

// in-place: the function returns nothing, the input array itself must change
test('example 1: ["h","e","l","l","o"]', () => {
  const s = ['h', 'e', 'l', 'l', 'o'];
  assert.equal(reverseString(s), undefined);
  assert.deepEqual(s, ['o', 'l', 'l', 'e', 'h']);
});

test('example 2: ["H","a","n","n","a","h"]', () => {
  const s = ['H', 'a', 'n', 'n', 'a', 'h'];
  assert.equal(reverseString(s), undefined);
  assert.deepEqual(s, ['h', 'a', 'n', 'n', 'a', 'H']);
});

test.todo('edge cases');
