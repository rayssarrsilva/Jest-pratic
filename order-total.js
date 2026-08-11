export default function orderTotal(order) {
    return order.items.reduce((ac, cur) => (cur.price * (cur.quantity || 1)) + ac, 0)
}