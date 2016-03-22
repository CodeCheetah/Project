module.exports = function(grunt) {

	grunt.config('watch', {
		concat: {
			files: [
				'grunt-tasks/grunt-concat.js',
			],
			tasks: [
				'concat'
			]
		},
		html: {
			files: ['<%= project.paths.pages %>/{data,templates}/**/*.{hbs,json}'],
        	tasks: ['assemble', 'notify:html']
		},
		gruntfile: {
			files: [
				'gruntfile.js',
			]
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>',
			},
			files: [
				'<%= project.paths.build %>**/*.html',
				'<%= project.paths.build %>assets/css/*.css',
				'<%= project.paths.build %>assets/js/*.js',
				'<%= project.paths.build %>assets/images/**/*.{png,jpg,jpeg,gif,svg}',
			]
		}
	});

};