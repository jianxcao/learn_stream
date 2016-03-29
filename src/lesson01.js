var Readable = require('stream').Readable;
var rs = Readable();
var c = 98;
// _read关键方法，读取数据必掉
rs._read = function() {
	rs.push(String.fromCharCode(c++));
	if (c > 'z'.charCodeAt(0)) {
		// push null 表示结束读取
		rs.push(null);
	}
};
// 将流放入到 输出流
rs.pipe(process.stdout);