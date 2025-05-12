import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import {  PowerToolsOption } from '../enums/categories.enum';



test('Verify filter by Category', async ({ page }) => {
    const homePage = new HomePage(page);
  
    await homePage.navigateTo();
    await homePage.filters.SelectCategoryOption(PowerToolsOption.Sander);
    const names = await homePage.getProductValues('name');
    const trimmed = names.map(name => name.trim());
    console.log(trimmed); 

    for (const name of trimmed) {
        expect(name).toMatch(/Sander/);
      }
  
  });