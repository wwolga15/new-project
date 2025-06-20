import { test, expect } from '../fixtures/fixture';
import { defaultAddress } from '../testData/defaultAddress';
import { paymentMethod } from '../testData/paymentMethod';
import { authFile } from '../authPath';

test.use({storageState: authFile});

test('E2E flow', async ({ page, homePage, productPage, cartPage, checkoutPage }) => {
    await test.step('Open Home page', async () => {
     await page.goto('/');
});

    const productName = await homePage.getFirstProductName();
    const productPrice = await homePage.getProductPrice();
    
    await test.step('Open Product page', async () => {
     await homePage.clickFirstProduct();
    });

    await test.step('Check Product page', async () => {
     await expect(productPage.title).toHaveText(productName);
     await expect(productPage.price).toHaveText(productPrice);
});

    await test.step('Product is added to the cart', async () => {
     await productPage.addCartButton.click();
});

    await test.step('Verify Checkout page is opened', async () => {
     await productPage.cartIcon.click();
});

    await test.step('Verify elements on Checkout page', async () => {
    await expect(page.getByTestId('product-title')).toHaveText(productName);
    const actualPrice =  await cartPage.getActualPrice();
    expect(Number(productPrice.replace('$', '').trim())).toBeCloseTo(actualPrice);
});

    await test.step('Verify user is logged in', async () => {
     await checkoutPage.checkoutButton.click();
     await expect(checkoutPage.confirmLoginMessage).toBeVisible();
});

    await test.step('Verify Billing address window is opened', async () => {
     await checkoutPage.checkoutButton.click();
});

    const { street, city, state, country, postcode } = defaultAddress;
    await test.step('Verify Payment section is opened', async () => {
     await checkoutPage.proceedCheckout(street, city, state, country, postcode);
});

    await checkoutPage.paymentDropdown.waitFor({ state: 'visible' });
    await checkoutPage.paymentDropdown.click();
    await checkoutPage.paymentDropdown.selectOption('credit-card');

    const { cardNumber,cardDate, cardCVV,holderName  } = paymentMethod;
    await test.step('Verify Payment is successful', async () => {
    await checkoutPage.fillPayment(cardNumber,cardDate, cardCVV,holderName );
    await expect(checkoutPage.confirmPaymentMessage).toBeVisible();
     
});

});