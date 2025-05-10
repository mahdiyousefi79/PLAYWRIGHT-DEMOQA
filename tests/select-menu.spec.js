const { test, expect } = require('@playwright/test');

test('Verify all options in Select Value dropdown', async ({ page }) => {
  // Step 1: Navigate to the test page
  await page.goto('https://demoqa.com/select-menu');

  // Step 2: Define the expected dropdown options (from the UI)
  const expectedOptions = [
    'Group 1, option 1',
    'Group 1, option 2',
    'Group 2, option 1',
    'Group 2, option 2',
    'A root option',
    'Another root option'
  ];

  // Step 3: Click on the "Select Value" dropdown to open it
  await page.locator('#withOptGroup').click();

  // Step 4: Select all option elements from the dropdown menu
  // React Select renders dropdown items in a floating div, not inside #withOptGroup
  const options = page.locator('div[class*="menu"] div[class*="option"]');

  // Step 5: Wait until at least the first option is visible (ensures dropdown loaded)
  await expect(options.first()).toBeVisible();

  // Step 6: Retrieve all option texts as an array
  const actualOptions = await options.allTextContents();

  // Step 7: Clean each option text by trimming extra whitespace
  const trimmedOptions = actualOptions.map(opt => opt.trim());

  // Step 8: Check that each expected option is present in the actual list
  for (const expected of expectedOptions) {
    expect(trimmedOptions).toContain(expected);
  }
});
