import { useContext } from "react";
import Modal from "./ui/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./ui/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";
import { calculateTotal, calculateTotalPrice } from "../util/calculateTotal.js";

export default function Cart() {
    const { items, addItem, removeItem } = useContext(CartContext);
    const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

    const cartTotal = calculateTotal(items, calculateTotalPrice);

    function handleCloseCart() {
        hideCart();
    }

    function handleGoToCheckout() {
        showCheckout();
    }

    return (
        <Modal className="cart" open={progress === 'cart'} onClose={progress === 'cart' ? handleCloseCart : null}>
            {items.length === 0 ? <h2>Your Cart is Empty!</h2> : <h2>Your Cart</h2>}
            <ul>
                {items.map((item) => (
                    <CartItem
                        key={item.id}
                        {...item}
                        onIncrease={() => addItem(item)}
                        onDecrease={() => removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                {items.length > 0 && (
                    <Button onClick={handleGoToCheckout}>
                        Go to Checkout
                    </Button>
                )}
            </p>
        </Modal>
    );
}