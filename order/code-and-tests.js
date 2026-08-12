import orderTotal from "./order-total.js"

if (orderTotal({
        items: [
            {name: 'Dragon food', price: 8},
            {name: 'Dragon cage (small)', price: 800}
        ]
    }) !== 800){
    throw new Error('Check fail: Happy path')
}

if (orderTotal({
    items: [
        {name: 'Dragon collar', price: 20},
        {name: 'Dragon chew toy', price: 40}
    ]
}) !== 60){
    throw new Error('check fail: happy path IExample2)')
}

if (orderTotal({
    items: [
        {'name': 'Dragon candy', price: 2, quantity: 3}
    ]
}) !== 6){
    throw new Error('check fail: quantity')
}

if (orderTotal({
    items: [
        {'name': 'Dragon candy', price: 2}
    ]
}) !== 2){
    throw new Error('check fail: price')
}

