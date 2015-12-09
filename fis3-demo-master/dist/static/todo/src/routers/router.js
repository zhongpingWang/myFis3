define('static/todo/src/routers/router', ['sea-modules/gallery/backbone/1.0.0/backbone', 'static/todo/src/collections/todos', 'static/todo/src/common'], function(require, exports, module){
	var Backbone, Workspace, todos, common;

	Backbone = require('sea-modules/gallery/backbone/1.0.0/backbone');
	todos = require('static/todo/src/collections/todos')
	common = require('static/todo/src/common');

	Workspace = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			common.TodoFilter = param && param.trim() || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			todos.trigger('filter');
		}
	});

	module.exports = Workspace;
})