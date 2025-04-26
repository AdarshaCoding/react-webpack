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
│
├── node_modules/ # Installed npm packages
│
├── public/ # Public files
│ ├── index.html # Main HTML template file
│
├── src/ # Your source code
│ ├── assets/ # Any static assets (images, fonts, etc.)
│ ├── components/ # React components
│ │ ├── Header.js # Header component
│ │ ├── Body.js # Body component
│ ├── index.css # Tailwind CSS import file
│ ├── index.js # React entry point
│ ├── AppLayout.jsx # Main App component (with routing, etc.)
│
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── postcss.config.js # PostCSS configuration file (with Tailwind and Autoprefixer)
├── tailwind.config.js # Tailwind CSS configuration
├── webpack.config.js # Webpack configuration file
└── README.md # Project documentation (optional)

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
