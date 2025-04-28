import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PdpPage } from '../pages/product.page';



test ('Verify user can view product details',(async ({ page }) => {
   const homePage = new HomePage(page);
   const pdpPage = new PdpPage(page);

  await page.goto('/');
  await homePage.productClick('Combination Pliers');



  await expect(page).toHaveURL(/\/product/);
  await expect(pdpPage.title).toHaveText('Combination Pliers');
  await expect(pdpPage.price).toHaveText('14.15');
  await expect(pdpPage.addCartButton).toBeVisible();
  await expect(pdpPage.addFavoritesButton).toBeVisible();

}));