var React = require('react');
var fs = require('fs');
require('node-jsx').install();


var start, end;

var wrapper = fs.readFileSync(__dirname + '/../views/layout.html', 'utf-8');
var arr = wrapper.split('{{content}}');
var start = arr[0];
var end = arr[1];

var engine = function(filePath, options, callback) {
	var template = require(filePath);
	var rendered = React.renderToString(React.createElement(template, options));
	
	var out = start;

	out += rendered;
	out += '<script>var props = ' + JSON.stringify(options) + '</script>';
	out += end;
	callback(null, out);
}

module.exports = {
	createEngine: function(config) {
		wrapper = 
		return engine;
	}
}
