import { test, expect } from '../fixtures/fixture';

test.describe('Sorting products', () => {
  test('Should sort by Name (A - Z)', async ({ homePage }) => {

    await homePage.navigateTo();
    await homePage.filters.selectSortOption('Name (A - Z)');

    const values = await homePage.getProductValues('name') as string[];
    const sorted = [...values].sort((a, b) => a.localeCompare(b));
    expect(values).toEqual(sorted);
  });

  test('Should sort by Name (Z - A)', async ({ homePage }) => {
  
    await homePage.navigateTo();
    await homePage.filters.selectSortOption('Name (Z - A)');

    const values = await homePage.getProductValues('name') as string[];
    const sorted = [...values].sort((a, b) => b.localeCompare(a));
    expect(values).toEqual(sorted);
  });

  test('Should sort by Price (Low - High)', async ({ homePage}) => {
 
    await homePage.navigateTo();
    await homePage.filters.selectSortOption('Price (Low - High)');

    const values = await homePage.getProductValues('price') as number[];
    const sorted = [...values].sort((a, b) => a - b);
    expect(values).toEqual(sorted);
  });

  test('Should sort by Price (High - Low)', async ({ homePage }) => {
    
    await homePage.navigateTo();
    await homePage.filters.selectSortOption('Price (High - Low)');

    const values = await homePage.getProductValues('price') as number[];
    const sorted = [...values].sort((a, b) => b - a);
    expect(values).toEqual(sorted);
  });
});