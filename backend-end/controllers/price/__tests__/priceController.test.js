const priceController = require('../priceController');
const mockData = require('../../mockData');
jest.mock('../../mockData');

const validSourcesDataMock = [{
  source: 'SRC1',
  tickers: ['TA1', 'TA2'],
}, {
  source: 'SRC2',
  tickers: ['TB1', 'TB2'],
}];

const generateValidPricesMock = () => {
  const prices = new Map();
  validSourcesDataMock.forEach((tickerValues) => {
    tickerValues.tickers.forEach((tickerCode) => {
      const priceArr = [];
      for(let i = 0; i < 5; i++) {
        priceArr.push({time: moment().subtract(i, 'seconds').format(DATE_FORMAT), price: getRandomIntInclusive(10, 200)})
      }
      prices.set(tickerCode, priceArr);
    })
  });
  return prices;
};

describe('price controller', () => {
  test.only('test source not empty', () => {
    mockData.getSources.mockImplementation(() => {
      return validSourcesDataMock;
    });

    const result = priceController.getSources();
    expect(Boolean(result)).toBe(true);
    expect(result.length).toEqual(2);

    result.forEach(element => {
      const { source, tickers } = element
      expect(Boolean(source)).toBe(true);
      expect(Array.isArray(tickers)).toBe(true);
    });
  });

  test.only('test source empty', () => {
    mockData.getSources.mockImplementation(() => {
      return [];
    });

    const result = priceController.getSources();
    expect(Boolean(result)).toBe(true);
    expect(result.length).toEqual(0);
  });

  test('test prices not empty', () => {
    mockData.getPrices.mockImplementation(() => {
      return generateValidPricesMock();
    });

    const result = priceController.getPrices();
    expect(Boolean(result)).toBe(true);

    Object.entries(result).forEach((element) => {
      const [item1, item2] = element;
      expect(Boolean(item1)).toBe(true);
      expect(Array.isArray(item2)).toBe(true);
    });
  });

  test('test prices empty', () => {
    mockData.getPrices.mockImplementation(() => {
      return [];
    });

    const result = priceController.getPrices();
    expect(Boolean(result)).toBe(true);
    expect(result.length).toEqual(0);
  });
});
