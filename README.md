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

git config --global core.autocrlf false

npm install --save-dev jest