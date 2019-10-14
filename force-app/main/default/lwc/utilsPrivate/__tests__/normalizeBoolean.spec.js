import { normalizeBoolean as normalize } from 'c/utilsPrivate';

it('Returns true for an empty string', () => {
  expect(normalize('')).toBe(true);
});

it('Returns true for the string "false"', () => {
  expect(normalize('false')).toBe(true);
});

it('Returns true for truthy values', () => {
  expect(normalize(true)).toBe(true);
  expect(normalize(1)).toBe(true);
  expect(normalize(-1)).toBe(true);
  expect(normalize('foo')).toBe(true);
  expect(normalize(' ')).toBe(true);
  expect(normalize({})).toBe(true);
  expect(normalize([])).toBe(true);
});

it('Returns false for falsy values (except for the empty string)', () => {
  expect(normalize(false)).toBe(false);
  expect(normalize(null)).toBe(false);
  expect(normalize(undefined)).toBe(false);
  expect(normalize()).toBe(false);
  expect(normalize(0)).toBe(false);
});
