module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'js/**/*.js', 'tests/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        browserify: {
            'build/pixelart.js': ['js/index.js']
        },
        clean: ['build'],
        copy: [
            { expand: true, flatten: true, src: ['html/index.html'], dest: 'build/' },
            { expand: true, flatten: true, src: ['css/*'], dest: 'build/css/' }
        ],
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },
            all: { src: ['tests/*.js'] }
        }
    });
    
    //Tasks
    grunt.registerTask('build', ['clean', 'jshint', 'simplemocha', 'copy', 'browserify']); //Generates build folder
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-browserify');
};