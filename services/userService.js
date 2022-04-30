// Busca o models e trata com async / await;

const Users = require('../models/users');

async function createUserService(displayName, email, password, image) {
    const user = await Users.createUser(displayName, email, password, image);
    return user;
}

module.exports = {
    createUserService,
};