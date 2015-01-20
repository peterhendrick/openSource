// Generated on 2014-03-24 using generator-angular-fullstack 1.3.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);



  // Project configuration.
  grunt.initConfig({
    // jshint: {
    //   all: [
    //   'gruntfile-e2e.js',
    //   // 'tasks/*.js'
    //   ],
    //   options: {
    //     jshintrc: '.jshintrc',
    //   },
    // },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp',
        'build',
        'instrumented',
        'coverage',
        'reports'
      ],
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'instrumented/'
        }
      },
    },

    
    // Configuration to be run (and then tested).
    protractor_coverage: {
      options: {
        configFile: "./protractorConf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        coverageDir: 'coverage',
        args: {}
      },
      local: {
        options: {
          args: {
            baseUrl: 'http://localhost:3000/',
            // Arguments passed to the command
            'browser': 'chrome'
          }
        }
      },
      // remote: {
      //   options: {
      //     configFile: "test/protractorConf.remote.js", // Default config file
      //     args: {
      //       baseUrl: 'http://localhost:3000/',
      //       // Arguments passed to the command
      //       'browser': 'chrome'
      //     }
      //   }
      // },
    },
    copy: {
      'instrument': {
        files: [{
          src: ['./**/*', '!./**/*.js',],
          dest: 'instrumented/'
        }]
      }
    },
    instrument: {
      files: [ 'public/modules/**/*.js', 'public/dist/**/*.js', 'public/*.js', 'app/**/*.js' ],
      options: {
        //lazy: true,
        basePath: 'instrumented/'
      }
    },
    makeReport: {
      src: 'coverage/**/*.json',
      options: {
        type: 'html',
        dir: 'reports',
        print: 'detail'
      }
    },
    // coveralls: {
    //   options: {
    //     // dont fail if coveralls fails
    //     force: true
    //   },
    //   main_target: {
    //     src: 'reports/**/*.info'
    //   }
    // },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-istanbul');
  // grunt.loadNpmTasks('grunt-coveralls');
  grunt.loadNpmTasks('grunt-protractor-coverage');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'copy',
    'instrument',
    'connect:server',
    'protractor_coverage:local',
    'makeReport',
    // 'coveralls'
  ]);

  // grunt.registerTask('test-remote', ['clean', 'copy', 'instrument', 'connect:server', 'protractor_coverage:remote', 'makeReport', 'coveralls']);

  // By default, lint and run all tests.
  grunt.registerTask('default', [
  //  'jshint',
   'test'
  ]);

};
