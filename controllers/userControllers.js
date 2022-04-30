// busca o service e faz o tratamento CREATED or NOT;
const createUserService = require('../services/userService');

const CREATED = 201;

async function createUserController(req, res) {
    const { displayName, email, password, image } = req.body;

    const result = await createUserService({
        displayName, email, password, image });

    if (result) {
        return res.status(CREATED).json(result);
    }
}

module.exports = {
    createUserController,
};