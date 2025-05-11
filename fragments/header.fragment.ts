import { Locator, Page } from '@playwright/test';

export class HeaderFragment {
   page: Page;
   navBar: Locator;
   profileButton: Locator;
   logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navBar = page.getByTestId('navbar-nav'); 
    this.profileButton = page.getByRole('button', { name: 'Jane Doe' });
    this.logoutButton = page.getByTestId('Sign in');
    
  }

  async clickProfile(): Promise<void> {
    await this.profileButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }

  async isVisible(): Promise<boolean> {
    return this.navBar.isVisible();
  }

  async isUserLoggedIn(): Promise<boolean> {
    return this.profileButton.isVisible();
  }
}
