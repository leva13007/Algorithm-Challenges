import { test } from 'node:test';
import assert from 'node:assert/strict';
import { myAtoi } from './solution.ts';

test('example 1: "42"', () => {
  assert.equal(myAtoi('42'), 42);
});

test('example 2: " -042"', () => {
  assert.equal(myAtoi(' -042'), -42);
});

test('example 3: "1337c0d3"', () => {
  assert.equal(myAtoi('1337c0d3'), 1337);
});

test('example 4: "0-1"', () => {
  assert.equal(myAtoi('0-1'), 0);
});

test('example 5: "words and 987"', () => {
  assert.equal(myAtoi('words and 987'), 0);
});

test('example 6: "       42   "', () => {
  assert.equal(myAtoi('       42   '), 42);
});

test('example 7: "3-1"', () => {
  assert.equal(myAtoi('3-1'), 3);
});

const INT_MAX = 2 ** 31 - 1; //  2147483647
const INT_MIN = -(2 ** 31); // -2147483648

test('rounding: exactly INT_MAX stays as is', () => {
  assert.equal(myAtoi('2147483647'), INT_MAX);
});

test('rounding: exactly INT_MIN stays as is', () => {
  assert.equal(myAtoi('-2147483648'), INT_MIN);
});

test('rounding: INT_MAX + 1 is clamped to INT_MAX', () => {
  assert.equal(myAtoi('2147483648'), INT_MAX);
});

test('rounding: INT_MIN - 1 is clamped to INT_MIN', () => {
  assert.equal(myAtoi('-2147483649'), INT_MIN);
});

test('rounding: huge positive is clamped to INT_MAX', () => {
  assert.equal(myAtoi('91283472332'), INT_MAX);
});

test('rounding: huge negative is clamped to INT_MIN', () => {
  assert.equal(myAtoi('-91283472332'), INT_MIN);
});

test('rounding: far beyond Number.MAX_SAFE_INTEGER is clamped', () => {
  assert.equal(myAtoi('99999999999999999999999999999'), INT_MAX);
  assert.equal(myAtoi('-99999999999999999999999999999'), INT_MIN);
});

test('rounding: leading zeros do not count toward overflow', () => {
  assert.equal(myAtoi('00000000000002147483647'), INT_MAX);
});

test('rounding: explicit "+" sign still clamps', () => {
  assert.equal(myAtoi('+2147483648'), INT_MAX);
});

test('edge: empty string', () => {
  assert.equal(myAtoi(''), 0);
});

test('edge: only whitespace', () => {
  assert.equal(myAtoi(' '), 0);
  assert.equal(myAtoi('     '), 0);
});

test.todo('edge cases');
