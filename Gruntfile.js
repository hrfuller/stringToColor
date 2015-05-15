module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                configFile: 'eslint.json'
            },
            target: [
                'src/*.js',
                'Gruntfile.js'
            ]
        },
        mochaTest: {
            test: {
                options: {
                    require: 'mocha-traceur'
                },
                src: ['test/**/*.js']
            }
        },
        babel: {
            options: {
                modules: 'umd',
                optional: 'runtime'
            },
            dist: {
                files: {
                    'dist/string-to-color.umd.runtime.js': 'src/string-to-color.js'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/*'],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            },
            babel: {
                files: [
                    {
                        expand: true,
                        src: ['node_modules/babel-runtime/*'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        browserify: {
            dist: {
                files: {
                    'dist/string-to-color.es5.umd.js': ['dist/string-to-color.umd.runtime.js']
                },
                options: {
                    transform: ['babelify']
                }
            }
        },
        clean: {
            build: {
                src: ['dist/node_modules/', 'dist/string-to-color.umd.runtime.js']
            }
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'mochaTest',
        'babel',
        'copy:babel',
        'browserify',
        'copy:main',
        'clean'
    ]);
};
