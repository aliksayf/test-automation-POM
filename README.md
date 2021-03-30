Test Automation Course. TechStart.dev. WebDriverIO.

---
## 0. Prerequisites:
1. [Node.js](https://nodejs.org/)
2. [Git](https://git-scm.com/)
3. [Python](https://www.python.org/downloads/)
4. [Java](https://www.java.com/en/download/)
5. Install/Update Chrome browser to the latest version

---
## 1. WebDriverIO. Installation and initial configuration. Babel setup. Allure reporter. First tests.
1. Initialize Node.js project:
````
npm init -y
````
2. Install WDIO CLI:
````
npm install @wdio/cli
````
3. Launch initial configuration guide:
````
npx wdio config
````
and select/specify the following options:
- select `On my local machine`
- select `mocha`
- select `sync`
- select `Babel`
- type `./test/specs/*.js`
- type `N`
- select `spec` and `allure`
- select `chromedriver`
- type `http://qa.intgames.org`

Wait till the end of the installation.

4. Install Babel modules:
````
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
````

5. Create `babel.config.js` file and paste the following code into it:
````
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: '12'
            }
        }]
    ]
}
````

6. Create `test` folder, then `specs` folder inside of it and finally `test.js` file in `specs` folder. Paste the following code into the file:
````
describe('Elements', () => {

    it('Page-title-is-correct', () => {
        browser.url('/');
        const title = browser.getTitle();
        console.log('Title is: ' + title);
    })

    it('Page-URL-is-correct', () => {
        const URL = browser.getUrl();
        console.log('URL is: ' + URL);
    })

})
````

7. Run your firts test:
````
npx wdio run ./wdio.conf.js
````

8. Replace `test` script in `package.json` by:
````
 "test": "npx wdio run ./wdio.conf.js"
````
Now you can trigger the test by running `npm run test` or `npm test` or `npm t`.

9. Install Allure commandline:
````
npm install -g allure-commandline
````

10. Generate Allure report from results:
````
allure generate
````

11. Open Allure report:
````
allure open
````

12. Add `report` script to `package.json`:
````
    "report": "allure generate && allure open"
````

13. Create `.gitignore` file with the following code:
````
node_modules
allure-report
allure-results
temp
````

14. Use [WebDriverIO API reference](https://webdriver.io/docs/api) to add more tests, `expect` validation, and cover the Login page by tests.

15. Homework:
- Finish `Elements-displayed` suite
- Finish `Elements-values` suite
- Rename `test.js` to `login.js`
- Create `forgot.js` file in `specs`
- Create and cover by tests the same suites as for Login page

Few commands to use:
````
browser.url('url')
expect(browser).toHaveUrl('expected-url')
expect(element).toBeDisplayed()
expect(element).toHaveAttribute('attributeName', 'value')
expect(element).toHaveText('expected-value')
expect(element).toHaveTextContaining('expected-value')
````
---
## 2. Framework configuration. Temp folder. Reporter Configuration. Hooks. Screenshots.
1. Create `temp` folder in the root project directory.
2. In `wdio.conf.js` make the following changes:
````
    logLevel: 'silent',

    waitforTimeout: 40000,

    reporters: ['spec', ['allure', { outputDir: 'temp/allure-results' }]],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },    

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            let fullName = `${test.parent}.${test.title}`;
            browser.saveScreenshot(`./temp/screenshots/${fullName}.png`);
        }
    },
````
3. In `package.json` add new scripts and make the following changes:
````
    "clean": "rm -rf temp"

    "temp": "mkdir temp\\screenshots" //for Windows
    "temp": "mkdir temp/screenshots" //for MacOS

    "prepare": "npm run clean && npm run temp"
````
Also, include `prepare` into the `test` script:
````
    "test": "npm run prepare && npx wdio run ./wdio.conf.js"
````
Add the new path to the Allure reporter script:
````
    "report": "allure generate ./temp/allure-results -o ./temp/allure-report && allure open ./temp/allure-report"
````
4. Wrap `login.js` code in a higher level `describe`:
````
describe('Login', () => {

    //All test suites

})
````
5. Wrap `forgot.js` code in a higher level `describe`:
````
describe('Forgot', () => {

    //All test suites

})
````
7. Homework:
Write functional tests for `login.js` and `forgot.js`:

Login:
- Clicking Ratings button redirects to `http://qa.intgames.org/users/`
- Rating page is displayed
- Back to Login button is displayed in Header
- Back to Login redirects to `http://qa.intgames.org/`
- Login page is displayed
- Clicking Public Game redirects to `http://qa.intgames.org/public-game/`
- Public game page is displayed
- Error message appears if both fields are empty and click Login: `Please specify email and password`
- Error message disapears on input in Email field
- Error message appears if only Password field is empty and click Login: `Please specify email and password`
- Error message disapears on input in Password field
- Error message appears if only Email field is empty and click Login: `Please specify email and password`
- Error message appears if Email is incorrect: `User with this email does not exist`
- Error message appears if Email is correct but Pasword is not: `Password is incorrect`

Forgot:
- Remind Password redirecs to `http://qa.intgames.org/forgot/`
- Remind Password page is displayed
- Error message appears if only Email field is empty and click Remind Password: `Please specify email`
- Error message appears if Email is incorrect: `User with this email does not exist`
- Success message appears if Email is correct (use `info@techstart.dev`): `Password reminder sent`
- User is redirected to `http://qa.intgames.org/` in 3 sec after the password reminder was sent.

info@techstart.dev
Few commands to use:
````
browser.url('url')
$(element).click()
$(element).setValue('value')
expect(browser).toHaveUrl('expected-url')
expect(element).toBeDisplayed()
````
---