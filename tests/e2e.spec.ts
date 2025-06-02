import { test, expect } from '../fixtures/fixture';
import { defaultAddress } from '../testData/defaultAddress';
import  {paymentMethod } from '../testData/paymentMethod';


test('E2E flow', async ({ loggedInPage, homePage, productPage, cartPage, checkoutPage }) => {
    const page = loggedInPage.page;
    await page.goto('/');

    const productName = await homePage.getFirstProductName();
    const productPrice = await homePage.getProductPrice();
    
    await homePage.clickFirstProduct();

    await expect(productPage.title).toHaveText(productName);
    await expect(productPage.price).toHaveText(productPrice);
    await productPage.addCartButton.click();
    await productPage.cartIcon.click();

    await expect(page.getByTestId('product-title')).toHaveText(productName);
    const actualPrice =  await cartPage.getActualPrice();
    expect(Number(productPrice.replace('$', '').trim())).toBeCloseTo(actualPrice);

    await checkoutPage.checkoutButton.click();
    await expect(page.getByText(/you are already logged in/i)).toBeVisible();
    await checkoutPage.checkoutButton.click();

    const { street, city, state, country, postcode } = defaultAddress;
    await checkoutPage.ProceedCheckout(street, city, state, country, postcode);

    await checkoutPage.paymentDropdown.waitFor({ state: 'visible' });
    await checkoutPage.paymentDropdown.click();
    await checkoutPage.paymentDropdown.selectOption('credit-card');

    const { cardNumber,cardDate, cardCVV,holderName  } = paymentMethod;
    await checkoutPage.FillPayment(cardNumber,cardDate, cardCVV,holderName );

    await expect(page.getByText('Payment was successful')).toBeVisible();

});