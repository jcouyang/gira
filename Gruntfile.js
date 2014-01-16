module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
    nunjucks: {
      precompile: {
        src: 'data/templates/*',
        dest: 'data/templates.js'
      }
    }
	});

	grunt.loadNpmTasks('grunt-nunjucks');
	grunt.registerTask('default', ['nunjucks']);
};
