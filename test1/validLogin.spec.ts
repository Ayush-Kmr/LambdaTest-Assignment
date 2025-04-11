import { test, expect } from "../lambdatest-setup";

test.describe("Login Herokuapp With Valid Credentials", () => {
  test("Opening Herokuapp On LambdaTest with Valid Credentials", async ({
    page,
  }) => {
    console.log("Navigating to login page...");
    await page.goto("https://the-internet.herokuapp.com/login");
    console.log("Visited Page");

    await page.waitForTimeout(10000);
    console.log("Waited for 10 seconds");

    console.log("Filling in username...");
    await page.locator("#username").fill("tomsmith");
    console.log("Entered Username");

    console.log("Filling in password...");
    await page.locator("#password").fill("SuperSecretPassword!");
    console.log("Entered Password");

    console.log("Clicking login button...");
    await page.locator('button[type="submit"]').click();
    console.log("Clicked Login Button");

    await page.waitForTimeout(5000);

    const currentUrl = page.url();
    console.log("Fetched current URL: ", currentUrl);
    expect(currentUrl).toBe("https://the-internet.herokuapp.com/secure");

    console.log("Checking for success message...");
    const flash = await page.locator("#flash");
    await flash.waitFor({ state: "visible", timeout: 5000 });

    const successMessage = await flash.textContent();
    console.log("Success Message: ", successMessage?.trim());
    expect(successMessage).toContain("You logged into a secure area!");

    console.log("Locating logout button...");
    const logoutButton = await page.locator('a[href="/logout"]');
    await logoutButton.waitFor({ state: "visible", timeout: 5000 });
    console.log("Logout Button is visible");
    expect(await logoutButton.isVisible()).toBe(true);
  });
});
