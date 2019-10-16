import { generateUniqueId } from 'c/inputUtils';

describe('generateUniqueId', () => {
  it('generates unique ids', () => {
    const uniqueIds = {};
    const iterations = 10;
    for (let i = 0; i < iterations; i++) {
      uniqueIds[generateUniqueId()] = true;
    }
    expect(Object.keys(uniqueIds)).toHaveLength(iterations);
  });
});
