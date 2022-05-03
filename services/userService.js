// Busca o models e trata com async / await;

const { User } = require('../models');

async function createUserService(displayName, email, password, image) {
    const result = await User.create(displayName, email, password, image);
    return result;
}

module.exports = { createUserService };