// objectMode为true的写入
var Writable = require('stream').Writable;
// 可以直接接受js对象
var ws = Writable({ objectMode: true });
ws._write = function (chunk, enc, next) {
	console.log(chunk.toString());
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);