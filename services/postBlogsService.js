const { BlogPosts, Categories, User } = require('../models');

// async function BlogPostsCreateService(title, categoryIds, content) {
//     const result = await blogpost.create({ title, categoryIds, content }); 
//     return result;  
// }

// Decidi fazer o getAll, visto que estava dando problemas no .create e no db;

async function blogPostGetAll() {
    const result = await BlogPosts.findAll({ 
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
    });
    return result;
}

async function blogPostById(id) {
    const result = await BlogPosts.findOne({ where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categories, as: 'categories', through: { attributes: [] } },
          ],
     });

    return result;
}

module.exports = { 
    blogPostGetAll,
    blogPostById,
};