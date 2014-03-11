module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
    nunjucks: {
      precompile: {
        src: 'src/templates/*',
        dest: 'javascripts/templates.js'
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
			github:{
				src:['src/github-api.js'],
				dest:'javascripts/github-api.js'
			},
			gira:{
				src:['src/gira.js'],
				dest:"javascripts/gira.js"
			}
		},
		watch:{
			scripts: {
				files: ['src/**/*'],
				tasks:['default']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nunjucks');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['nunjucks', 'copy']);
	grunt.registerTask('deploy', ['nunjucks', 'copy','mocha', 'uglify']);
};
