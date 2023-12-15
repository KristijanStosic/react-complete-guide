import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cartSlice.js';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props;

  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(addItemToCart({
      id, title, price
    }));
  }

  function removeItemHandler() {
    dispatch(removeItemFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
