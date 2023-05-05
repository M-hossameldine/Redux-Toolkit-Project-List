import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// state selectors
export const selectCount = (state) => state.counter.count;

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
