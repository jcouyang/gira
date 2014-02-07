module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
    nunjucks: {
      precompile: {
        src: 'src/templates/*',
        dest: 'src/templates.js'
      }
    },
		copy: {
      javascripts: {
        files: [{
          src     : ['src/**/*.js','libs/**/*.js'], 
          dest    : 'javascripts/',
          flatten : true,
          expand  : true
        }]
      }
		},
		mocha: {
			test: {
				src: ['test/*.html']
			},
			options: {
				run: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nunjucks');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.registerTask('default', ['nunjucks', 'copy', 'mocha']);
};
