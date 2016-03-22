module.exports = function(grunt) {

	grunt.config('assemble', {
	    options: {
	        	layoutdir: '<%= project.paths.layouts %>',
	            partials : '<%= project.paths.partials %>/*.hbs',
	            flatten: true
	        },
			build: {
				options: {
					layout: '/default-layout.hbs'
					//layout: project.paths.layouts + '/default-layout.hbs'
			    },
				src: '<%= project.paths.pages %>**/*.hbs',
	           	dest: '<%= project.paths.build %>'
			},
	        razor: {
	            src: '<%= project.paths.pages %>**/*.hbs',
	            dest: '<%= project.paths.build %>'
	        }
	});

	grunt.loadNpmTasks('grunt-assemble');
};