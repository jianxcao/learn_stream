// 写入流
var Writable = require('stream').Writable;
var wt = Writable();
// 写入数据关键方法
wt._write = function(chunk, en, next) {
	console.dir(chunk);
	next();
};

process.stdin.pipe(wt);