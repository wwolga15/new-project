import { Locator, Page } from '@playwright/test';

export class CheckoutPage{
page: Page;
checkoutButton: Locator;
street: Locator;
city: Locator;
state:Locator;
country:Locator;
postcode:Locator;
paymentDropdown: Locator;
paymentMethod:  Locator;
cardNumber:Locator;
cardDate:Locator;
cardCVV: Locator;
holderName:  Locator;
confirmButton:  Locator;
confirmLoginMessage:Locator;
confirmPaymentMessage:Locator;


constructor (page:Page){
   this.page = page;
   this.checkoutButton = this.page.getByRole('button', { name: 'Proceed to checkout' });
   this.street = this.page.getByPlaceholder('Your Street *');
   this.city = this.page.getByPlaceholder('Your City *');
   this.state = this.page.getByPlaceholder('State *');
   this.country = this.page.getByPlaceholder('Your country *');
   this.postcode = this.page.getByPlaceholder('Your Postcode *');
   this.paymentDropdown = page.getByTestId('payment-method');
   this.paymentMethod = this.page.getByTestId('credit-card');
   this.paymentDropdown = this.page.locator('select');

   this.cardNumber = this.page.getByPlaceholder('Credit Card Number');
   this.cardDate = this.page.getByPlaceholder('Expiration Date');
   this.cardCVV = this.page.getByPlaceholder('CVV');
   this.holderName = this.page.getByPlaceholder('Card Holder Name');
   this.confirmButton = this.page.getByRole('button', { name: 'Confirm' });
   this.confirmLoginMessage = this.page.getByText(/you are already logged in/i);
   this.confirmPaymentMessage = this.page.getByText('Payment was successful');
   

  
}
async proceedCheckout (street:string, city: string, state: string, country: string, postcode: string): Promise<void> {
    await this.street.fill(street);
    await this.city.fill(city);
    await this.state.fill(state);
    await this.country.fill(country);
    await this.postcode.fill(postcode);
    await this.checkoutButton.click();

}

async fillPayment (cardNumber: string, cardDate: string, cardCVV: string, holderName: string): Promise<void> {
    await this.cardNumber.fill(cardNumber);
    await this.cardDate.fill(cardDate);
    await this.cardCVV.fill(cardCVV);
    await this.holderName.fill(holderName);
    await this.confirmButton.click();

}

}