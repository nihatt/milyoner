// redux/adReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bannerLoading: true, // Başlangıçta true
};

const adReducer = createSlice({
  name: 'advertisement',
  initialState,
  reducers: {
    setAdLoading: (state, action) => {
      state.bannerLoading = action.payload; // True veya False olarak ayarlanır
    },
  },
});

export const { setAdLoading } = adReducer.actions;
export default adReducer.reducer;
