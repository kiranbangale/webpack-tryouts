<!-- 

Setup webpack for any project

https://scotch.io/tutorials/setting-up-webpack-for-any-project?utm_source=newsletter&utm_medium=email&utm_campaign=set_up_webpack_for_any_project&utm_term=2018-01-15

 -->



<!-- Initial steps -->
npm install -g yarn
yarn init
yarn add webpack webpack-dev-server html-webpack-plugin -webpack-dev-server 



<!-- Used Packages -->
Global Node Packages:
yarn

Webpack: 
html-webpack-plugin: Includes js bundle into body element of given template

Sublime: 
HTML Snippets: Sublime package for Html code snippets
prettier: JS code formatter



<!-- package.json -->
"start": "webpack-dev-server --history-api-fallback --inline -progress"

	Enable our server to serve index.html in case of a 404 error
	--inline option allows for injection of a Hot Module Replacement script in our bundle
	--progres option simply shows console outputs of the running tasks



<!-- Notes -->
- Press F6 in sublime for spell checks
