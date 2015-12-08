# Sample React App - Imgur Client

This is based off the the Udemy Course [Learn and Understand ReactJS](https://www.udemy.com/learn-and-understand-reactjs/learn/)

Upgraded to React 0.14

# The Imgur Client

* Uses [Imgur API](https://api.imgur.com/) to load categories and images.
* A page per category
* Lists images in each category
* Clicking on an image navigates to an Image Detail page

# Features
* React(0.14) + Reflux
* React Router for routes
* Stores for Imgur api data
* Gulp for JSX converting to JS, build steps and live reload (run gulp)
* Browserify to require in react components(files) and bundling/combining files
* Basic responsive design via bootstrap

## Install

    git clone
    npm install
    gulp

gulp will open a browser window running the website

## Prerequisites

You have node installed at v0.10.0+ (it might work at lower versions, we just haven't tested) and npm at v2.0.0+.

## Todo

* Unit test tool into gulp
* Acceptance test tool into gulp
* Webpack possibly
