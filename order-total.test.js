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

