// Busca o models e trata com async / await;

const { User } = require('../models');

async function createUserService(displayName, email, password, image) {
    const result = await User.create(displayName, email, password, image);
    return result;
}

async function allUsersService() {
    const result = await User.findAll();
    return result;
}

async function getByIdUsersService(id) {
    const result = await User.findOne({ where: { id } });
    return result;
}

module.exports = { 
    getByIdUsersService,
    createUserService,
    allUsersService,
 };