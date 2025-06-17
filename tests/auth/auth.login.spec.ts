import { test , expect} from '../../fixtures/fixture';
import { credentials } from '../../credentials';
import { authFile } from '../../authPath';

// test.use({storageState: authFile});


test ('Verify login with valid credentials',(async ({ loginPage }) => {
 
  await loginPage.gotoLogin();
  await loginPage.login(credentials.email,credentials.password);

  await expect(loginPage.page).toHaveURL('/account');
  await expect(loginPage.page.locator('h1')).toHaveText('My account');
  await expect(loginPage.page.getByText('Jane Doe')).toBeVisible();
  await loginPage.page.context().storageState({ path: authFile });

}))