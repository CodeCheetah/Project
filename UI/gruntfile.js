module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var project = grunt.file.readJSON('project.json');

	grunt.initConfig({
		clean: {
			options: { force: true },
			build: [
				project.paths.build + '**'
			],
			templates: [
				project.paths.templates + '/**'
			],
			dotnet_assets: [
				'../DOTNET/Khws.Project.Web/assets/**'
			],
			dotnet_templates: [
				'../DOTNET/Khws.Project.Web/Views/**/*.cshtml',
				'!../DOTNET/Khws.Project.Web/Views/**/_ViewStart.cshtml',
				'!../DOTNET/Khws.Project.Web/Views/**/Web.config'
			]
	   },
   	   assemble: {
	        options: {
	        	layoutdir: project.paths.layouts,
	            partials : project.paths.partials + "/*.hbs",
	            flatten: true
	        },
			build: {
				options: {
					layout: '/default-layout.hbs'
					//layout: project.paths.layouts + '/default-layout.hbs'
			    },
				src: project.paths.pages + '**/*.hbs',
	           	dest: project.paths.build
			},
	        razor: {
	            src: project.paths.pages + '**/*.hbs',
	            dest: project.paths.build
	        }
	    },
	    processhtml: {
	        options: {
					data: {
						index:	grunt.file.readJSON( project.paths.razor + '/index.json' ),
						form:	grunt.file.readJSON( project.paths.razor + '/form.json' ),
						thankyou:	grunt.file.readJSON( project.paths.razor + '/thankyou.json' ),
						error:	grunt.file.readJSON( project.paths.razor + '/error.json' ),
						header:	grunt.file.readJSON( project.paths.razor + '/header.json' ),
						footer:	grunt.file.readJSON( project.paths.razor + '/footer.json' )
					}
			},
			build: {
	        	files: {
					'./razor_templates/Home/Index.cshtml': [ project.paths.build + 'index.html'],
					'./razor_templates/Form/Index.cshtml': 	[ project.paths.build + 'form.html'],
					'./razor_templates/Form/ThankYou.cshtml': 	[ project.paths.build + 'thankyou.html'],
					'./razor_templates/Error/Index.cshtml': [ project.paths.build + 'error.html'],
					//Layout Template
					'./razor_templates/Shared/_Layout.cshtml': [ project.paths.build + 'layout.html'],
					//Partials
					'./razor_templates/Shared/_Dashboard.cshtml': [ project.paths.build + 'dashboard-partial.html'],
				}
			}
	    },
		concat: {
	      js: {
	        dest:  project.paths.build + '/assets/js/vendor.js',
	        src: [
	          project.paths.bower + '/jquery/dist/jquery.min.js', //84KB
	          project.paths.bower + '/bootstrap/dist/bootstrap.min.js', //37KB
			  project.paths.bower + '/jquery-validation/dist/jquery.validate.min.js', //21KB
			  project.paths.bower + '/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js', //19KB
			  project.paths.bower + '/jquery-validation/dist/additional-methods.min.js', //17KB
	        ]
	      },
	      css: {
	      	dest:  project.paths.build + '/assets/css/style.css',
	        src: [
	          project.paths.build + 'assets/css/**'
	        ]
	      }
	    },
	    copy: {
	    	css: {
	    		files: [ {
						expand: true,
						cwd: project.paths.bower + '/bootstrap/dist/css',
						src: [ '*.min.css' ],
						dest: project.paths.build + 'assets/css'
				} ]
	    	},
	    	fonts: {
	    		files: [ {
						expand: true,
						cwd: project.paths.bower + '/bootstrap/dist/fonts',
						src: ['**'], 
						dest: project.paths.build + 'assets/fonts'
				} ]
	    	},
			assets: {
	    		files: [ {
						expand: true,
						cwd: project.paths.build + 'assets',
						src: ['**'], 
						dest: '../' + project.paths.dotnet + '/assets/'
				} ]
	    	},
			templates: {
				files: [ {
					expand:	true,
					cwd:	project.paths.templates,
					src:	[ '**/*.cshtml' ],
					dest:	'../' + project.paths.dotnet + '/Views/'
				} ]
			},
			dotnet: {
				files: [ {
					expand:	true,
					cwd:	project.paths.templates,
					src:	[ '**' ],
					dest:	'../' + project.paths.dotnet + '/Views'
				} ]
			},
		}
    });

	//Tasks

	//Clean Up
	grunt.registerTask( 'cleanup', [ 'clean:templates','clean:dotnet_templates','clean:build','clean:dotnet_assets']);
	//Local Build
	grunt.registerTask( 'build', [ 'copy:css','copy:fonts','concat:js','assemble:build'] );
	//Template Build
	grunt.registerTask( 'templates', [ 'clean:templates','clean:dotnet_templates','copy:css','copy:fonts','concat:css','concat:js','assemble:razor','processhtml'] );
	//DotNet Integration
	grunt.registerTask( 'dotnet', [ 'clean:templates','clean:dotnet_templates','copy:css','concat:css','concat:js','assemble:razor','processhtml','copy:assets','copy:dotnet'] );
};