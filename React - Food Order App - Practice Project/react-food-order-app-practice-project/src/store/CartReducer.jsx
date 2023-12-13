export function cartReducer(state, action) {

    if (action.type === 'ADD_ITEM') {
        const { item: cartItem } = action.payload;

        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex((item) => item.id === cartItem.id);

        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItemIndex > -1) { // item is already in the cart, perform update quantity
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({
                ...cartItem,
                quantity: 1
            });
        }

        return {
            ...state,
            items: updatedItems
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const { id } = action.payload;

        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex((item) => item.id === id);

        const existingItem = updatedItems[existingCartItemIndex];

        if (existingItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems
        };
    }

    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            items: []
        };
    }

    return state;
}