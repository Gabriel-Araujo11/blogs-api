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

module.exports = { blogGetAllController };