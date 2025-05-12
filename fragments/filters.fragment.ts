import { Page } from '@playwright/test';
import { CategoryOption } from '../enums/categories.enum';
import { SortingFragment, SortOption } from '../fragments/sorting.fragments';
export class ProductsFiltersFragment {
page: Page;
sortingFragment: SortingFragment;

  constructor(page: Page) {
    this.page = page;
    this.sortingFragment = new SortingFragment(page);
  }

  async selectSortOption(sortBy: SortOption): Promise<void> {
    await this.sortingFragment.SelectSortOption(sortBy);
  }

  async SelectCategoryOption(option: CategoryOption): Promise<void> {
    const responsePromise = this.page.waitForResponse((response) =>
      response.url().includes('/products/sander01') &&
      response.status() === 200 &&
      response.request().method() === 'GET',
    );

    const checkbox = this.page.getByRole('checkbox', { name: option });
    await checkbox.check();
    await responsePromise;
    await this.page.getByTestId('product-name').filter({ hasText: 'Sander' }).first().waitFor();
  }
}