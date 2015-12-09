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
* SCSS for CSS, gulp converts SCSS to combined CSS file

## Install

First install the grunt-cli tool
    sudo npm install -g grunt-cli
    git clone https://github.com/jamiegood/imgur-client.git
    cd imgur-client
    npm install (maybe sudo required)
    gulp

gulp will open a browser window running the website with Live Reload.

## Prerequisites

You have node installed at v4.2.1+ (it might work at lower versions, we just haven't tested) and npm at v2.0.0+.

## Todo

* Unit test tool into gulp
* Acceptance test tool into gulp
* Webpack possibly
