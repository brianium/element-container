'use strict';

var src = {
  lib: 'lib'
};

var dest = {
  root: 'dist'
};

module.exports = {
  src: src,
  dist: dest,
  watch: {
    paths: ['js'].reduce(function(paths, ext) {
      return paths.concat(['./index.js', src.lib + '/*.' + ext]);
    }, [])
  }
};
