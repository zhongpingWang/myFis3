define('static/todo/src/views/todos', ['sea-modules/gallery/backbone/1.0.0/backbone', 'static/todo/src/common', 'sea-modules/jquery/jquery/1.10.1/jquery', 'sea-modules/gallery/underscore/1.4.4/underscore'], function(require, exports, module){
	var Backbone, common, TodoView;

	Backbone = require('sea-modules/gallery/backbone/1.0.0/backbone');
	common = require('static/todo/src/common');

  var $ = require('sea-modules/jquery/jquery/1.10.1/jquery');
  var _ = require('sea-modules/gallery/underscore/1.4.4/underscore');

	TodoView = Backbone.View.extend({
		tagName:  'li',

		template: _.template($('#item-template').html()),

		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'blur .edit': 'close'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.toggleClass('completed', this.model.get('completed'));
			this.toggleVisible();
			this.$input = this.$('.edit');
			return this;
		},

		toggleVisible: function () {
			this.$el.toggleClass('hidden', this.isHidden());
		},

		isHidden: function () {
			var isCompleted = this.model.get('completed');
			return (// hidden cases only
				(!isCompleted && common.TodoFilter === 'completed') ||
					(isCompleted && common.TodoFilter === 'active')
				);
		},

		toggleCompleted: function () {
			this.model.toggle();
		},

		edit: function () {
			this.$el.addClass('editing');
			this.$input.focus();
		},

		close: function () {
			var value = this.$input.val().trim();

			if (value) {
				this.model.save({ title: value });
			} else {
				this.clear();
			}

			this.$el.removeClass('editing');
		},

		updateOnEnter: function (e) {
			if (e.which === common.ENTER_KEY) {
				this.close();
			}
		},

		clear: function () {
			this.model.destroy();
		}
	});

	module.exports = TodoView;
})