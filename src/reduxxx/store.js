// src/reduxxx/store.js
import { configureStore } from '@reduxjs/toolkit';

// A simple reducer: A function that updates the state based on the action
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Modern store setup
const store = configureStore({
  reducer,
});

export default store;