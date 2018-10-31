module.exports = function(config){
    config.set({
      mutate: [
        'src/**/*.js',
        '!src/index.js'
      ],
      testFramework: 'mocha',
      testRunner: 'mocha',
      reporters: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
      coverageAnalysis: 'off', // perTest
      mutator: "javascript"
    });
  }