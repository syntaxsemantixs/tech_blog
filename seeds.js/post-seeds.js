const { Post } = require('../models');

const postData = [{
        title: 'React JS',
        content: 'Did you know there was an extension for React in google extensions?',
        user_id: 1

    },
    {
        title: 'Google',
        content: 'Did you know google chrome saves all our user data?',
        user_id: 2
    },
    {
        title: 'Welcome to the blog!',
        content: 'This is the first post on the blog. What do you think?',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;