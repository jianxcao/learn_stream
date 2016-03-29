// 可读的时候就读取数据
process.stdin.on('readable', function() {
	var buf = process.stdin.read();
	console.dir(buf);
});