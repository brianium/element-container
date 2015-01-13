'use strict';

var src = {
  root: 'lib'
};

var dest = {
  root: 'dist'
};

module.exports = {
  src: src,
  dist: dest,
  watch: {
    paths: ['js'].reduce(function(paths, ext) {
      return paths.concat([src.root + '/**/*.' + ext, src.root + '/*.' + ext]);
    }, [])
  }
};
