import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increase, increment, toggleCounter } from '../slices/counterSlice.js'

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector(state => state.counter);

  function incrementHandler() {
    dispatch(increment());
  }

  function increaseHandler() {
    dispatch(increase(5));
  }

  function decrementHandler() {
    dispatch(decrement());
  }

  function toggleCounterHandler() {
    dispatch(toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className='counter'>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
