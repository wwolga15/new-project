import { Locator, Page } from '@playwright/test';

export class ProductPage{
page: Page;
title: Locator;
price: Locator;
addCartButton: Locator;
addFavoritesButton: Locator;
alert: Locator;
cartIconValue: Locator;
cartIcon: Locator;

constructor (page:Page){
   this.page = page;
   this.title = this.page.locator('h1');
   this.price = this.page.getByTestId('unit-price');
   this.addCartButton = this.page.getByRole('button', { name: 'Add to Cart' });
   this.addFavoritesButton = this.page.getByTestId('add-to-favorites');
   this.alert = this.page.getByRole('alert');
   this.cartIconValue = this.page.locator('.badge.rounded-pill.bg-danger');
   this.cartIcon = this.page.getByTestId('nav-cart');
}
async addProductToCart(): Promise<void> {
   await this.addCartButton.click();
}
}