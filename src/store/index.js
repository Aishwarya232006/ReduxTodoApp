import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer, // your slice
  },
  devTools: true, // Redux DevTools enabled automatically
});
// Log Redux state on every change
store.subscribe(() => {
  console.log('Redux State:', store.getState());
});
// Log Redux state on every change
store.subscribe(() => {
  console.log('Redux State:', store.getState());
});

// Log Redux state on every change
store.subscribe(() => {
  console.log('Redux State:', store.getState());
});

export default store;
