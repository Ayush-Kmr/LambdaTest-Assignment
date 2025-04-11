// jsPromptAlert.spec.ts
import { test, expect } from "../lambdatest-setup";

test.describe("Verifying JS Prompt Alert", () => {
  test("Handling JS Prompt - Enter value and click OK", async ({ page }) => {
    console.log("Navigating to alert page...");
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    console.log("Visited Alert Page");

    await page.waitForTimeout(5000);

    console.log("Clicking JS Prompt (with input)...");
    page.once("dialog", async (dialog) => {
      console.log("Prompt message: ", dialog.message());
      expect(dialog.message()).toBe("I am a JS prompt");
      await dialog.accept("Hey I am Ayush");
      console.log("Entered value and accepted the prompt");
    });

    await page.click('button[onclick="jsPrompt()"]');

    const resultText = await page.locator("#result").textContent();
    console.log("Result after entering text and OK: ", resultText);
    expect(resultText).toBe("You entered: Hey I am Ayush");
  });

  test("Handling JS Prompt - Click Cancel", async ({ page }) => {
    console.log("Navigating to alert page...");
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    console.log("Visited Alert Page");

    await page.waitForTimeout(5000);

    console.log("Clicking JS Prompt (Cancel)...");
    page.once("dialog", async (dialog) => {
      console.log("Prompt message: ", dialog.message());
      expect(dialog.message()).toBe("I am a JS prompt");
      await dialog.dismiss();
      console.log("Dismissed the prompt");
    });

    await page.click('button[onclick="jsPrompt()"]');

    const resultText = await page.locator("#result").textContent();
    console.log("Result after Cancel: ", resultText);
    expect(resultText).toBe("You entered: null");
  });
});
