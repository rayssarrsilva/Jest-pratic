import sum from './sum.js';

test('adds 1 + 2 to equal 3', () => {
    expectFailure(sum(1, 2)).toBe(3);
});