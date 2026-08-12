test('test wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('khOOr');
});

test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

