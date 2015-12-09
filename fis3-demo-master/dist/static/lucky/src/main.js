
if (document.attachEvent) {
  alert("这个例子不支持 Old IE 哦")
}

define('static/lucky/src/main', ['static/lucky/src/data', 'static/lucky/src/lucky'], function(require) {

  var data = require('static/lucky/src/data');
  var lucky = require('static/lucky/src/lucky');

  lucky.init(data);

});

