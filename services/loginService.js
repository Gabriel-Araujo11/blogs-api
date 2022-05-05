const { User } = require('../models');

async function createLoginService(email, password) {
    const user = await User.findOne({ where: { email, password } });
    return user;
}

module.exports = { createLoginService };