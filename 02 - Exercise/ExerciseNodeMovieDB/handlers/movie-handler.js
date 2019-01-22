const db = require('../config/dataBase');
const fs = require('fs');
const qs = require('querystring');

module.exports = (req, res) => {
    if (req.path === '/viewAll.html' && req.method === 'GET') {
        fs.readFile('./views/viewAll.html', (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            let allMoviesHTML = '';

            for (const movie of db) {
                let movieHTML = `<div class="movie">`;
                movieHTML += `<img class="moviePoster" src="${movie.moviePoster}" />`;
                movieHTML += `</div>`;
                allMoviesHTML+=movieHTML;
            }
            let responseHTML = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', allMoviesHTML);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(responseHTML);
            res.end();
        })
    }else if (req.path === '/addMovie' && req.method === 'GET'){
        fs.readFile('./views/addMovie.html', (error, data) =>{
            if (error) {
                console.log(error);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
};