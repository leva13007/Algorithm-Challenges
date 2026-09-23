import { test } from 'node:test';
import assert from 'node:assert/strict';
import { longestCommonPrefix } from './solution.ts';

test('example 1: ["flower","flow","flight"]', () => {
  assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
});

test('example 2: ["dog","racecar","car"]', () => {
  assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '');
});

test('example 3: ["aaaa"]', () => {
  assert.equal(longestCommonPrefix(['aaaa']), 'aaaa');
});

test('example 4: [""]', () => {
  assert.equal(longestCommonPrefix(['']), '');
});

test('example 5: ["",""]', () => {
  assert.equal(longestCommonPrefix(['', '']), '');
});

test('example 6: ["aaa", "aaaa", "aaab", "ab"]', () => {
  assert.equal(longestCommonPrefix(['aaa', 'aaaa', 'aaab', 'ab']), 'a');
});

test.todo('edge cases');
