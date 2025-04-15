import { test, expect } from '@playwright/test';

test ('Verify login with valid credentials',(async ({ page }) => {
 
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.getByLabel('Email address').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  await expect(page.locator('h1')).toHaveText('My account');
  await expect(page.getByText('Jane Doe')).toBeVisible();

}));