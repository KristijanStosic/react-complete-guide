import { useContext } from 'react';
import { calculateTotal, calculateCartItems } from '../util/calculateTotal.js';
import logoImg from '../assets/logo.jpg';
import Button from '../components/ui/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
    const { items } = useContext(CartContext);
    const { showCart } = useContext(UserProgressContext);

    const totalCartItems = calculateTotal(items, calculateCartItems);

    function handleShowCart() {
        showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='A restaurant' />
                <h1>
                    ReactFood
                </h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
}