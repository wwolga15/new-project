import { test, expect } from '@playwright/test';

test ('Verify user can view product details',(async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByText('Combination Pliers').click();


  await expect(page).toHaveURL(/https:\/\/practicesoftwaretesting\.com\/product/);
  await expect(page.locator('h1')).toHaveText('Combination Pliers');
  await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15');
  await expect(page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();
  await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();

}));