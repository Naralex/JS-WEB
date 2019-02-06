const http = require('http');
const fs = require('fs');
const url = require('url');
const handles = require('./handlers/index');
const port = 8080;

http.createServer((req, res) => {
    req.path = url.parse(req.url).pathname;

    for (const handler of handles){
        if (handler(req, res) === false){break;}
    }
}).listen(port);

console.log('Web Server started!');