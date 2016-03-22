module.exports = function(grunt) {

	grunt.config('connect', {
		options: {
			port: 9000,
			livereload: 35729,
			// change this to '0.0.0.0' to access the server from outside
			hostname: 'localhost'
		},
		livereload: {
			options: {
				open: true,
				base: [
					'<%= project.paths.build %>'
				]
			}
		}
	});

};