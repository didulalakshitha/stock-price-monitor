import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceSource: [],
  ticker: [],
  prices: []
};


export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    updatePriceSource: (state, action) => {
      state.priceSource = action.payload
    },
    updateTicker: (state,action) => {
        state.ticker = action.payload
    },
    updatePrices: (state, action) => {
        state.prices = action.payload
    },
  },
});

export const { updatePriceSource, updateTicker, updatePrices } = stockSlice.actions;


export const selectPriceSource = (state) => state.stock.priceSource;
export const selectTicker = (state) => state.stock.ticker;
export const selectPrices = (state) => state.stock.prices;


export default stockSlice.reducer;
