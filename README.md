# 01-protactor

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

### Running a standalone Selenium server
You will need to update the webdriver of Selenium, you can do so by running

on `Mac` or `Linux`
`./node_modules/protractor/bin/webdriver-manager update`

on `windows`
node node_modules/protractor/bin/webdriver-manager update

navigate to `node_modules/protractor/selenium/` folder and check if the version
of the updated webdriver is corresponding in the `protractor-e2e.js` file, if not
change the line 12 of the file:
`seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-{updated-version}.jar',`

to run the tests

- open a promt/terminal
1.- `npm i && bower i` // to install the dependencies

2.- `grunt` // for building the proyect
3.- `grunt serve` // for deploying the app
- open another promt/terminal
4.- on `Mac` or `Linux`
    `./node_modules/protractor/bin/protractor protractor-e2e.js`
    on `windows`
    `node node_modules/protractor/bin/protractor protractor-e2e.js`

5.- check the results in the terminal
