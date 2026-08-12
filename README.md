# JavaScript Testing Practice

## Description

This repository contains JavaScript testing exercises and practice based on the **Fun Fun Function Test Runners playlist**, the **official Jest documentation**, and **The Odin Project's JavaScript Testing Practice** assignment.

The goal of this project is to practice automated testing with Jest and strengthen fundamental JavaScript concepts through test-driven development.

The exercises include:

- Capitalizing strings
- Reversing strings
- Caesar Cipher
- Array analysis
- Calculator functions
- Testing edge cases and expected behavior

## Technologies

- JavaScript
- Jest
- Babel
- ES Modules

## Installs

 *Attention*:
In order for you to use ESM with jest, you will need to install the following (to import and export):


```
1. npm install --save-dev @babel/preset-env@^7
```
2. At a babel.config.js
```
export default {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
``` 
now you will use import/export syntax instead require/module.exports

----

Avoid problem with formating files between Windows and Unix: git config --global core.autocrlf false

Install Jest as a dependencie adding devDependencies at package.json and dowloading pacckages for node_modules: npm install --save-dev jest

## Run
To run in your machine the test.js files you just need to save them as we have a watchAll script in the package.json or run npm test

## Contributions
All kind of contribution are welcome.

## Credits
https://crypto.interactive-maths.com/caesar-shift-cipher.html
https://www.theodinproject.com/lessons/node-path-javascript-testing-practice