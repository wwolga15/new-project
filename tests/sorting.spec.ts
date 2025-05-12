import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SortOption } from '../fragments/sorting.fragments';


const dataSortType: { sortBy: SortOption }[] = [
  { sortBy: 'Name (A - Z)' },
  { sortBy: 'Name (Z - A)' },
  { sortBy: 'Price (Low - High)' },
  { sortBy: 'Price (High - Low)' },
];

dataSortType.forEach(({ sortBy }) => {
  test(`Verify user can perform sorting products by "${sortBy}"`, async ({ page}) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo();
    await homePage.filters.selectSortOption(sortBy);
    switch (sortBy) {
      case 'Name (A - Z)': {
        const productNames = await homePage.getProductValues('name') as string[];
        const sortedProductNames = [...productNames].sort((a, b) => a.localeCompare(b));
        expect(productNames.join()).toBe(sortedProductNames.join());
        break;
      }
      case 'Name (Z - A)': {
        const productNames = await homePage.getProductValues('name') as string[];
        const sortedProductNames = [...productNames].sort((a, b) => b.localeCompare(a));
        expect(productNames.join()).toBe(sortedProductNames.join());
        break;
      }
      
      case 'Price (Low - High)': {
        const productPrices = await homePage.getProductValues('price') as number[];
        const sortedProductPrices = [...productPrices].sort((a, b) => a - b);
        expect(productPrices.join()).toBe(sortedProductPrices.join());
        break;
      }
      case 'Price (High - Low)': {
        const productPrices = await homePage.getProductValues('price') as number[];
        const sortedProductPrices = [...productPrices].sort((a, b) => b - a);
        expect(productPrices.join()).toBe(sortedProductPrices.join());
        break;
      }
    
      default:
        throw new Error(`Unknown sort option: ${sortBy}`);
    }
  });
});
