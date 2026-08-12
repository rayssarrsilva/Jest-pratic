import calculator from "../func/calculator.js";

test('sum two values', () => {
    expect(calculator.sum(5, 9)).toBe(14);
});

test('sum two float values', () => {
    expect(calculator.sum(5.4, 9.3)).toBe(14.7);
});

test('subtract two float values to negative', () => {
    expect(calculator.subtract(5.4, 9.3)).toBe(-14.7);
});

test('subtract two values to negative', () => {
    expect(calculator.subtract(5, 9)).toBe(-4);
});

test('subtract two values', () => {
    expect(calculator.subtract(25, 5)).toBe(20);
});

test('divide two values', () => {
    expect(calculator.divide(25, 5)).toBe(5);
});

test('divide two float values and round', () => {
    expect(calculator.divide(25.5, 5.7)).toBe(4.47);
});

test('multiply two float values and round', () => {
    expect(calculator.multiply(7.1, 5.7)).toBe(40.47);
});

test('multiply two values', () => {
    expect(calculator.multiply(25, 5)).toBe(125);
});

