const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const port = 8080;

http.createServer((req, res) => {
    const parsedIUrl = url.parse(req.url);
    const pathname = parsedIUrl.pathname;

    if (pathname === '/login' && req.method === 'POST'){
        let data = '';
        let formData = '';

        req.on('data', (chuck) => {
           data += chuck;

        });

        req.on('end', () => {
           const body = qs.parse(formData);
        });
        res.end();
    }

    if (pathname === '/') {
        const index = fs.createReadStream('./public/index.html');

        index.pipe(res);
    }
}).listen(port);

console.log('Web Server started!');