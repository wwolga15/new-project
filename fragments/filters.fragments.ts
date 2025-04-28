import { Locator, Page } from '@playwright/test';

export enum HandToolsOption {
HandTools = 'Hand Tools', 
Hammer = 'Hammer',
HandSaw =  'Hand Saw', 
Wrench = 'Wrench', 
Screwdriver = 'Screwdriver', 
Pliers = 'Pliers' ,
Chisels =  'Chisels' ,
Measures = 'Measures'
};

export enum PowerToolsOption {
Grinder = 'Grinder', 
Sander = 'Sander',
Saw = 'Saw',
Drill = 'Drill' 
};

export enum  OtherOption { 
    ToolBelts = 'Tool Belts',
    StorageSolutions = 'Storage Solutions',
    Workbench =  'Workbench', 
    SafetyGear = 'Safety Gear', 
    Fasteners = 'Fasteners' 
};

export type CategoryOption = 
| HandToolsOption
| PowerToolsOption
| OtherOption;

export class ProductsFiltersFragment{
page: Page;
categoryCheckbox : Locator;


constructor (page:Page){
   this.page = page;
   
}

async SelectCategoryOption (option: CategoryOption): Promise<void> {
    const responsePromise = this.page.waitForResponse((response) =>
response.url().includes('/products?between=')
    &&  response.status() === 200
    &&  response.request().method() === 'GET',
);

const checkbox = this.page.getByRole('checkbox', { name: option });
await checkbox.check();
await responsePromise;
await this.page.waitForTimeout(500);

}
}