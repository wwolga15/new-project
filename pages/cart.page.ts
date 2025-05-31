import { Locator, Page } from '@playwright/test';

export class CartPage{
page: Page;
actualPrice:Locator;
totalPrice:Locator;

constructor (page:Page){
   this.page = page;
   this.actualPrice = page.getByTestId('product-price');
   this.totalPrice = page.getByTestId('cart-total');

}

async getActualPrice(): Promise<number> {
    const text = await this.actualPrice.first().innerText();
    return Number(text.replace('$', '').trim());
  }

  async getTotalPrice(): Promise<number> {
    const text = await this.totalPrice.first().innerText();
    return Number(text.replace('$', '').trim());
  }

}