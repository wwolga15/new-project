import { test, expect } from '@playwright/test';
import { SortingFragment } from '../fragments/sorting.fragments';

 

test('Verify sorting by Name (A - Z)', async ({ page }) => {
    const sorting = new SortingFragment(page);
  
    await page.goto('/');
    await sorting.SelectSortOption('Name (A - Z)');
  
    const names = await page.getByTestId('product-name').allTextContents();
    const trimmed = names.map(name => name.trim());
    const sorted = [...trimmed].sort((a, b) => a.localeCompare(b));
  
    expect(trimmed).toEqual(sorted);
  });

  test('Verify sorting by Name (Z - A)', async ({ page }) => {
    const sorting = new SortingFragment(page);
  
    await page.goto('/');
    await sorting.SelectSortOption('Name (Z - A)');
  
    const names = await page.getByTestId('product-name').allTextContents();
    const trimmed = names.map(name => name.trim());
    const sorted = [...trimmed].sort((a, b) => b.localeCompare(a));
  
    expect(trimmed).toEqual(sorted);
  });

  test('Verify sorting by Price (ASC)', async ({ page }) => {
    const sorting = new SortingFragment(page);
  
    await page.goto('/');
    await sorting.SelectSortOption('Price (Low - High)');
  
    const priceText = await page.getByTestId('product-price').allTextContents();
    const prices = priceText.map(text => 
        parseFloat(text.replace(/[^0-9.]/g, ''))
      );
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  
  });

  test('Verify sorting by Price (DESC)', async ({ page }) => {
    const sorting = new SortingFragment(page);
  
    await page.goto('/');
    await sorting.SelectSortOption('Price (High - Low)');
  
    const priceText = await page.getByTestId('product-price').allTextContents();
    const prices = priceText.map(text => 
        parseFloat(text.replace(/[^0-9.]/g, ''))
      );
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  
  });