import { test, expect } from '../fixtures/fixture';



test ('Verify user can view product details',{
  tag: '@smoke'

},(async ({ homePage,productPage }) => {

  await test.step('Home page is opened', async () => {
   await homePage.page.goto('/');
  });

  await test.step('Product page is opened', async () => {
   await homePage.productClick('Combination Pliers');
  });

  await test.step('Check page URL and elements on Product page', async () => {
   await expect(homePage.page).toHaveURL(/\/product/);
   await expect(productPage.title).toHaveText('Combination Pliers');
   await expect(productPage.price).toHaveText('14.15');
   await expect(productPage.addCartButton).toBeVisible();
   await expect(productPage.addFavoritesButton).toBeVisible();
});

}));