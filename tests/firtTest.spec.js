import { test, expect } from "@playwright/test";

test.describe('main page', () => {

   test('should be open site', async ({ page }) => {
    await page.goto('/')
   })
})