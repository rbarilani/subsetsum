/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint : {
      options : {
        jshintrc : '.jshintrc'
      },
      lib : ['src/**/*.js']
    },
    jasmine: {
      lib: {
        src: 'src/**/*.js',
        options : {
          specs: 'test/**/*_test.js'
        }
      },
      libCoverage : {
        src : '<%= jasmine.unit.src %>',
        options : {
          specs : '<%= jasmine.unit.options.specs %>',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions : {
            coverage : 'out/coverage/coverage.json',
            report : [
              {
                type: 'cobertura',
                options: {
                  dir: 'out/coverage/cobertura'
                }
              },
              {
                type: 'html',
                options: {
                  dir: 'out/coverage/html'
                }
              }
            ]
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'test');
  grunt.registerTask('test', ['jshint:lib','jasmine:lib']);

};
