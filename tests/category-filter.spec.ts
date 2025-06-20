import { test, expect } from '../fixtures/fixture';
import {  PowerToolsOption } from '../enums/categories.enum';



test('Verify filter by Category', async ({ homePage }) => {
   
    await test.step('Home page is opened', async () => {
     await homePage.navigateTo();
    });

    await test.step('Select Category', async () => {
     await homePage.filters.selectCategoryOption(PowerToolsOption.Sander);
    });
    
    await test.step('Verify selected Category', async () => {
    const names = await homePage.getProductValues('name');
    const trimmed = names.map(name => typeof name === 'string' ? name.trim() : String(name).trim());

    for (const name of trimmed) {
        expect(name).toMatch(/Sander/);
      }
    });
  });