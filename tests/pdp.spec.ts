import { test, expect } from '../fixtures/fixture';



test ('Verify user can view product details',(async ({ homePage,productPage }) => {

  await homePage.page.goto('/');
  await homePage.ProductClick('Combination Pliers');



  await expect(homePage.page).toHaveURL(/\/product/);
  await expect(productPage.title).toHaveText('Combination Pliers');
  await expect(productPage.price).toHaveText('14.15');
  await expect(productPage.addCartButton).toBeVisible();
  await expect(productPage.addFavoritesButton).toBeVisible();

}));