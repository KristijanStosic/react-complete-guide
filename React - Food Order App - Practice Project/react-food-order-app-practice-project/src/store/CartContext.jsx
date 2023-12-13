import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer.jsx";

const initialState = {
    items: []
};

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { }
});

export function CartContextProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

    function addItem(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            payload: {
                item
            }
        });
    }

    function removeItem(id) {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            payload: {
                id
            }
        });
    }

    function clearCart() {
        dispatchCartAction({ type: 'CLEAR_CART' })
    }

    const cartContextValue = {
        items: cartState.items,
        addItem,
        removeItem,
        clearCart
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;