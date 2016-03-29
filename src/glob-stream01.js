//理解glob-stream
//这个东西主要就是将glob获取的所有文件的路径做一个加工，做成一个个对象并放入流中
//

var globStream = require('glob-stream');
var through2 = require('through2');
var test = globStream.create("./**/*.js")

.pipe(through2.obj(function(chunk, err, callback) {
	console.log(typeof chunk);
	this.push(chunk);
	callback();
}));


test.on('data', function(file){
  console.log(file);
});