import { test, expect } from '@playwright/test';
import { PdpPage } from '../pages/product.page';

test ('Verify user can add product to cart',(async ({ page }) => {
  const pdpPage = new PdpPage(page);

  await page.goto('/');
  await page.getByText('Slip Joint Pliers').click();


  await expect(page).toHaveURL(/\/product/);
  await expect(pdpPage.title).toHaveText('Slip Joint Pliers');
  await expect(pdpPage.price).toHaveText(' 9.17');
  
  await expect(pdpPage.addCartButton).toBeVisible();
  await expect(pdpPage.addFavoritesButton).toBeVisible();

  await pdpPage.addCartButton.click();

  const alert = pdpPage.alert;
  await expect(pdpPage.alert).toBeVisible();

  await expect(alert).toHaveText('Product added to shopping cart.');
  await expect(alert).toBeHidden({ timeout: 8000 });
  await expect(pdpPage.cartIconValue).toHaveText(' 1');

  await pdpPage.cartIcon.click();

  await expect(page).toHaveURL('/checkout');
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  await expect(page.getByTestId('product-title')).toHaveText('Slip Joint Pliers ');
  await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeVisible();


}));