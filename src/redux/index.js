// redux/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import adReducer from './reducers/adReducer';
import flightReducer from './reducers/flightReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
    advertisement:adReducer,
    testflight:flightReducer
  },
});

export default store;
