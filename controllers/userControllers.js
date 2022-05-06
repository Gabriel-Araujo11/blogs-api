// busca o service e faz o tratamento CREATED or NOT;
const userService = require('../services/userService');

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
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

async function allUsersController(req, res) {
    try {
    const result = await userService.allUsersService();
        return res.status(OK).json(result);
    } catch (err) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

async function getByIdUsersController(req, res) {
    const { id } = req.params;
    const result = await userService.getByIdUsersService(id);

    if (result) {
        return res.status(OK).json(result);
    }

    if (!result) {
        return res.status(NOT_FOUND).json({ message: 'User does not exist' });
    }
}

module.exports = {
    allUsersController,
    createUserController,
    getByIdUsersController,
};