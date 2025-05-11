import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';



test ('Verify user can view product details',(async ({ page }) => {
   const homePage = new HomePage(page);
   const productPage = new ProductPage(page);

  await page.goto('/');
  await homePage.ProductClick('Combination Pliers');



  await expect(page).toHaveURL(/\/product/);
  await expect(productPage.title).toHaveText('Combination Pliers');
  await expect(productPage.price).toHaveText('14.15');
  await expect(productPage.addCartButton).toBeVisible();
  await expect(productPage.addFavoritesButton).toBeVisible();

}));