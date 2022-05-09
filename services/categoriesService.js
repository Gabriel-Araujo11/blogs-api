const { Categories } = require('../models');

async function postCategoriesService(name) {
    const result = await Categories.create({ name });
    return result;
}

async function getAllCategories() {
    const result = await Categories.findAll();
    return result;
}

module.exports = { 
    postCategoriesService,
    getAllCategories,
};