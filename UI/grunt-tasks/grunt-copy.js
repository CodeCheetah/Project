module.exports = function(grunt) {

	grunt.config('copy', {
		css: {
	    	files: [ {
				expand: true,
				cwd: '<%= project.paths.bower %>/bootstrap/dist/css',
				src: [ '*.min.css' ],
				dest: '<%= project.paths.build %>assets/css'
			} ]
	    },
	    fonts: {
	    	files: [ {
				expand: true,
				cwd: '<%= project.paths.bower %>/bootstrap/dist/fonts',
				src: ['**'], 
				dest: '<%= project.paths.build %>assets/fonts'
			} ]
	    },
		assets: {
	    	files: [ {
				expand: true,
				cwd: '<%= project.paths.build %>assets',
				src: ['**'], 
				dest: '../<%= project.paths.dotnet %>/assets/'
			} ]
	    },
		templates: {
			files: [ {
				expand:	true,
				cwd:	'<%= project.paths.templates %>',
				src:	[ '**/*.cshtml' ],
				dest:	'../<%= project.paths.dotnet %>/Views/'
			} ]
		},
		dotnet: {
			files: [ {
				expand:	true,
				cwd:	'<%= project.paths.templates %>',
				src:	[ '**' ],
				dest:	'../<%= project.paths.dotnet %>/Views'
			} ]
		}
	});

};