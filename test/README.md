# E-Commerce Admin Test Suite

Automated Selenium test suite for the E-Commerce Admin application with 25 comprehensive test cases.

## Prerequisites

Make sure you have the following installed:

```bash
# Python 3.x
python --version

# Selenium
pip install selenium

# Chrome WebDriver (or Firefox WebDriver)
# Download from: https://chromedriver.chromium.org/
# Make sure it's in your PATH
```

## Test Cases Included

1. **Login with valid credentials** - Verify successful login
2. **Login with invalid username** - Test login rejection
3. **Login with invalid password** - Test login rejection
4. **Login with empty credentials** - Test validation
5. **Logout functionality** - Test logout and redirect
6. **Add product with all fields** - Complete product creation
7. **Add product with missing fields** - Test form validation
8. **View inventory after adding** - Display verification
9. **Update product - select** - Product selection for update
10. **Update product - modify** - Actual modification test
11. **Delete product - confirm** - Deletion with confirmation
12. **Delete product - cancel** - Cancellation test
13. **Dispatch product** - Test dispatch functionality
14. **Dispatch status verification** - Status in inventory
15. **View all inventory** - Complete inventory display
16. **Navigation between tabs** - Tab switching test
17. **Add multiple products** - Sequential additions
18. **Update product quantity** - Specific field update
19. **Session persistence** - Page refresh test
20. **Complete workflow** - End-to-end scenario
21. **Add product with special characters** - Test special character handling
22. **Update all product fields** - Test comprehensive field updates
23. **Negative values validation** - Test validation for negative inputs
24. **Boundary values** - Test maximum and minimum value limits
25. **Rapid operations stress test** - Test application under rapid tab switching

## Running the Tests

1. **Start your application:**
   ```bash
   npm run dev
   ```
   Make sure it's running on `http://localhost:8080` (adjust port in test.py if different)

2. **Run the test suite:**
   ```bash
   cd test
   python test.py
   ```

3. **Run specific test:**
   ```bash
   python test.py EcommerceAdminTest.test_01_login_valid_credentials
   ```

## Configuration

If your application runs on a different port, update the `base_url` in `test.py`:

```python
cls.base_url = "http://localhost:YOUR_PORT"  # Change this
```

If using Firefox instead of Chrome:

```python
cls.driver = webdriver.Firefox()  # Change from Chrome()
```

## Test Output

The tests will display progress in the console:

```
[TEST 1] Testing login with valid credentials...
✓ Login successful with valid credentials

[TEST 2] Testing login with invalid username...
✓ Login correctly rejected with invalid username

...
```

## Notes

- Tests run sequentially to maintain state consistency
- Each test is independent but some rely on data from previous tests
- The browser window will open automatically and you'll see the tests executing
- Tests use explicit waits to handle dynamic content
- LocalStorage is used for data persistence

## Troubleshooting

**Element not found errors:**
- Make sure the application is fully loaded before running tests
- Check if selectors match your actual HTML structure

**Timeout errors:**
- Increase wait time in `WebDriverWait(cls.driver, 10)` - change 10 to higher value
- Ensure your application loads within reasonable time

**WebDriver errors:**
- Make sure ChromeDriver version matches your Chrome browser version
- Verify ChromeDriver is in your system PATH

## Login Credentials

- **Username:** `vivekjadhav`
- **Password:** `vivek123`

These are hardcoded in the application and used throughout the tests.
