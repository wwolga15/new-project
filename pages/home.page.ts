import { Page } from '@playwright/test';
export class HomePage{
page: Page;

constructor (page:Page){
   this.page = page;

}
async productClick (productName:string): Promise<void> {
    const productLocator = this.page.getByText(productName);
    await productLocator.click();
}

}