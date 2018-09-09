var fs = require('fs'),
    path = require('path'),
    md = require("markdown").markdown,
    markdownpdf = require("markdown-pdf"),
    filePath = path.join(__dirname, 'SUMMARY.md');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        parsingMD(data);
    } else {
        console.log(err);
    }
});

function parsingMD(data) {
	var look = data.split(/\n/);
	var re = /\(([^)]+)\)/;
	var reBrackets = /\[([^)]+)\]/;

	for (var i = 0; i < look.length; i++) {
		var replacement = re.exec(look[i]);
		var replaceBrackets = reBrackets.exec(look[i]);
		
		if (replacement) {
			look[i] = look[i].replace(re, '#include "' + replacement[1] + '"');
			look[i] = look[i].replace(reBrackets, '');
		}
	}

	stringToMD(look);
}

function stringToMD(data) {
	var outputPath = "SUMMARY.pdf",
		output = data.toString().replace(/,/g, '\n');

	markdownpdf().from.string(output).to(outputPath, function () {
	  console.log("Created", outputPath)
	})
}