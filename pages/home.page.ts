import { Locator, Page } from '@playwright/test';
import { ProductsFiltersFragment } from '../fragments/filters.fragment';
import { SortingFragment } from '../fragments/sorting.fragments';

export class HomePage {
  getProductNames() {
    throw new Error('Method not implemented.');
  }
  getProductPrices() {
    throw new Error('Method not implemented.');
  }
   page: Page;
   productName: Locator;
   productPrice: Locator;
  filters: ProductsFiltersFragment;
  sorting: SortingFragment;
  

  constructor(page: Page) {
    this.page = page;
    this.productName = page.getByTestId('product-name');
    this.productPrice = page.getByTestId('product-price');
    this.filters = new ProductsFiltersFragment(page);
    this.sorting = new SortingFragment(page);
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('/');
  }

async getProductValues(type: 'name' | 'price'): Promise<string[] | number[]> {
    if (type === 'name') {
      const names = await this.productName.allTextContents();
      return names.map(name => name.trim());
    }
  
    if (type === 'price') {
      const prices = await this.productPrice.allTextContents();
      return prices.map(text => parseFloat(text.replace(/[^0-9.]/g, '')));
    }
  
    throw new Error(`Unsupported type: ${type}`);
  }

  async ProductClick(name: string): Promise<void> {
    const product = this.productName.filter({ hasText: name }).first();
    await  product.click();
  }
}

