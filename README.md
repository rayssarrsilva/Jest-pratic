## Description
This is a follow along with the "Fun Fun Function" Test runners playlist and the Jest oficial documentation practice part

## Installs

## Attention:
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