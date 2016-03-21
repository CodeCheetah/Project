module.exports = function(grunt) {

	grunt.config('clean', {
		options: { force: true },
		build: [
			'<%= project.paths.build %>**'
		],
		templates: [
			'<%= project.paths.templates %>/**'
		],
		dotnet_assets: [
			'../DOTNET/Khws.Project.Web/assets/**'
		],
		dotnet_templates: [
			'../DOTNET/Khws.Project.Web/Views/**/*.cshtml',
			'!../DOTNET/Khws.Project.Web/Views/**/_ViewStart.cshtml',
			'!../DOTNET/Khws.Project.Web/Views/**/Web.config'
		]
	});

};