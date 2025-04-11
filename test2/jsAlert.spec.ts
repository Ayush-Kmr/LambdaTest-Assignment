import { test, expect } from "../lambdatest-setup";

test.describe("JavaScript Alert Handling", () => {
  test("Should display and accept a JS alert with correct message", async ({
    page,
  }) => {
    console.log("Navigating to the JavaScript Alerts page...");
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    console.log("Successfully navigated to the alert page.");

    await page.waitForTimeout(10000);
    console.log("Waited for 10 seconds to ensure page is fully loaded.");

    console.log("Triggering the JS Alert...");
    page.once("dialog", async (dialog) => {
      const alertText = dialog.message();
      console.log("Alert appeared with message: ", alertText);
      expect(alertText).toBe("I am a JS Alert");
      await dialog.accept();
      console.log("JS Alert accepted.");
    });

    await page.click('button[onclick="jsAlert()"]');

    const resultText = await page.locator("#result").textContent();
    console.log("Result message: ", resultText);
    expect(resultText?.trim()).toBe("You successfully clicked an alert");
  });
});
