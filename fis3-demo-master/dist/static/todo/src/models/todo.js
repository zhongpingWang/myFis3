define('static/todo/src/models/todo', ['sea-modules/gallery/backbone/1.0.0/backbone'], function(require, exports, module){
	var Backbone = require('sea-modules/gallery/backbone/1.0.0/backbone');
	var TodoModel = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false
		},

		toggle: function(){
			this.save({
				completed: !this.get('completed')
			});
		}
	});

	module.exports = TodoModel;
});