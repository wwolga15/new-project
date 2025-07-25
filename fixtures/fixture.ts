import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { AccountPage } from '../pages/account.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

type Fixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    productPage : ProductPage;
    accountPage : AccountPage;
    cartPage : CartPage;
    checkoutPage : CheckoutPage;


  };

  export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
      const  loginPage = new LoginPage(page);
      await use( loginPage);
    },

    homePage: async ({ page }, use) => {
          const homePage = new HomePage(page);
          await use( homePage);
        },

    productPage: async ({ page }, use) => {
            const productPage = new ProductPage(page);
            await use( productPage);
          },
    
    accountPage: async ({ page }, use) => {
      const accountPage = new AccountPage(page);
      await use(accountPage);
     
          }, 

   cartPage: async ({ page }, use) => {
            const cartPage = new CartPage(page);
            await use( cartPage);
          }, 
          
          
   checkoutPage: async ({ page }, use) => {
            const checkoutPage = new CheckoutPage(page);
            await use( checkoutPage);
          }, 

          
  });

  export { expect } from '@playwright/test';