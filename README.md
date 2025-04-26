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

react-webpack/
├── public/
│ └── index.html
├── src/
│ └── index.jsx
├── package.json
├── webpack.config.js

- updated the webpack.config.js file with all the entry points, babel config.
- added .bablerc file at root level
