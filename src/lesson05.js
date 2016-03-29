var fs = require('fs');
var through2 = require('through2');

var Readable = require('stream').Readable;
var rs = Readable({ objectMode: true });
rs._read = function() {
	rs.push({cjx: "cjx"});
	
	this.push(null);
};
rs.pipe(through2.obj(function(chunk, err, callback) {
	this.push(JSON.stringify(chunk))
	callback();
	
})).pipe(fs.createWriteStream('./out.txt'));