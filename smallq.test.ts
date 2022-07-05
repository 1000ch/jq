import {expect, test} from 'vitest';
import {SmallQ, $} from './smallq.js';

test('SmallQ', () => {
  expect($('div')).toBeInstanceOf(SmallQ);
  expect($('div').elements).toBeInstanceOf(Array);
  expect($('div').events).toBeInstanceOf(WeakMap);
});

test('DOM manipulation', () => {
  const div1 = document.createElement('div');
  document.documentElement.append(div1);
  expect($('div').length).toBe(1);
});
