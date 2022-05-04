const jwt = require('jsonwebtoken');

const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;
const validateJWT = require('../auth/validateJWT');

async function createLoginService(dataBase) {
    const { email, password } = dataBase;
    const result = await User.findOne({ where: { email, password } });

    if (result) {
        const token = jwt.sign({ data: result }, SECRET, validateJWT);
        return token;
    }
}

module.exports = { createLoginService };