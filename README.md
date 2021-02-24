# React Webpack Setup

### Description

This is a simple setup for starting off your frontend projects. The focus was mostly on configuring Webpack 5.

### Technologies Used
- React
- ReactDOM
- Babel
- Webpack

### Note
- Check the `webpack.config.js` for more comments and additional descriptions on what has been used.
- The `template.html` file used is simply to provide a target DOM node for our react app to load. It's best to include this is in the `src/` folder and not in the `build/` or `/bundle` since we are using the webpack dev server which serves from memory.