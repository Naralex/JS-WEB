const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8080;

//
// function greeter(name, cb){
//     const message = `Hi ${name}`;
//
//     console.log(message);
//     cb(message);
// }

// greeter.great('Ivailo', (message) => {
// console.log(new Date().getTime())
// });
//callback to function

http.createServer((req, res) => {
    // const responseMessage = '<h1>Hello World</h1>';
    const parsedIUrl = url.parse(req.url);
    if (parsedIUrl.pathname === '/') {
        const index = fs.createReadStream('./public/index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});

        index.pipe(res);
    }
    // res.write(responseMessage);
    // res.end();
}).listen(port);

console.log('Web Server started!');