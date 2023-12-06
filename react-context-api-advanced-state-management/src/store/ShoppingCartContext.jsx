import { createContext, useContext, useReducer } from "react";
import shoppingCartReducer from './ShoppingCartReducer.js'

const initialState = {
    items: []
}

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { }
});

function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, initialState);

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: id
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {
                productId: productId,
                amount: amount
            }
        });
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
    };

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>;
}

function useCartContext() {
    return useContext(CartContext);
}

export { useCartContext, CartContextProvider };