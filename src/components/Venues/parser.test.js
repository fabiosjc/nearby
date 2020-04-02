import { default as mockData } from '../../mocks/venues2.json';
import { DataParser } from './parser.js';

describe('Venues data parser', () => {
  test('should get items grouped by categories', () => {
    const GYM_CATEGORY_ID = '4bf58dd8d48988d176941735';
    const groupedData = DataParser.getItemsByCategory(mockData.data);
    const gymItems = groupedData.get(GYM_CATEGORY_ID);

    expect(groupedData.size).toBe(22);
    expect(gymItems.length).toBe(4);
  });

  test('should return empty with invalid values', () => {
    const groupedData = DataParser.getItemsByCategory(undefined);
    expect(groupedData.size).toBe(0);
  });

  test('should return empty when data is empty', () => {
    const groupedData = DataParser.getItemsByCategory({});
    expect(groupedData.size).toBe(0);
  });

  test('should return empty when group is empty', () => {
    const groupedData = DataParser.getItemsByCategory({
      response: { groups: [] },
    });
    expect(groupedData.size).toBe(0);
  });
});
