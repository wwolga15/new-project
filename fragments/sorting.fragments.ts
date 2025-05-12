import { Locator, Page } from '@playwright/test';
export type SortOption = 'Name (A - Z)' | 'Name (Z - A)' | 'Price (High - Low)' | 'Price (Low - High)';

export class SortingFragment{
page: Page;
sortingDropdown: Locator;


constructor (page:Page){
   this.page = page;
   this.sortingDropdown = this.page.getByTestId('sort');;
   
}

async SelectSortOption (option: SortOption): Promise<void> {
    const responsePromise = this.page.waitForResponse((response) =>
response.url().includes('/products?sort=')
    &&  response.status() === 200
    &&  response.request().method() === 'GET',
);

await this.sortingDropdown.selectOption({label: option});
await responsePromise;

}
}