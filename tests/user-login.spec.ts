
import { test, expect} from '../fixtures/fixture';

const authFile =  'playwright/.auth/user.json';
test.use({storageState: authFile});

test ('Verify login with valid credentials',(async ({ page }) => {
 
  await page.goto('/account');

  await expect(page).toHaveURL('/account');
  await expect(page.locator('h1')).toHaveText('My account');
  await expect(page.getByText('Jane Doe')).toBeVisible();

}));