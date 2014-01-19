module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
    nunjucks: {
      precompile: {
        src: 'data/templates/*',
        dest: 'data/templates.js'
      }
    },
		concat: {
			dev: {
				src: ['data/initVariableDev.js','data/gira.js'],
				dest: 'data/gira.all.js'
			},
			prod: {
				src: ['data/initProdVariables.js','data/gira.js'],
				dest: 'data/gira.all.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nunjucks');
	grunt.registerTask('default', ['nunjucks', 'concat:dev']);
	grunt.registerTask('prod', ['nunjucks', 'concat:prod']);
};
