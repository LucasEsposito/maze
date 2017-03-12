module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            src: ["test"],
            options: {
                coverage: true,
                root: ".",
                reportFormats: ["lcovonly"]
            }
        },
        coveralls: {
            options: {
                force: true
            },
            main_target: {
                src: "coverage/lcov.info"
            }
        }
    });

    grunt.loadNpmTasks("grunt-coveralls");
    grunt.loadNpmTasks("grunt-mocha-istanbul");

    grunt.registerTask("default", ["mocha_istanbul:coveralls"]);
    grunt.registerTask("coveralls", ["mocha_istanbul:coveralls"]);
    grunt.registerTask("mocha", ["mocha_istanbul:coverage"]);
};
