
import { test, expect} from '../fixtures/fixture';
import { authFile } from '../authPath';

test.use({storageState: authFile});

test ('Verify login with valid credentials',(async ({ page }) => {
 
  await page.goto('/account');
  await page.waitForURL('/account');

  await expect(page).toHaveURL('/account');
  await expect(page.locator('h1')).toHaveText('My account');
  await expect(page.getByText('Jane Doe')).toBeVisible();

}));