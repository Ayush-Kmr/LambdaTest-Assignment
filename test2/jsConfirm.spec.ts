// jsConfirmAlert.spec.ts
import { test, expect } from "../lambdatest-setup";

test.describe("Verifying JS Confirm Alert", () => {
  test("Handling JS Confirm - OK Button", async ({ page }) => {
    console.log("Navigating to alert page...");
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    console.log("Visited Alert Page");

    await page.waitForTimeout(5000);

    console.log("Clicking JS Confirm (OK)...");
    page.once("dialog", async (dialog) => {
      console.log("Confirm message: ", dialog.message());
      expect(dialog.message()).toBe("I am a JS Confirm");
      await dialog.accept();
      console.log("Confirmed by clicking OK");
    });

    await page.click('button[onclick="jsConfirm()"]');

    const resultText = await page.locator("#result").textContent();
    console.log("Result after OK: ", resultText);
    expect(resultText).toBe("You clicked: Ok");
  });

  test("Handling JS Confirm - Cancel Button", async ({ page }) => {
    console.log("Navigating to alert page...");
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    console.log("Visited Alert Page");

    await page.waitForTimeout(5000);

    console.log("Clicking JS Confirm (Cancel)...");
    page.once("dialog", async (dialog) => {
      console.log("Confirm message: ", dialog.message());
      expect(dialog.message()).toBe("I am a JS Confirm");
      await dialog.dismiss();
      console.log("Confirmed by clicking Cancel");
    });

    await page.click('button[onclick="jsConfirm()"]');

    const resultText = await page.locator("#result").textContent();
    console.log("Result after Cancel: ", resultText);
    expect(resultText).toBe("You clicked: Cancel");
  });
});
