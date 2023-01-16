import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CardInterface, ResponceListCardsInterface, Status } from '../types/types';

export const fetchCards = createAsyncThunk<CardInterface[]>('listCards', async () => {
  const { data } = await axios.get('https://api.disneyapi.dev/characters');
  return data.data;
});

const initialState: ResponceListCardsInterface = {
  items: [],
  status: Status.LOADING,
};

const listCardsSlice = createSlice({
  name: 'listCards',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<CardInterface[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchCards.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = listCardsSlice.actions;
export default listCardsSlice.reducer;
