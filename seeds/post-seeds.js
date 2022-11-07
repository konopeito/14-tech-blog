const { Post } = require('../models');

const postdata = [
    // Data (posts)
    {
        title: 'Test',
        description: ' lmao idk what to put here',
        user_id: 1
    },
    {
        title: 'Test 2',
        description: 'still dont know what im doing',
        user_id: 2
    },
    {
        title: 'Test 3',
        description: 'more wordssssssss',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;