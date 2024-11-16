// redux/userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  userName: '',
  currentLevel: 0,
  totalWins: 0,
};


const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setCurrentLevel: (state, action) => {
      state.currentLevel = action.payload;
    },
    setTotalWins: (state, action) => {
      state.totalWins = action.payload;
    },
    updateUser: (state, action) => {
      const { id, userName, currentLevel, totalWins } = action.payload;
      state.id = id;
      state.userName = userName;
      state.currentLevel = currentLevel;
      state.totalWins = totalWins;
    },
  },
});

export const { setId, setUserName, setCurrentLevel, setTotalWins, updateUser } = userReducer.actions;
export default userReducer.reducer;
