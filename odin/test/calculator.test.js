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
