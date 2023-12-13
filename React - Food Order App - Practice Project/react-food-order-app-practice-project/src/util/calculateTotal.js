export function calculateTotal(items, calculateFn) {
    return items.reduce((total, item) => {
        return calculateFn(total, item);
    }, 0);
}

export function calculateTotalPrice(totalPrice, item) {
    return totalPrice + item.quantity * item.price;
}

export function calculateCartItems(totalNumberOfItems, item) {
    return totalNumberOfItems + item.quantity;
}
