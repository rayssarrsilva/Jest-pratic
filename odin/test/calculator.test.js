test('sum two values', () => {
    expect(calculator.sum(5, 9)).toBe(14);
});

test('sum two float values', () => {
    expect(calculator.sum(5.4, 9.3)).toBe(14.7);
});
