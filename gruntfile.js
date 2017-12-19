module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {presets: ['es2015']}]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./dist/index.js": ["./modules/index.js"]
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/styles/stylesheet.css' : 'assets/styles/scss/stylesheet.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ["./modules/*.js"],
                tasks: ["browserify"]
            },
            css: {
                files: ["./assets/styles/scss/*.scss", "./assets/styles/scss/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });
 
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
 
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};