import { test, expect } from '../fixtures/fixture';

test ('Verify user can add product to cart',(async ({ homePage, productPage, page }) => {

  await homePage.page.goto('/');
  await homePage.page.getByText('Slip Joint Pliers').click();


  await expect(productPage.page).toHaveURL(/\/product/);
  await expect(productPage.title).toHaveText('Slip Joint Pliers');
  await expect(productPage.price).toHaveText(' 9.17');
  
  await expect(productPage.addCartButton).toBeVisible();
  await expect(productPage.addFavoritesButton).toBeVisible();

  await productPage.addCartButton.click();

  const alert = productPage.alert;
  await expect(productPage.alert).toBeVisible();

  await expect(alert).toHaveText('Product added to shopping cart.');
  await expect(alert).toBeHidden({ timeout: 8000 });
  await expect(productPage.cartIconValue).toHaveText(' 1');

  await productPage.cartIcon.click();

  await expect(page).toHaveURL('/checkout');
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  await expect(page.getByTestId('product-title')).toHaveText('Slip Joint Pliers ');
  await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeVisible();

}));