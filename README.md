# 🔍 Playwright Automation - Herokuapp Test Suite

This project contains Playwright-based end-to-end tests for two web applications hosted on [the-internet.herokuapp.com](https://the-internet.herokuapp.com/). The automation covers login functionality and JavaScript alert handling.

## 📋 Table of Contents

- [Project Structure](#file_folder-project-structure)
- [Test Cases](#-test-cases)
- [Technologies Used](#-technologies-used)
- [Getting Started](#rocket-getting-started)
- [Running the Tests](#runner-running-the-tests)
- [Screenshots & Logs](#camera_screenshots--logs)
- [Author](#bust_in_silhouette-author)

---

## :file_folder: Project Structure


---

## ✅ Test Cases

### Test Case 1: Login Automation

**URL**: [https://the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login)

- ✔️ **Valid Credentials Test**  
  - **Username**: `tomsmith`  
  - **Password**: `SuperSecretPassword!`  
  - **Assertion**: Success message `"You logged into a secure area!"` is visible.

- ❌ **Invalid Credentials Test**  
  - **Assertion**: Error message `"Your username is invalid!"` or `"Your password is invalid!"` is displayed.

---

### Test Case 2: JavaScript Alerts Handling

**URL**: [https://the-internet.herokuapp.com/javascript_alerts](https://the-internet.herokuapp.com/javascript_alerts)

- ✅ **JS Alert**  
  - Click "Click for JS Alert"  
  - Handle the alert  
  - Assert the result message

- ✅ **JS Confirm**  
  - Click "Click for JS Confirm"  
  - Accept/Dismiss and assert the corresponding result

- ✅ **JS Prompt**  
  - Click "Click for JS Prompt"  
  - Enter text, accept prompt, and assert the result

---

## 🛠️ Technologies Used

- [Playwright](https://playwright.dev/) - End-to-end browser automation
- TypeScript - For type-safe scripting
- Node.js - Runtime environment

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/your-username/playwright-automation.git
cd playwright-automation
npm install
npx playwright install
