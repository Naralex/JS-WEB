const formidable = require('formidable');
const Tag = require('mongoose').model('Tag');

module.exports = (req, res) => {
    if (req.pathname === '/generateTag' && req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, {'content-type': 'text/plain'});
            const name = fields.tagName;

            Tag.create({
                name,
                creationDate: new Date(),
                images: []
            }).then(tag => {
                    res.writeHead(302, {'location': '/'});
                    res.end();
                }
            ).catch(err => {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.write('500 Server Error!');
                res.end()
            })

        });
    } else {
        return true
    }
};
