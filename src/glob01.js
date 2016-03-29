var glob = require('glob');
var test = glob("./**/*.js", {
	realpath: true
}, function(err, files) {
	// 返回一个数组的文件名称
	console.log(files);

});