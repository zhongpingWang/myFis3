define('static/hello/src/main', ['static/hello/src/spinning'], function(require) {
  var Spinning = require('static/hello/src/spinning');

  var s = new Spinning('#container');
  s.render();

});

