import analyzeArray from "../func/analyzeArray.js";

test('return an object with average, min, max, length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('works with negative numbers', () => {
  const result = analyzeArray([-10, 0, 10]);
  expect(result).toEqual({
    average: 0,
    min: -10,
    max: 10,
    length: 3
  });
});