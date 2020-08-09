var http = require('http');
var fs = require('fs');
var path = require('path');
const PORT = process.env.PORT || 5001;

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = 'front' + request.url;
    if (filePath == 'front/') {
        filePath = 'front/index.html';
    }
    else if(filePath=="front/favicon.ico"){
        console.log("Asked for favicon");
        filePath="front/index.html"
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
       };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);
console.log('Server running at'+PORT );