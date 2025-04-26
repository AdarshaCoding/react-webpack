# React with webpack bundler

- created react-webpack folder on my desktop and opened in VS Code
- ctrl and tild (~) to open the terminal

### Installed the below packages

```js
npm init
npm i react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev html-webpack-plugin

```

### Folder structure

![alt text](./src/assets/image.png)

- updated the webpack.config.js file with all the entry points, babel config.
- added .bablerc file at root level

### Added TailwindCSS

```js
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 --save-dev
Added below files at root level:
    postcss.config.js:
    tailwind.config.js:
Added index.css inder src/ then imported in index.js
```
