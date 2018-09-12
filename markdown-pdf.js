var fs = require('fs'),
    path = require('path'),
    through = require('through'),
    cheerio = require('cheerio'),
    md = require("markdown").markdown,
    markdownpdf = require("markdown-pdf"),
    markdownInclude = require('markdown-include'),
    split = require("split"),
    duplexer = require("duplexer"),
    filePath = path.join(__dirname, 'SUMMARY.md'),
    imgBasePath = __dirname;

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        parsingMD(data);
    } else {
        console.log(err);
    }
});

function parsingMD(data) {
	var look = data.split(/\n/),
		re = /\(([^)]+)\)/,
		reBrackets = /\[([^)]+)\]/,
		mdDocs = new Array(),
		bookPath = 'SUMMARY.pdf',
		replaceLink;

	for (var i = 0; i < look.length; i++) {
		var replacement = re.exec(look[i]);
		
		if (replacement) {
			look[i] = look[i].replace(re, '#include "' + replacement[1] + '"');
			look[i] = look[i].replace(reBrackets, '');
			look[i] = look[i].replace('*', '');
			look[i] = look[i].trim();

			var dirFile = replacement[1],
				reImg = /(!\[.*?\]\()(.+?)(\))/g,
				replaceLink = dirFile.split('/');

			if (replaceLink.length > 1) {
				fs.readFile(dirFile, {encoding: 'utf-8'}, function (err,data) {
				  if (err) {
				    return console.log(err);
				  }

				  var result = data.replace(reImg, function(whole, a, b, c){
				  	return a + path.resolve(__dirname, b) + c;
				  });

				  fs.writeFile(dirFile, result, {encoding: 'utf-8'}, function (err) {
				     if (err) return console.log(err);
				  });
				});
			}

			mdDocs.push(replacement[1]);
		}
	}
	
	markdownpdf().concat.from(mdDocs).to(bookPath, function () {
		console.log("Created", bookPath)
	})
}