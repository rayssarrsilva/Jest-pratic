import orderTotal from "../order/order-total.js";

test('order total with items', () => {    
    const result = orderTotal({
    items: [
                {name: 'Dragon food', price: 8},
                {name: 'Dragon cage (small)', price: 800}
            ]
        });
    expect(result).toBe(808);
});

test('sum total itens', () => {
    const result = orderTotal({
        items: [
        {name: 'Dragon collar', price: 20},
        {name: 'Dragon chew toy', price: 40}        ]
    });
    expect(result).toBe(60);
});

it('Quantity', () => {
    expect(orderTotal({
        items: [
            {'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
    })).toBe(6)
});

it('No quantity', () => {
    expect(orderTotal({
        items: [
            {'name': 'Dragon candy', price: 2}
        ]
    })).toBe(2)
});

