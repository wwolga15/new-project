import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test ('Verify login with valid credentials',(async ({ page }) => {
  const loginPage = new LoginPage(page);
 
  await page.goto('/auth/login');
  await loginPage.login('customer@practicesoftwaretesting.com','welcome01' );

  await expect(page).toHaveURL('/account');
  await expect(page.locator('h1')).toHaveText('My account');
  await expect(page.getByText('Jane Doe')).toBeVisible();

}));