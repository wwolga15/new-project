import { test, expect } from '../fixtures/fixture';
import {  PowerToolsOption } from '../enums/categories.enum';



test('Verify filter by Category', async ({ homePage }) => {
   
    await homePage.navigateTo();
    await homePage.filters.SelectCategoryOption(PowerToolsOption.Sander);
    const names = await homePage.getProductValues('name');
    const trimmed = names.map(name => typeof name === 'string' ? name.trim() : String(name).trim());
    console.log(trimmed); 

    for (const name of trimmed) {
        expect(name).toMatch(/Sander/);
      }
  
  });