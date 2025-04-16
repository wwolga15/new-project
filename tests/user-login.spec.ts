import { test, expect } from '@playwright/test';

test ('Verify login with valid credentials',(async ({ page }) => {
 
  await page.goto('/auth/login');
  await page.getByLabel('Email address').fill('customer@practicesoftwaretesting.com');
  await page.getByTestId('password').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/account');
  await expect(page.locator('h1')).toHaveText('My account');
  await expect(page.getByText('Jane Doe')).toBeVisible();

}));