import React from 'react';
import RandomNumbers from './RandomNumbers';

test('RandomNumbers should have three numbers', () => {
  var excludeId = 15
  var maxId = 100
  var ids = RandomNumbers(excludeId, maxId)
  expect(ids.length).toBe(3)
});

test('RandomNumbers should exclude id', () => {
  var excludeId = 2
  var maxId = 10
  var ids = RandomNumbers(excludeId, maxId)
  var foundId = ids.indexOf(excludeId)
  expect(foundId).toBe(-1)
});