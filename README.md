# AI-Assisted Migration to Page Object Model

Migration of legacy Playwright test scripts to the Page Object Model (POM) design pattern using AI assistance (Claude via Cursor IDE).

## Project Structure

```
proyectoAIQ1/
├── legacy/                    # Original scripts with hardcoded selectors
│   ├── login.spec.js
│   ├── checkboxes.spec.js
│   └── dropdown.spec.js
├── refactored/                # Migrated scripts using POM
│   ├── pages/                 # Page Object classes
│   │   ├── LoginPage.js
│   │   ├── CheckboxesPage.js
│   │   └── DropdownPage.js
│   ├── login.spec.js
│   ├── checkboxes.spec.js
│   └── dropdown.spec.js
├── prompts.md                 # AI prompts used for migration
├── playwright.config.js
└── README.md
```

## Setup

```bash
npm install
npx playwright install chromium
```

## Running Tests

```bash
# Run legacy tests
npx playwright test legacy/

# Run refactored tests
npx playwright test refactored/

# Run all tests
npx playwright test

# Run with visible browser
npx playwright test --headed
```

## Target Application

[The Internet HerokuApp](https://the-internet.herokuapp.com/) — a web application for practicing test automation.

## Pages Tested

| Page | URL | Tests |
|------|-----|-------|
| Login | `/login` | Valid login, invalid login, logout |
| Checkboxes | `/checkboxes` | Check, uncheck, toggle both |
| Dropdown | `/dropdown` | Select option 1, option 2, default state |

## Tools Used

- **Framework:** Playwright (JavaScript)
- **AI Assistant:** Claude (Opus 4.6) via Cursor IDE
- **Design Pattern:** Page Object Model (POM)
