# Project

## Requirements

For UI build and development the project requires [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/)
Note: You need to install stable node.js versions >= 0.8.0.

To install other node versions you need [nvm](https://www.npmjs.org/package/nvm).
To check which version you are running:

	node --version

To install another version run:

	nvm install v0.10.23

You will then need [Grunt](http://gruntjs.com) and [Bower](http://bower.io) to handle client side dependencies.

## Getting Started

To globally install Grunt and Bower, run the following from the command line:

	npm install -g grunt-cli bower

Install Grunt plugins and other dependencies:

	npm install

Install Bower components

	bower install

## Back-end and Front-end deployment tasks

Run `grunt build` for front-end development and `grunt dotnet` to get front-end assets and DOTNET razor templates into Visual Studio project.