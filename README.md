# Setup webpack for any project

https://scotch.io/tutorials/setting-up-webpack-for-any-project?utm_source=newsletter&utm_medium=email&utm_campaign=set_up_webpack_for_any_project&utm_term=2018-01-15



# Initial steps
	* npm install -g yarn
	* yarn init
	* yarn <!-- for insatalling all packages from package.json -->
	* yarn add webpack webpack-dev-server html-webpack-plugin -webpack-dev-server 



# Used Packages
	Global Node Packages: yarn

# Webpack: 
	* html-webpack-plugin: Includes js bundle into body element of given template
	* babel-core: ES6+ transpiler
	* babel-loader: Webpack loader plugin for babel
	* babel-preset-env: preset that compiles ES6+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments
	* style-loader: Webpack loader plugin for loading styles
	* css-loader: Webpack loader plugin for css
	* less-loader: Webpack loader plugin for less
	* extract-text-webpack-plugin: Extracts CSS from JS bundle, or bundles, into a separate CSS file


# Sublime: 
	* HTML Snippets: Sublime package for Html code snippets
	* prettier: JS code formatter
	* javascript snippets: Sublime package for Js code snippets


# package.json:
	* "start": "webpack-dev-server --history-api-fallback --inline -progress"
	* Enable our server to serve index.html in case of a 404 error
		--inline option allows for injection of a Hot Module Replacement script in our bundle
		--progres option simply shows console outputs of the running tasks



# Notes
	* Press F6 in sublime for spell checks
	* Loaders do the pre-processing transformation of any file format when you use them; they work at the individual file level during or before the bundle is generated. On the other hand, plugins are quite simple since they expose only one single function to webpack and are not able to influence the actual build process.
	* Plugins work at bundle or chunk level and usually work at the end of the bundle generation process.
