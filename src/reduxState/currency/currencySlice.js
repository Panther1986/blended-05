import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});

export default currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
