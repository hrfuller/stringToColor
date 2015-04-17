module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                modules: 'umd'
            },
            dist: {
                files: {
                    'dist/string-to-color.umd.js': 'src/string-to-color.js'
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
            }
        },
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
        coveralls: {
            options: {
                src: 'coverage-results/lcov.info',
                force: false
            }
        }
    });

    grunt.registerTask('default', [
        'eslint:target',
        'mochaTest:test',
        'babel:dist',
        'copy:main',
        'coveralls'
    ]);
};
