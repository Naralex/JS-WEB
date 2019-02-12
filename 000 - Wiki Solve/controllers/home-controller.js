const Article = require('mongoose').model('Article');
const Edit = require('mongoose').model('Edit');

module.exports = {
    index: async (req, res) => {
        try {
            await Article.find({})
                .sort({creationDate: 'descending'})
                .limit(3)
                .then((article) => {
                    const latestEdit = article[0].edits.pop();
                    const latest = Edit.findOne({_id: latestEdit})
                        .then((edit) => {
                            return edit;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    res.render('home/index', {latest, article});
                }).catch(err => {
                console.log(err);
                const latest = {title: 'Article not found!', content: 'Empty!'};
                res.render('home/index', {latest});
            });
        } catch (e) {
            console.log(e)
        }

    }
};