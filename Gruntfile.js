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
		},
		uglify:{
			deploy:{
				src:['src/gira.js','src/github-api.js'],
				dest:'javascripts/'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nunjucks');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.registerTask('default', ['nunjucks', 'copy', 'mocha', 'uglify']);
};
