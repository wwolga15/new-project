import { test, expect, defaultAddress, paymentMethod } from '../fixtures/fixture';

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

    await checkoutPage.ProceedCheckout(
        defaultAddress.street,
        defaultAddress.city,
        defaultAddress.state,
        defaultAddress.country,
        defaultAddress.postcode
      );
      
    await checkoutPage.paymentDropdown.waitFor({ state: 'visible' });
    await checkoutPage.paymentDropdown.click();
    await checkoutPage.paymentDropdown.selectOption('credit-card');

    await checkoutPage.FillPayment(
        paymentMethod.cardNumber,
        paymentMethod.cardDate,
        paymentMethod.cardCVV,
        paymentMethod.holderName,
        
      );

    await expect(page.getByText('Payment was successful')).toBeVisible();

});