import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnagram } from './solution.ts';

test('example 1: "anagram", "nagaram"', () => {
  assert.equal(isAnagram('anagram', 'nagaram'), true);
});

test('example 2: "rat", "car"', () => {
  assert.equal(isAnagram('rat', 'car'), false);
});

test.todo('edge cases');

// Follow up: What if the inputs contain Unicode characters?
test('unicode: cyrillic', () => {
  assert.equal(isAnagram('кіт', 'тік'), true);
  assert.equal(isAnagram('кіт', 'кит'), false);
});

test('unicode: emoji (surrogate pairs)', () => {
  assert.equal(isAnagram('😀😃a', 'a😃😀'), true);
  assert.equal(isAnagram('😀', '😃'), false);
});

test('unicode: same UTF-16 code units, different code points', () => {
  // '😀🤣' = D83D DE00 D83E DD23; '🔣🨀' = D83D DD23 D83E DE00
  // Counting s[i] (code units) says anagram, counting code points says not.
  assert.equal(isAnagram('😀🤣', '🔣🨀'), false);
});

test('unicode: precomposed vs decomposed "é" (NFC vs NFD)', () => {
  // 'café' (é = one code point) vs 'fac' + 'é' (e + combining acute)
  assert.equal(isAnagram('café', 'facé'), true);
});
