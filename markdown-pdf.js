var fs = require('fs'),
    path = require('path'),
    md = require("markdown").markdown,
    filePath = path.join(__dirname, 'SUMMARY.md');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
    	console.log(data);
        //parsingMD(data);
    } else {
        console.log(err);
    }
});

function parsingMD(file) {
	//
}