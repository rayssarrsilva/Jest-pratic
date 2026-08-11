export default function orderTotal(order) {
    return order.items.reduce((ac, cur) => cur.price + ac, 0)
}