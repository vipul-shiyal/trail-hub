import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { IWatchLater } from '../../utils/types';

type Lists = {
  watchLaterLists: IWatchLater[]
}

const initialState: Lists = {
    watchLaterLists: [],
  }
const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    addUserData: (state: any, action: PayloadAction<{}>) => {
      state.watchLaterLists = [...state.watchLaterLists, action.payload];
    },
    }
});

export const { 
    addUserData, 
  } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;