import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const incrementByAmountHandler = (amount) => {
    dispatch(incrementByAmount(Number(amount) || 0));
  };

  const decrementByAmountHandler = (amount) => {
    dispatch(decrementByAmount(Number(amount) || 0));
  };

  const resetAllHandler = () => {
    dispatch(reset());
    inputRef.current.value = 0;
  };

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>Change By Amount</p>
      <input defaultValue={0} ref={inputRef} type="text" name="" id="" />
      <button onClick={() => incrementByAmountHandler(inputRef.current.value)}>
        Increment by amount
      </button>
      <button onClick={() => decrementByAmountHandler(inputRef.current.value)}>
        Increment by amount
      </button>
      <button onClick={resetAllHandler}>Reset All</button>
    </section>
  );
};
export default Counter;
