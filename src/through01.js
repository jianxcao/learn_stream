var through2 = require('through2');
var fs = require('fs');

// 通过through将流转换成一个可读可写的流
fs.createReadStream('./test.txt')
.pipe(through2(function(chunk, err, callback) {
	for (var i = 0; i < chunk.length; i++) {
		if (chunk[i] == 97) {
			chunk[i] = 122; // swap 'a' for 'z' 
		}
	}
	console.log(chunk.toString())
	process.nextTick(function() {
		// call后面也可以跟一个参数，用来写异步的数据
		callback(null, "MMMM");
	});
	this.push(chunk);
	this.push("cjx");
	this.unshift('msb');

}))
.pipe(fs.createWriteStream('./out.txt'));


