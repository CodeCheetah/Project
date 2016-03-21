module.exports = function(grunt) {

	grunt.config('processhtml', {
	        options: {
					data: {
						index:		grunt.file.readJSON( 'razor_source/index.json' ),
						form:		grunt.file.readJSON( 'razor_source/form.json' ),
						thankyou:	grunt.file.readJSON( 'razor_source/thankyou.json' ),
						error:		grunt.file.readJSON( 'razor_source/error.json' ),
						header:		grunt.file.readJSON( 'razor_source/header.json' ),
						footer:		grunt.file.readJSON( 'razor_source/footer.json' )
					}
			},
			build: {
	        	files: {
					'./razor_templates/Home/Index.cshtml': [ '<%= project.paths.build %>index.html'],
					'./razor_templates/Form/Index.cshtml': 	[ '<%= project.paths.build %>form.html'],
					'./razor_templates/Form/ThankYou.cshtml': 	[ '<%= project.paths.build %>thankyou.html'],
					'./razor_templates/Error/Index.cshtml': [ '<%= project.paths.build %>error.html'],
					//Layout Template
					'./razor_templates/Shared/_Layout.cshtml': [ '<%= project.paths.build %>layout.html'],
					//Partials
					'./razor_templates/Shared/_Dashboard.cshtml': [ '<%= project.paths.build %>dashboard-partial.html'],
				}
			}
	});

	grunt.loadNpmTasks('processhtml');
};