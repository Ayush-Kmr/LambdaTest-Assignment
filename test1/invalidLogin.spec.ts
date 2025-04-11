import { test, expect } from "../lambdatest-setup";

test.describe("Login Herokuapp With Invalid Credentials", () => {
  test("Opening Herokuapp On LambdaTest with Invalid Credentials", async ({
    page,
  }) => {
    console.log("Navigating to login page...");
    await page.goto("https://the-internet.herokuapp.com/login");
    console.log("Visited Page");

    await page.waitForTimeout(10000);
    console.log("Waited for 10 seconds");

    console.log("Filling in wrong username...");
    await page.locator("#username").fill("ayush");
    console.log("Entered Username");

    console.log("Filling in wrong password...");
    await page.locator("#password").fill("ayushLambdaTest");
    console.log("Entered Password");

    console.log("Clicking login button...");
    await page.locator('button[type="submit"]').click();
    console.log("Clicked Login Button");

    await page.waitForTimeout(5000);
    console.log("Checking for error message...");
    const flash = await page.locator("#flash");
    await flash.waitFor({ state: "visible", timeout: 5000 });

    const errorMessage = await flash.textContent();
    console.log("Error message: ", errorMessage?.trim());
    expect(errorMessage).toContain("Your username is invalid!");
  });
});
