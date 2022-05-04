const { User } = require('../models');

const CONFLIT = 409;
const BAD_REQUEST = 400;
const emailRegexValidate = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Validation name: deverá ser uma string com no mínimo de 8 caracteres;
function validateDisplayName(req, res, next) {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res
        .status(BAD_REQUEST)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
}

// Validation/Check email
function checkEmail(req, res, next) {
    const { email } = req.body;
    if (email === null) {
        return res.status(BAD_REQUEST).json({ message: '"email" is required' });
    }
    next();
}
// Validation email
function validateEmail(req, res, next) {
    const { email } = req.body;
    if (!email || email.length === 0) {
        return res.status(BAD_REQUEST).json({ message: '"email" is required' });
    }
    if (!emailRegexValidate.test(email)) {
        return res.status(BAD_REQUEST).json({ message: '"email" must be a valid email' });
    }
    next();
}
// Validation password
function validatePassword(req, res, next) {
    const { password } = req.body;
    if (!password || password.length === 0) {
        return res.status(BAD_REQUEST).json({ message: '"password" is required' });
    }
    if (password.length !== 6) {
        return res
        .status(BAD_REQUEST)
        .json({ message: '"password" length must be 6 characters long' });
    }
    next();
}

// Check mesmo email
async function checkSameEmail(req, res, next) {
    const { email } = req.body;
    const chckEmail = await User.findOne({ where: { email } });
    if (chckEmail) {
        return res.status(CONFLIT).json({ message: 'User already registered' });
    }
    next();
}

module.exports = {
    validateUser: [
        checkEmail,
        validateEmail,
        checkSameEmail,
        validatePassword,
        validateDisplayName,
    ],
};