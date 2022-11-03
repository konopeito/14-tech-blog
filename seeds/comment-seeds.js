const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'haha same ',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'relatable',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'oof',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;