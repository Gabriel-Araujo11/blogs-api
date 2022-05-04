const loginService = require('../services/loginService');

const BAD_REQUEST = 400;
const CREATED = 201;

async function createLoginController(req, res) {
    const { email, password } = req.body;
    const result = await loginService.createLoginService(email, password);

    if (!email || !password) {
        return res.status(BAD_REQUEST).json({ message: 'Invalid fields' });
    }
    return res.status(CREATED).json({ result });
}

module.exports = { createLoginController };