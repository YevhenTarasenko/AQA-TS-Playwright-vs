import { test } from '@playwright/test';
import { defineConfig } from '@playwright/test';

test.skip('Navigation', async ({ page }) => {
    await page.goto('https://about.gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
});

test.skip('Interacting with web element on GitLab', async ({ page }) => {
    await page.goto('https://about.gitlab.com/');
    await page.locator('#be-navigation-desktop').getByRole('link', { name: 'Get free trial' }).click();

    // await page.locator('[id="new_user_first_name"]').fill('Yevhen');
    // await page.locator('[id="new_user_last_name"]').fill('Tarasenko');

    // await page.getByTestId('new_user_first_name').fill('Yevhen');
    // await page.getByTestId('new_user_last_name').fill('Tarasenko');
});

test('Using various locator methods', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 728 });
    await page.goto('https://about.gitlab.com/');
    await page.getByRole('button', { name: 'Main menu' }).click();
    // await page.getByRole('link', { name: 'Sign in' }).click();
    await page.click(':has-text("Sign in")');

    await page.waitForTimeout(3000);
});
