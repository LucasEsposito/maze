module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    mask: '*.spec.js'
                }
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
    grunt.registerTask('mocha', 'mocha_istanbul:coverage');
};
