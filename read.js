var fs = require('fs'),
	md = require("node-markdown").Markdown;

exports.read = fs.readFile('example/test.md', 'utf-8', function(err, data) {
	if (err) throw err;
	var html = md(data);
	
	console.log(html);
});