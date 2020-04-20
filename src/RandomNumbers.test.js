import React from 'react';
import RandomNumbers from './RandomNumbers';

test('RandomNumbers should have  numbers', () => {
  var maxId = 100
  var excludeId = 1
  var ids = RandomNumbers(excludeId, maxId)
  expect(ids.length).toBe(3)
});

test('RandomNumbers should have three uniq numbers', () => {
  var maxId = 3
  var excludeId = 2
  var ids = RandomNumbers(excludeId, maxId).sort()
  expect(ids).toEqual([0, 1, 3])
});

test('RandomNumbers should exclude id', () => {
  var excludeId = 2
  var maxId = 10
  var ids = RandomNumbers(excludeId, maxId)
  var foundId = ids.indexOf(excludeId)
  expect(foundId).toBe(-1)
});