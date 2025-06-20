
import { test, expect} from '../fixtures/fixture';
import { authFile } from '../authPath';

test.use({storageState: authFile});

test ('Verify login with valid credentials', {
  tag: '@smoke'

},(async ({ page }) => {

  await test.step('Open Account page', async () => {
   await page.goto('/account');
   await page.waitForURL('/account');
  });

  await test.step('Check Account page URL', async() => {
   await expect(page).toHaveURL('/account');
   await expect(page.locator('h1')).toHaveText('My account');
  });
  
  await test.step('Verify user name is visible', async () => {
   await expect(page.getByText('Jane Doe')).toBeVisible();
  });
 
}));