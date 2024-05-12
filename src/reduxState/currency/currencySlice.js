import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
});

export default currencySlice.reducer;
