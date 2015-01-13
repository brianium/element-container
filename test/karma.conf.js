module.exports = function(config) {
  config.set({

    frameworks: ['jasmine', 'browserify'],

    files: ['spec/*.js'],

    reporters: ['dots'],

    singleRun: true,
    autoWatch: false,

    browsers: ['PhantomJS'],

    preprocessors: {
      'spec/*.js': ['browserify']
    }
  });
};
