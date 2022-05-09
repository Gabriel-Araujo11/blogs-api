const postBlogsService = require('../services/postBlogsService');

const OK = 200;
// const CREATED = 201;

// async function blogPostController(req, res) {
//     const { title, content, categoryIds } = req.body;
//     const result = await postBlogsService.blogPostCreateService(title, content, categoryIds);

//     if (result) {
//         return res.status(CREATED).json(result);
//     }
// }

async function blogGetAllController(req, res) {
    const result = await postBlogsService.blogPostGetAll();
    if (result) {
        return res.status(OK).json(result);
    }
}

async function blogByIdController(req, res) {
    const { id } = req.params;
    const result = await postBlogsService.blogPostById(id);

    if (result) {
        return res.status(OK).json(result);
    } 
        return res.status(404).json({ message: 'Post does not exist' });  
}

module.exports = {
    blogGetAllController,
    blogByIdController,
 };