const { User } = require('../models');

async function createLoginService(dataUser) {
    const { email, password } = dataUser;
    const user = await User.findOne({ where: { email, password } });
    return user;
}

module.exports = { createLoginService };