// redux/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import adReducer from './reducers/adReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    advertisement:adReducer
  },
});

export default store;
