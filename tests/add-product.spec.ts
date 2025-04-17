import { test, expect } from '@playwright/test';

test ('Verify user can add product to cart',(async ({ page }) => {

  await page.goto('/');
  await page.getByText('Slip Joint Pliers').click();


  await expect(page).toHaveURL(/\/product/);
  await expect(page.locator('h1')).toHaveText('Slip Joint Pliers');
  await expect(page.getByTestId('unit-price')).toHaveText(' 9.17');
  
  await expect(page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();
  await expect(page.getByTestId('add-to-favorites')).toBeVisible();

  await page.getByRole('button', { name: 'Add to Cart' }).click();

  const alert = page.getByRole('alert');
  await expect(page.getByRole('alert')).toBeVisible();

  await expect(alert).toHaveText('Product added to shopping cart.');
  await expect(alert).toBeHidden({ timeout: 8000 });
  await expect(page.locator('.badge.rounded-pill.bg-danger')).toHaveText(' 1');

  await page.getByTestId('nav-cart').click();

  await expect(page).toHaveURL('/checkout');
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  await expect(page.getByTestId('product-title')).toHaveText('Slip Joint Pliers ');
  await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeVisible();


}));