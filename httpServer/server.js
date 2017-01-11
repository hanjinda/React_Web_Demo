/**
 * Created by xiongchao on 16/7/16.
 */
var PORT = 4334;
var HTTP = require('http');
var URL = require('url');
var FS = require('fs');

var server = HTTP.createServer(function (request, response) {
    try {
        var url = URL.parse(request.url)
        console.log(url.pathname);
        if(url.pathname == '/' || url.pathname=='/index.html')
        {
            response.setHeader("Content-Type", "text/html");
            response.end(FS.readFileSync('./index.html', 'utf-8'));
            return;
        }

        if(url.pathname == '/bundle.js')
        {
            response.setHeader("Content-Type", "application/x-javascript");
            response.end(FS.readFileSync('./bundle.js', 'utf-8'));
            return;
        }

        response.end();
        return;
    }
    catch (e) {
        console.log(e);
    }
});

server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");