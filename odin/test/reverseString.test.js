import reverse from "../func/reverseString.js";

test('reversed string', () => {
    expect(reverse('Hello')).toBe('olleH');
});

test('reversed string with capitalize', () => {
    expect(reverse('hello')).toBe('olleH');
});

test('reversed phrase with capitalize', () => {
    expect(reverse('hello world')).toBe('dlroW olleH');
});