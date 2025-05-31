
import { test, expect} from '../fixtures/fixture';
import { credentials } from '../credentials';

test ('Verify login with valid credentials',(async ({ loginPage }) => {
 
  await loginPage.gotoLogin();
  await loginPage.Login(credentials.email,credentials.password);

  await expect(loginPage.page).toHaveURL('/account');
  await expect(loginPage.page.locator('h1')).toHaveText('My account');
  await expect(loginPage.page.getByText('Jane Doe')).toBeVisible();

}));