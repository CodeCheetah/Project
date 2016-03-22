'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  //var project = grunt.file.readJSON('project.json');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	// Project settings
	project: grunt.file.readJSON('project.json')
  });

  //Tasks
  grunt.loadTasks('grunt-tasks');
  
  //Clean Up
  grunt.registerTask( 'cleanup', [ 'clean:templates','clean:dotnet_templates','clean:build','clean:dotnet_assets']);
  //Local Build
  grunt.registerTask( 'build', [ 'copy:css','copy:fonts','concat:js','assemble:build'] );
  //Template Build
  grunt.registerTask( 'templates', [ 'clean:templates','clean:dotnet_templates','copy:css','copy:fonts','concat:css','concat:js','assemble:razor','processhtml'] );
  //DotNet Integration
  grunt.registerTask( 'dotnet', [ 'clean:templates','clean:dotnet_templates','copy:css','concat:css','concat:js','assemble:razor','processhtml','copy:assets','copy:dotnet'] );
};