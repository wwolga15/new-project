import { test, expect } from '@playwright/test';

test ('Verify user can view product details',(async ({ page }) => {

  await page.goto('/');
  await page.getByText('Combination Pliers').click();



  await expect(page).toHaveURL(/\/product/);
  await expect(page.locator('h1')).toHaveText('Combination Pliers');
  await expect(page.getByTestId('unit-price')).toHaveText('14.15');
  await expect(page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();
  await expect(page.getByTestId('add-to-favorites')).toBeVisible();

}));