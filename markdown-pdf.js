var fs = require('fs'),
    path = require('path'),
    md = require("markdown").markdown,
    markdownpdf = require("markdown-pdf"),
    markdownInclude = require('markdown-include'),
    filePath = path.join(__dirname, 'SUMMARY.md');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        parsingMD(data);
        compilingFiles();
        stringToPdf();
    } else {
        console.log(err);
    }
});

function parsingMD(data) {
	var look = data.split(/\n/),
		re = /\(([^)]+)\)/,
		reBrackets = /\[([^)]+)\]/;

	for (var i = 0; i < look.length; i++) {
		var replacement = re.exec(look[i]);
		
		if (replacement) {
			look[i] = look[i].replace(re, '#include "' + replacement[1] + '"');
			look[i] = look[i].replace(reBrackets, '');
			look[i] = look[i].replace('*', '');
			look[i] = look[i].trim();
		}
	}

	stringToMD(look);
}

function stringToMD(data) {
	var outputPath = "SUMMARY.pdf",
		output = data.toString().replace(/,/g, '\n');	

	fs.writeFile("_SUMMARY.md", output, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("- Temporary .md file was created! -");
	});
}

function compilingFiles(){
	markdownInclude.compileFiles("markdown.json").then(function (data) {
		console.log('- File compiled! -');
	});
}

function stringToPdf(){
	var outputPath = "SUMMARY.pdf",
		inputPath = "TEMP.md";

	markdownpdf().from(inputPath).to(outputPath, function () {
	  console.log("- PDF Created -", outputPath)
	})
}