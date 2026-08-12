import capitalize from "../func/capitalize.js";

test('capitalize first letter of word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize first letter of phrase', () => {
    expect(capitalize('hello world')).toBe('Hello World');
});