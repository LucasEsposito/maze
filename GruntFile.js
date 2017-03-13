module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: 'test'
            },
            coveralls: {
                src: 'test',
                options: {
                    check: {
                        lines: 75,
                        statements: 75
                    },
                    reportFormats: ['cobertura','lcovonly']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('default', 'mocha_istanbul:coveralls');
    grunt.registerTask('coveralls', 'mocha_istanbul:coverage');
};
