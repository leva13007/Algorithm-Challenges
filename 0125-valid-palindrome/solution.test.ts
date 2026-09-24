import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from './solution.ts';

test('example 1: "A man, a plan, a canal: Panama"', () => {
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
});

test('example 2: "race a car"', () => {
  assert.equal(isPalindrome('race a car'), false);
});

test('example 3: " "', () => {
  assert.equal(isPalindrome(' '), true);
});

test.todo('edge cases');
