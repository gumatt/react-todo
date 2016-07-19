
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    basePath: '',
    singleRun: true,
    plugins: [
      'karma-browserify',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],
    frameworks: ['browserify', 'mocha', 'chai'],
    files: [
      'dev/**/*.test.jsx'
    ],
    preprocessors: {
      'dev/**/*.test.jsx': ['browserify', 'sourcemap']
    },
    browserify: {
      debug: true,
      transform: ['babelify'],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },
    colors: true,
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    logLevel: config.LOG_INFO
  });
};
