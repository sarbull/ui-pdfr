(function(){
  "use strict";

  module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    name: '<%= pkg.name %>',
    banner: '/*\n * <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n */\n',
    concat: {
      options: {
        stripBanners: true,
        banner: '<%= banner %>'
      },
      dist: {
        src: [
          'src/modules.js',
          'dist/<%= pkg.name %>.templateCache.js',
          'src/**/*.js'
        ],
        dest: 'dist/<%= pkg.name %>.js',
      },
    },
    uglify: {
      dist: {
        options:{
          banner: '<%= banner %>',
          quoteStyle: 1,
          mangle: true
        },
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    html2js: {
      options: {
        fileHeaderString: '(function(){\n \'use strict\';\n',
        fileFooterString: '\n})();\n',
        singleModule: true,
        quoteChar: '\'',
        module: '<%= pkg.name %>.templateCache',
        htmlmin: {
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          removeComments: true,
          removeEmptyAttributes: false,
          removeRedundantAttributes: false
        }
      },
      main: {
        src: ['src/**/*.tpl.html'],
        dest: 'dist/<%= pkg.name %>.templateCache.js'
      },
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'src/**/*.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: true
      }
    },
    less: {
      development: {
        options: {},
        files: {
          'dist/css/<%= pkg.name %>.css': 'src/modules.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'src/modules.less'
        }
      },
    },
    watch: {
      scripts: {
        files: ['src/**/*.*'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'jshint',
    'html2js:main',
    'less',
    'concat',
    'uglify:dist'
  ]);

};
})();
