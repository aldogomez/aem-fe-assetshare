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

### 2.2. What Does the Build Do?

At a high level, building this module performs the following:

1. Compile all Sass files into a single `pagelibs.bundle.css`
2. Compile all JavaScript files into a single `pagelibs.bundle.js`

## 3. Maintaining this Module (Developer Notes)

This module contains the frontend code for AEM client libraries and components. 

The expectation is that this module is owned, maintained, and updated by a developer well versed in frontend technologies and best practices. 

However, as mentioned in the [build](#3-building) section, a Java developer will be able to build this project without any assistance from frontend.

There are two types of "objects" in this module.

### 3.1. Component JavaScript/Styles

`frontend/components` contains component specific JavaScript and styles. 

If changes to an existing component are required, find the corresponding directory for the component and update the Sass and/or JavaScript files.

At build time, the Sass files are converted into CSS and JavaScript files converted into browser compatible JS.