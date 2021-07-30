/* eslint-disable no-undef */
module.exports = function (plop) {
	
	plop.setGenerator('component', {
	description: 'application component',

	// inquirer prompts
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'component name?'
	}],

	// actions to perform
	actions: [{
		type: 'add',
		path: '../src/componenets/{{pascalCase name}}/index.tsx.js',
		templateFile: 'templates/index.tsx.hbs',
	}]
	});

};
