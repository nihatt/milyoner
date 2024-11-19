// redux/adReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testFlightMode: true, // Başlangıçta true
};

const flightReducer = createSlice({
  name: 'testflight',
  initialState,
  reducers: {
    setTestFlightMode: (state, action) => {
      state.testFlightMode = action.payload; // True veya False olarak ayarlanır
    },
  },
});

export const { setTestFlightMode } = flightReducer.actions;
export default flightReducer.reducer;
