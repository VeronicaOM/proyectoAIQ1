# Prompts Used for Migration

## Tool Used
- **AI Assistant:** Claude (Opus 4.6) via Cursor IDE
- **Framework:** Playwright with JavaScript
- **Target Site:** [The Internet HerokuApp](https://the-internet.herokuapp.com/)

---

## Prompt 1: Identification — Analyze Legacy Scripts

> "I have legacy Playwright test scripts with hardcoded selectors and no design pattern. Each test file has all locators inline — duplicated across tests. Please analyze these scripts and identify:
> 1. All unique selectors/locators used
> 2. Which selectors are repeated across tests
> 3. Which pages they belong to
> 4. Suggest Page Object classes to create"

**Result:** The AI identified 3 pages (Login, Checkboxes, Dropdown) with their respective selectors and recommended creating one Page Object per page.

---

## Prompt 2: Generate Page Object Classes

> "Based on the selectors you identified, generate Page Object Model (POM) classes in JavaScript for Playwright. Each page class should:
> - Accept a `page` parameter in the constructor
> - Store all locators as properties
> - Have a `navigate()` method
> - Have action methods for common interactions (login, logout, select, check, etc.)
> - Follow the single responsibility principle — one class per page"

**Result:** The AI generated `LoginPage.js`, `CheckboxesPage.js`, and `DropdownPage.js` with clean, reusable interfaces.

---

## Prompt 3: Refactor Test Scripts

> "Now refactor the legacy test scripts to use the Page Object classes you created. The refactored tests should:
> - Import and instantiate the Page Object in `beforeEach`
> - Use Page Object methods instead of inline locators
> - Use `test.describe` to group related tests
> - Keep the same assertions and test behavior — do not change what is being tested
> - Remove all hardcoded selectors from the test files"

**Result:** The AI refactored all 3 test files, replacing inline locators with Page Object method calls while preserving all original assertions.

---

## Prompt 4: Validation

> "Run the refactored tests to verify they pass with the same behavior as the legacy tests. Both legacy and refactored tests should produce the same results."

**Result:** All 9 tests (3 files × 3 tests each) pass in both legacy and refactored versions with identical assertions.

---

## Key Benefits of the Migration

| Aspect | Legacy | Refactored (POM) |
|--------|--------|-------------------|
| Locator location | Scattered across test files | Centralized in Page Objects |
| Duplication | Same selectors repeated in every test | Defined once, reused everywhere |
| Maintenance | Change one selector → update every test file | Change one selector → update one Page Object |
| Readability | `page.locator('#username').fill('tom')` | `loginPage.login('tom', 'pass')` |
| Reusability | None — copy/paste between tests | Import Page Object in any test file |
