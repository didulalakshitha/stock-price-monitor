const dataGenerateController = require('../dataGenerateController');
const mockData = require('../../mockData');
jest.mock('../../mockData');

describe('Data generate controller', () => {
  test('test generate data', () => {
    mockData.generatePrices.mockImplementation(() => {});

    dataGenerateController.generateData();
    expect(mockData.generatePrices).toHaveBeenCalledTimes(1);
  });
});
