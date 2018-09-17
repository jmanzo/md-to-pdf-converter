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

function stylingElements($) {
	$('img[src]').each(function() {
        var imagePath = $(this).attr('src');
        imagePath = path.resolve(basePath, imagePath);

        $(this).attr('src', 'file://' + (process.platform === 'win32' ? '/' : '') + imagePath);
        $(this).css("max-width", "100%");
    });

    $("body").css("margin", "20px");

    $("p:contains('{% hint style=\"tip\" %}')").each(function(){
        var content = $(this).text(),
         	contentReplaced = content.replace('{% hint style="tip" %}', '<quote style="background-color: #f3f3f3;display: block;padding:  20px;margin: 20px 0 20px 0;border-left:  3px solid blue;">');
        contentReplaced = contentReplaced.replace('{% endhint %}', '');
        $(this).replaceWith(contentReplaced);
    });

    $("p:contains('{% hint style=\"note\" %}')").each(function(){
        var content = $(this).text(),
         	contentReplaced = content.replace('{% hint style="note" %}', '<quote style="background-color: #f3f3f3;display: block;padding:  20px;margin: 20px 0 20px 0;border-left:  3px solid red;">');
        contentReplaced = contentReplaced.replace('{% endhint %}', '');
        $(this).replaceWith(contentReplaced);
    });

    $("p:contains('{% hint style=\"warning\" %}')").each(function(){
     	var content = $(this).text(),
            contentReplaced = content.replace('{% hint style="warning" %}', '<quote style="background-color: #f3f3f3;display: block;padding:  20px;margin: 20px 0 20px 0;border-left:  3px solid yellow;">');
     	contentReplaced = contentReplaced.replace('{% endhint %}', '');
     	$(this).replaceWith(contentReplaced);
    });

    $("p:contains('{% hint style=\"info\" %}')").each(function(){
        var content = $(this).text(),
            contentReplaced = content.replace('{% hint style="info" %}', '<quote style="background-color: #f3f3f3;display: block;padding:  20px;margin: 20px 0 20px 0;border-left:  3px solid green;">');
        contentReplaced = contentReplaced.replace('{% endhint %}', '');
        $(this).replaceWith(contentReplaced);
    });

    $("table").each(function(){
        $(this).css("border-collapse", "collapse");
        $(this).find("tr").css("border", "1px solid black");
        $(this).find("td").css("border", "1px solid black");
        $(this).find("th").css("border", "1px solid black");
    });

    console.log("*** Styles applied ***");

    return $;
}

function preProcessHtml (basePath) {
  	return function() {
        return through(function(chunk, encoding, callback) {
            var $ = cheerio.load(chunk);

            $ = stylingElements($);

            /*fs.writeFile(path.resolve(__dirname, 'debugger.html'), $.html(), function(err){
            	if(err) console.log(err);
            	console.log("*** debugger.html written ***");
            }); */

            this.push($.html());

            console.log("Html file processed.");

            callback();
        });
    }
}