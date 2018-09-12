var fs = require('fs'),
    path = require('path'),
    markdownpdf = require("markdown-pdf"),
  	through = require("through2"),
  	cheerio = require('cheerio'),
    filePath = path.join(__dirname, 'output/SUMMARY.md'),
    basePath = path.resolve(__dirname, 'output/SUMMARY.md');

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
		bookPath = 'output/SUMMARY.pdf';

	for (var i = 0; i < look.length; i++) {
		var replacement = re.exec(look[i]);
		
		if (replacement) {
			look[i] = look[i].replace(re, '#include "output/' + replacement[1] + '"');
			look[i] = look[i].replace(reBrackets, '');
			look[i] = look[i].replace('*', '');
			look[i] = look[i].trim();

			mdDocs.push('output/' + replacement[1]);
		}
	}

	markdownpdf({ preProcessHtml:preProcessHtml(basePath) }).concat.from(mdDocs).to(bookPath, function () {
		console.log("PDF file created: ", bookPath)
	})
}

function preProcessHtml (basePath) {
  	return function() {
        return through(function(chunk, encoding, callback) {
            var $ = cheerio.load(chunk);

            $('img[src]').each(function() {
                var imagePath = $(this).attr('src');
                imagePath = path.resolve(basePath, imagePath);

                $(this).attr('src', 'file://' + (process.platform === 'win32' ? '/' : '') + imagePath);
            });

            this.push($.html());

            console.log("Html file processed.");

            callback();
        });
    }
}