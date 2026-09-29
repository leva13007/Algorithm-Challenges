import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValid } from './solution.ts';

test('example 1: "()"', () => {
  assert.equal(isValid('()'), true);
});

test('example 2: "()[]{}"', () => {
  assert.equal(isValid('()[]{}'), true);
});

test('example 3: "(]"', () => {
  assert.equal(isValid('(]'), false);
});

test('example 4: "([])"', () => {
  assert.equal(isValid('([])'), true);
});

test('example 5: "([)]"', () => {
  assert.equal(isValid('([)]'), false);
});

test('example 6: ")}]"', () => {
  assert.equal(isValid(')}]'), false);
});

test('example 6: ")"', () => {
  assert.equal(isValid(')'), false);
});

test.todo('edge cases');
