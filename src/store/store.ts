import { configureStore } from '@reduxjs/toolkit'
import watchLaterReducer from '../redux/reducer/watchLaterSlice';

const store = configureStore({
  reducer: {
    watchLater: watchLaterReducer,
  },
});

export default store;