define('static/todo/src/collections/todos', ['sea-modules/gallery/backbone/1.0.0/backbone', 'static/todo/src/vendor/backbone.localStorage', 'sea-modules/jquery/jquery/1.10.1/jquery', 'sea-modules/gallery/underscore/1.4.4/underscore', 'static/todo/src/models/todo'], function(require, exports, module){
	var Backbone, TodoModel, TodosCollection;

	Backbone = require('sea-modules/gallery/backbone/1.0.0/backbone');
	require('static/todo/src/vendor/backbone.localStorage');

  var $ = require('sea-modules/jquery/jquery/1.10.1/jquery');
  var _ = require('sea-modules/gallery/underscore/1.4.4/underscore');

	TodoModel = require('static/todo/src/models/todo');

	TodosCollection = Backbone.Collection.extend({
		model: TodoModel,

		localStorage: new Backbone.LocalStorage('todos-backbone'),

		completed: function () {
			return this.filter(function (todo) {
				return todo.get('completed');
			});
		},

		remaining: function () {
			return this.without.apply(this, this.completed());
		},

		nextOrder: function () {
			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		},

		comparator: function (todo) {
			return todo.get('order');
		}
	});

	module.exports = new TodosCollection();
})