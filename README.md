# 🏆 Automation Store - Playwright Testing

This repository contains **end-to-end tests** for the Automation Store website using **Playwright**.

---

## 📌 Features
✅ UI and Functional Testing  
✅ Page Object Model (POM) implementation  
✅ Automated regression tests  
✅ Headless and headed test execution  

---

## 🛠 Setup Instructions

### **1️⃣ Clone the Repository**
### **2️⃣ Install Dependencies**
Make sure you have **Node.js** installed, then run:
```
npm install
```
### **3️⃣ Run Tests**
- **Run all tests:**
  ```
  npx playwright test
  ```
- **Run tests in headed mode (see browser UI):**
  ```
  npx playwright test --headed
  ```
- **Run tests in a specific browser (Chrome):**
  ```sh
  npx playwright test --browser=chromium
  ```

---

## 🏗 Project Structure

```
📂 automation-store
 ├── 📂 tests               # Test scripts
 │   ├── login.spec.ts      # Login tests
 │   ├── order.spec.ts      # Order flow tests
 │   ├── userRegister.spec.ts # User registration tests
 │
 ├── 📂 page-objects        # Page Object Model (POM)
 │   ├── CheckoutPage.ts    # Checkout page actions
 │   ├── LoginPage.ts       # Login page actions
 │   ├── NavBar.ts          # Navigation bar interactions
 │
 ├── 📂 test-results        # Playwright test reports
 ├── 📄 playwright.config.ts # Playwright configuration
 ├── 📄 package.json        # Node dependencies and scripts
 ├── 📄 README.md           # Documentation
```

---

## 🚀 Technologies Used
- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- VS Code

---

## 🛠 Troubleshooting
🔹 **Playwright not found?** Install it manually:
```sh
npx playwright install
```

🔹 **Tests failing due to UI changes?**  
- Run tests in **headed mode** (`--headed`) to debug UI changes.
- Use `page.pause()` in tests to inspect the page manually.

---

## 📧 Contact
For issues or feature requests, open an issue on **GitHub** or contact [gal.felicia12@yahoo.com].
