# IT23437920 - Playwright Automation for Swift Translator

## Assignment Information
- **Course**: IT3040 - ITPM
- **Assignment**: Assignment 1 - Automated Testing
- **Student**: IT23437920
- **Website Under Test**: https://www.swifttranslator.com/ (Singlish to Sinhala Translator)

---

## Project Overview

This repository contains automated test cases for the Swift Translator website, which converts Singlish (Sinhala written in English) to Sinhala Unicode. The project uses Playwright framework to automate 35 test scenarios.

### Test Coverage
- **24 Positive Functional Tests** (Pos_Fun_0001 to Pos_Fun_0024)
- **10 Negative Functional Tests** (Neg_Fun_0001 to Neg_Fun_0010)
- **1 UI Test** (Pos_UI_0001)

---

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify installation, open Command Prompt/Terminal and run:
```bash
node --version
npm --version
```

---

## Installation Instructions

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd IT23437920
```

Or download the ZIP file from GitHub and extract it.

### Step 2: Install Dependencies

Navigate to the project directory and run:

```bash
npm install
```

This will install Playwright and all required dependencies.

### Step 3: Install Playwright Browsers

After installing dependencies, run:

```bash
npx playwright install
```

This downloads the necessary browser binaries (Chromium, Firefox, WebKit).

---

## How to Run Tests

### Run All Tests

To execute all 35 test cases:

```bash
npx playwright test
```

### Run Tests in Headed Mode (Visible Browser)

To see the browser while tests are running:

```bash
npx playwright test --headed
```

### Run Specific Test Files

**Positive Functional Tests Only:**
```bash
npx playwright test tests/positive-functional.spec.js
```

**Negative Functional Tests Only:**
```bash
npx playwright test tests/negative-functional.spec.js
```

**UI Test Only:**
```bash
npx playwright test tests/ui-functional.spec.js
```

### View Test Report

After running tests, view the detailed HTML report:

```bash
npx playwright show-report
```

---

## Project Structure

```
IT23437920/
├── tests/
│   ├── positive-functional.spec.js    # 24 positive test cases
│   ├── negative-functional.spec.js    # 10 negative test cases
│   └── ui-functional.spec.js          # 1 UI test case
├── playwright.config.js                # Playwright configuration
├── package.json                        # Project dependencies
├── package-lock.json                   # Dependency lock file
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

---

## Test Scenarios Covered

The test suite covers the following aspects:

### Positive Tests (24 scenarios)
- ✅ Simple, compound, and complex sentences
- ✅ Questions (interrogative) and commands (imperative)
- ✅ Positive and negative sentence forms
- ✅ Present, past, and future tenses
- ✅ Daily language usage (greetings, requests, responses)
- ✅ Polite vs informal phrasing
- ✅ Multi-word expressions and collocations
- ✅ Mixed language content (Singlish + English)
- ✅ English technical terms and brand names
- ✅ Punctuation, numbers, dates, and currency
- ✅ Short (≤30 chars), Medium (31-299 chars), and Long (≥300 chars) inputs
- ✅ Slang and colloquial phrasing

### Negative Tests (10 scenarios)
- ❌ Incorrect transliteration scenarios
- ❌ Edge cases and boundary conditions
- ❌ System limitations and failures

### UI Test (1 scenario)
- 🖥️ UI responsiveness and focus handling

---

## Configuration

The project is configured in `playwright.config.js` with the following settings:

- **Browser**: Chromium (Chrome)
- **Base URL**: https://www.swifttranslator.com/
- **Headless Mode**: Disabled (browser visible by default)
- **Timeout**: 60 seconds per test
- **Screenshots**: Captured on test failure
- **Videos**: Recorded on test failure
- **Workers**: 1 (tests run sequentially)

---

## Troubleshooting

### Issue: "npx: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Tests fail with timeout errors
**Solution**: Increase timeout in `playwright.config.js`:
```javascript
timeout: 120 * 1000, // 2 minutes
```

### Issue: Element not found errors
**Solution**: Website structure may have changed. Update selectors in test files.

### Issue: npm install fails
**Solution**: Clear cache and reinstall:
```bash
npm cache clean --force
npm install
```

---

## Important Notes

1. **Internet Connection Required**: Tests need active internet to access the Swift Translator website.

2. **Website Availability**: Tests may fail if https://www.swifttranslator.com/ is down or under maintenance.

3. **Element Selectors**: Test files contain selectors for input and output fields. If the website structure changes, these may need updating.

4. **Test Independence**: Each test runs independently and clears previous inputs.

---

## Assignment Requirements

This project fulfills all assignment requirements:

- ✅ 24 positive functional test scenarios
- ✅ 10 negative functional test scenarios
- ✅ 1 UI-related test scenario
- ✅ All scenarios automated using Playwright
- ✅ Test results documented in Excel file (IT23437920.xlsx)
- ✅ Git repository is publicly accessible
- ✅ Clear installation and execution instructions provided

---

## Test Execution Results

Test results are available in multiple formats:

- **Console Output**: Real-time test execution logs
- **HTML Report**: Interactive report with screenshots/videos (`npx playwright show-report`)
- **Excel Documentation**: Complete test case documentation in IT23437920.xlsx

---

## Repository Accessibility

This repository is **publicly accessible** on GitHub. Anyone can:
- View the code
- Clone the repository
- Download the project files
- Run the tests following the instructions above

---

## Additional Resources

- **Playwright Documentation**: https://playwright.dev/
- **Swift Translator Website**: https://www.swifttranslator.com/
- **Node.js Download**: https://nodejs.org/

---

## Quick Start Guide

For those who want to run tests immediately:

```bash
# 1. Clone or download the repository
git clone <repository-url>
cd IT23437920

# 2. Install everything
npm install
npx playwright install

# 3. Run tests
npx playwright test --headed

# 4. View report
npx playwright show-report
```

---

## Author

**Registration Number**: IT23437920  
**Course**: IT3040 - ITPM  
**Institution**: SLIIT  
**Year**: Year 3, Semester 2

---

## Submission Details

**Assignment**: Assignment 1  
**Due Date**: 1st February 2026  
**Submission**: CourseWeb

---

**Last Updated**: January 2026
