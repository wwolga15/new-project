import { Locator, Page } from '@playwright/test';

export class LoginPage{
page: Page;
email: Locator;
password: Locator;
loginButton: Locator;

constructor (page:Page){
   this.page = page;
   this.email = this.page.getByLabel('Email address');
   this.password = this.page.getByTestId('password');
   this.loginButton = this.page.getByRole('button', { name: 'Login' });
}
async Login (email:string, password: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
}

}