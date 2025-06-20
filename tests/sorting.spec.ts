import { test, expect } from '../fixtures/fixture';

test.describe('Sorting products',
  {
    tag: '@regression'
  
  }, () => {
  test('Should sort by Name (A - Z)', async ({ homePage }) => {

    await test.step('Open Home page and select Name (A - Z)', async () => {
     await homePage.navigateTo();
     await homePage.filters.selectSortOption('Name (A - Z)')
  });
   await test.step('Product is sorted by Name (A - Z)', async () => {
    const values = await homePage.getProductValues('name') as string[];
    const sorted = [...values].sort((a, b) => a.localeCompare(b));
    expect(values).toEqual(sorted)});
  });

  test('Should sort by Name (Z - A)', async ({ homePage }) => {
    await test.step('Open Home page and select Name (Z - A)', async () => {
     await homePage.navigateTo();
     await homePage.filters.selectSortOption('Name (Z - A)')});

    await test.step('Product is sorted by Name (Z - A)', async () => {
    const values = await homePage.getProductValues('name') as string[];
    const sorted = [...values].sort((a, b) => b.localeCompare(a));
    expect(values).toEqual(sorted)});
  });

  test('Should sort by Price (Low - High)', async ({ homePage}) => {
    await test.step('Open Home page and select Price (Low - High)', async () => {
     await homePage.navigateTo();
     await homePage.filters.selectSortOption('Price (Low - High)');
    });

    await test.step('Product is sorted by Price (Low - High)', async () => {
    const values = await homePage.getProductValues('price') as number[];
    const sorted = [...values].sort((a, b) => a - b);
    expect(values).toEqual(sorted);
    });
  });

  test('Should sort by Price (High - Low)', async ({ homePage }) => {
    
    await test.step('Product is sorted by Price (High - Low)', async () => {
     await homePage.navigateTo();
     await homePage.filters.selectSortOption('Price (High - Low)');
  });

    await test.step('Product is sorted by Price (Low - High)', async () => {
    const values = await homePage.getProductValues('price') as number[];
    const sorted = [...values].sort((a, b) => b - a);
    expect(values).toEqual(sorted);
  });
});
});