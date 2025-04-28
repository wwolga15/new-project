import { test, expect } from '@playwright/test';
import { ProductsFiltersFragment, PowerToolsOption } from '../fragments/filters.fragments';



test('Verify filter by Category', async ({ page }) => {
    const filerCategory = new ProductsFiltersFragment(page);
  
    await page.goto('/');
    await filerCategory.SelectCategoryOption(PowerToolsOption.Sander);
    const names = await page.getByTestId('product-name').allTextContents();
    const trimmed = names.map(name => name.trim());
    console.log(trimmed); 

    for (const name of trimmed) {
        expect(name).toMatch(/Sander/);
      }
  
  });