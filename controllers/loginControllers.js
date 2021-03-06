const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const SECRET = process.env.JWT_SECRET;
const validateJWT = require('../auth/validateJWT');

const BAD_REQUEST = 400;
const OK = 200;

async function createLoginController(req, res) {
    const { email, password } = req.body;
    const result = await loginService.createLoginService(email, password);

    if (!result) {
        return res.status(BAD_REQUEST).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign({ data: result.id }, SECRET, validateJWT);
        return res.status(OK).json({ token });
}

module.exports = { createLoginController };