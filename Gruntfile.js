module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*', '@*/grunt-*']});

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
        shell: {
            mochaTest: {
                command: 'mocha --compilers js:mocha-traceur test/*.js'
            }
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'shell:mochaTest',
        'babel',
        'copy'
    ]);
};
