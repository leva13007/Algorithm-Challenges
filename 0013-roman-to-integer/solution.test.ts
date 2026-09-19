import { test } from 'node:test';
import assert from 'node:assert/strict';
import { romanToInt } from './solution.ts';

test('example 1: III', () => {
  assert.equal(romanToInt('III'), 3);
});

test('example 2: LVIII', () => {
  assert.equal(romanToInt('LVIII'), 58);
});

test('example 3: MCMXCIV', () => {
  assert.equal(romanToInt('MCMXCIV'), 1994);
});

test.todo('edge cases');
