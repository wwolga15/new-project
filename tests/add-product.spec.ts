import { test, expect } from '../fixtures/fixture';

test ('Verify user can add product to cart',(async ({ homePage, productPage, page }) => {

  await test.step('Home page is opened', async () => {
   await homePage.page.goto('/');
});
  
await test.step('Product page is opened', async () => {
await homePage.productClick('Slip Joint Pliers');
});

await test.step('Check page URL and elements on Product page', async () => {
  await expect(productPage.page).toHaveURL(/\/product/);
  await expect(productPage.title).toHaveText('Slip Joint Pliers');
  await expect(productPage.price).toHaveText(' 9.17');

  await expect(productPage.addCartButton).toBeVisible();
  await expect(productPage.addFavoritesButton).toBeVisible();
});

await test.step('Product is added to the cart', async () => {
  await productPage.addCartButton.click();

  const alert = productPage.alert;
  await expect(productPage.alert).toBeVisible();

  await expect(alert).toHaveText('Product added to shopping cart.');
  await expect(alert).toBeHidden({ timeout: 8000 });
  await expect(productPage.cartIconValue).toHaveText(' 1');
});

await test.step('Verify Checkout page is opened', async () => {
 await productPage.cartIcon.click();
});


await test.step('Verify elements on Checkout page', async () => {
  await expect(page).toHaveURL('/checkout');
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  await expect(page.getByTestId('product-title')).toHaveText('Slip Joint Pliers ');
  await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeVisible();
});
}));