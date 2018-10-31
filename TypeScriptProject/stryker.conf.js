module.exports = function(config){
    config.set({
      files: [
        "test/**/*.ts",
        "src/**/*.ts"
      ],
      mutate: [
        'src/*.ts',
        '!src/index.ts'
      ],
      testFramework: 'mocha',
      testRunner: 'mocha',
      reporters: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
      coverageAnalysis: 'off', // perTest
      mutator: "typescript",
      tsconfigFile: 'tsconfig.json',
      transpilers: [
        'typescript' 
      ],
      mochaOptions: {
        files: '**/test/**',
        timeout: 5000,
        require: [
          "ts-node/register",
          "source-map-support/register"
        ]
      }
    });
  }