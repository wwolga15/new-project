import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { credentials } from '../credentials';

test ('Verify login with valid credentials',(async ({ page }) => {
  const loginPage = new LoginPage(page);
 
  await page.goto('/auth/login');
  await loginPage.Login(credentials.email,credentials.password);

  await expect(page).toHaveURL('/account');
  await expect(page.locator('h1')).toHaveText('My account');
  await expect(page.getByText('Jane Doe')).toBeVisible();

}));