
define(function (require, exports, module) {

	var App={};
	require("jquery"); 
	App.Index2=require("js/index2.js");
	require("CSS/index.css");

	App.consoleLog=function(){
		console.log(123);
		App.Index2.consoleLog();
		$("body").append("这是一个测试");
	}

	module.exports=App;

});