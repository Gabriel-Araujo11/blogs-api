// busca o service e faz o tratamento CREATED or NOT;
const userService = require('../services/userService');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;

async function createUserController(req, res) {
    const { displayName, email, password, image } = req.body;

    const result = await userService.createUserService({
        displayName, email, password, image });

    if (result) {
        return res.status(CREATED).json(result);
    }
    if (!result) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: 'error' });
    }
}

module.exports = {
    createUserController,
};