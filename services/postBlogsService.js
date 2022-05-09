const { BlogPosts, Categories, User } = require('../models');

// async function BlogPostsCreateService(title, categoryIds, content) {
//     const result = await blogpost.create({ title, categoryIds, content }); 
//     return result;  
// }

async function blogPostGetAll() {
    const result = await BlogPosts.findAll({ 
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
    });
    return result;
}

module.exports = { blogPostGetAll };