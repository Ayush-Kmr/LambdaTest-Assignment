import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: ".",
  timeout: 300000,
  fullyParallel: true,
  testMatch: ["test1/**/*.spec.ts", "test2/**/*.spec.ts"],
  use: {},
  projects: [
    {
      name: "chrome:latest:MacOS Ventura@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
};
export default config;
