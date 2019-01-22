const fs = require('fs');

function getContentType(path) {
    switch (path) {
        case path.endsWith('.css'):
            return 'text/html';
            break;
        case path.endsWith('.img'):
            return 'image/jpg';
            break;
        case path.endsWith('.ico'):
            return 'image/x-icon';
            break;
        default:
            console.log('Error');
            break;
    }
}

module.exports = (req, res) => {
    if (req.path.startsWith('/public') && req.method === 'GET') {
        fs.readFile(`./${req.path}`, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            res.writeHead(200, {'Content-Type': getContentType(req.path)});
            res.write(data);
            res.end();
        })
    }
    else {
        return true;
    }
};