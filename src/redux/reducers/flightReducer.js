// redux/adReducer.js
import { createSlice } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
// Başlangıç state'i
const initialState = {
  testFlightMode: true, // Başlangıçta varsayılan true
  loading: false, // İstek sırasında yüklenme durumu
  error: null,    // Hata yönetimi için
};

const flightReducer = createSlice({
  name: 'testflight',
  initialState,
  reducers: {
    setTestFlightMode: (state, action) => {
      state.testFlightMode = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTestFlightMode, setLoading, setError } = flightReducer.actions;
export default flightReducer.reducer;

// Thunk: Asenkron işlem
export const fetchTestFlightMode = () => async (dispatch) => {
  dispatch(setLoading(true)); // Yüklenme durumu başlat
  try {
    // API isteği yap
    const appSettings = await firestore().collection('appSettings').doc("G5jNwWDYju4j2G0pHyvz").get();
    if(appSettings.exists){
      const settings = appSettings.data();
      console.log("gelen değer =>",settings.testFlightMode)
      dispatch(setTestFlightMode(settings.testFlightMode))
    }else{
      console.log("else girmemeli")
      dispatch(setTestFlightMode(true))
    }
  } catch (error) {
    console.error('TestFlightMode yüklenemedi:', error);
    dispatch(setError('TestFlightMode yüklenemedi'));
  } finally {
    dispatch(setLoading(false)); // Yüklenme durumu sona erdi
  }
};
