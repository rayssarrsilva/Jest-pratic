import orderTotal from "./order-total.js";

test('order total with items', () => {    
    const result = orderTotal({
    items: [
                {name: 'Dragon food', price: 8},
                {name: 'Dragon cage (small)', price: 800}
            ]
        });
    expect(result).toBe(808);
});

it('Quantity', () => {
    expect(orderTotal({
        items: [
            {'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
    })).toBe(6)
});