import { Locator, Page, expect  } from '@playwright/test';

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
async login (email:string, password: string): Promise<void> {
  await expect(this.email).toBeVisible();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
}

async gotoLogin(): Promise<void> {
    await this.page.goto('/auth/login');
  }
}