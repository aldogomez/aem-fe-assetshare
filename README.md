# aem-fe-assetshare
FE re-skin for AEM Asset Share

## 1. Gulp.js

Gulp is the underlying build tool. For insight into the each gulp plugin, check the `build-tasks` directory.

### 1.1. Notable Plugins

* gulp-bower: front-end frameworks dependency management
* browserify: JavaScript module dependency management
* gulp-sass: build Sass styles into CSS
* assemble: build handlebar template files into static html mockups
* iron-fe: front-end to AEM bridge plugin which handles mapping of front-end components (css, js) to AEM components and client libraries.

## 2. Building

Frontend developers that wish to use gulp.js can perform the following steps.

Prerequisites:
* Node and npm installed globally
* gulp installed globally (`npm install -g gulp`)
* iron-fe installed globally (`npm install -g iron-fe`)

Steps:
- cd into the `frontend` directory
- run `gulp` command

### 2.1. What Does the Build Do?

At a high level, building this module performs the following:

1. Compile all Sass files into a single `pagelibs.bundle.css`
2. Compile all JavaScript files into a single `pagelibs.bundle.js`

### 2.2. HTML prototype build?

- cd into the `frontend` directory
- run `gulp prototype` command

### 2.3. Watch build?

- cd into the `frontend` directory
- run `gulp watch` command

### 3. Component JavaScript/Styles

`frontend/components` contains component specific JavaScript and styles. 

If changes to an existing component are required, find the corresponding directory for the component and update the Sass and/or JavaScript files.

At build time, the Sass files are converted into CSS and JavaScript files converted into browser compatible JS.