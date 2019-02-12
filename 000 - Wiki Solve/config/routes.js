const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/users/register', controllers.user.registerGet);
    app.post('/users/register', controllers.user.registerPost);
    app.get('/users/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/users/login', controllers.user.loginGet);
    app.post('/users/login', controllers.user.loginPost);

    app.get('/publish/create', restrictedPages.isAuthed, controllers.article.createArticleGet);
    app.post('/publish/create', restrictedPages.isAuthed, controllers.article.createArticlePost);

    app.get('/publish/all', controllers.article.allArticles);

    app.get('/publish/display/:id', controllers.article.singleArticle);
    app.get('/publish/edit/:id', restrictedPages.isAuthed, controllers.article.singleArticle);
    app.post('/publish/edit/:id', restrictedPages.isAuthed, controllers.article.singleArticle);


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};