import stockReducer, {
    updatePriceSource,
    updatePrices,
    updateTicker
  } from './stockSlice';

  import {sourcesMockData,priceMockData,tickersMockData} from "./mockData/stockMockData"
  
  describe('counter reducer', () => {
    const initialState = {
        priceSource: [],
        ticker: [],
        prices: []
    };
    it('should handle initial state', () => {
      expect(stockReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should handle updatePriceSource', () => {
      const actual = stockReducer(initialState, updatePriceSource(sourcesMockData));
      expect(actual.priceSource).toEqual(sourcesMockData);
    });
  
    it('should handle updatePrices', () => {
      const actual = stockReducer(initialState, updatePrices(priceMockData));
      expect(actual.prices).toEqual(priceMockData);
    });
  
    it('should handle updateTicker', () => {
      const actual = stockReducer(initialState, updateTicker(tickersMockData));
      expect(actual.ticker).toEqual(tickersMockData);
    });
  });
  