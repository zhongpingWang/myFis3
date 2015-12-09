define('static/todo/src/main', ['sea-modules/gallery/backbone/1.0.0/backbone', 'static/todo/src/views/app', 'static/todo/src/routers/router'], function(require){

  var Backbone = require('sea-modules/gallery/backbone/1.0.0/backbone');
  var app = require('static/todo/src/views/app');
  var Workspace = require('static/todo/src/routers/router');

  new Workspace();
	Backbone.history.start();

	new app();
});