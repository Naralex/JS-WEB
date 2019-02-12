const Edit = require('mongoose').model('Edit');
const Article = require('mongoose').model('Article');
const User = require('mongoose').model('User');


module.exports = {
    createArticleGet: async (req, res) => {
        try {
            res.render('publish/create');
        } catch (e) {
            console.log(e)
        }
    },
    createArticlePost: async (req, res) => {
        let user = User.findOne({
            email: req.user.email
        });
        const {title, content} = req.body;
        try {
            const article = await Article.create({title, edits: []});
            const edit = await Edit.create({title, content, user: req.user._id});

            await article.edits.push(edit._id);

            await Promise.all([ article.save(), edit.save()]);
            res.redirect('/');
        }
        catch (e) {
            console.log(e)
        }
    },
    singleArticle: async (req, res) => {

        try {
            res.render('publish/create');
        } catch (e) {
            console.log(e)
        }
    },
    allArticles: async (req, res) => {
        try {
            res.render('publish/create');
        } catch (e) {
            console.log(e)
        }
    }
};