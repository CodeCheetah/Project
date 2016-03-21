module.exports = function(grunt) {

	grunt.config('concat', {
		js: {
	        dest:  '<%= project.paths.build %>/assets/js/vendor.js',
	        src: [
	          '<%= project.paths.bower %>/jquery/dist/jquery.min.js', //84KB
	          '<%= project.paths.bower %>/bootstrap/dist/bootstrap.min.js', //37KB
			  '<%= project.paths.bower %>/jquery-validation/dist/jquery.validate.min.js', //21KB
			  '<%= project.paths.bower %>/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js', //19KB
			  '<%= project.paths.bower %>/jquery-validation/dist/additional-methods.min.js', //17KB
	        ]
	      },
	    css: {
	      	dest:  '<%= project.paths.build %>/assets/css/style.css',
	        src: [
	          '<%= project.paths.build %>assets/css/**'
	        ]
	    }
	});

};