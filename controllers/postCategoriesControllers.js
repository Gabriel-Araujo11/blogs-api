const categoriesService = require('../services/categoriesService');

const OK = 200;
const CREATED = 201;

async function postCategoriesController(req, res) {
    const { name } = req.body;
    const result = await categoriesService.postCategoriesService(name);

    if (result) {
        return res.status(CREATED).json(result);
    }
}

async function getAllCategConstroller(req, res) {
    const result = await categoriesService.getAllCategories();

    if (result) {
        return res.status(OK).json(result);
    }
}

module.exports = { 
    postCategoriesController,
    getAllCategConstroller,
};