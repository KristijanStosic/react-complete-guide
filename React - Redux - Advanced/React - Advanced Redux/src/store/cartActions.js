
import { replaceCart } from "./cartSlice.js";
import { showNotification } from "./uiSlice.js";

export function fetchCartData() {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://shopping-cart-21e58-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetch cart data failed'
            }));
        }
    };
}

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data...'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://shopping-cart-21e58-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();
            dispatch(showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully'
            }));
        } catch (error) {
            dispatch(showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent cart data failed'
            }));
        }

        dispatch(showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully'
        }));
    };
}