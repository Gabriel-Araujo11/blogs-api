const express = require('express');

const router = express.Router();

const verifyJWT = require('../auth/verifyJWT');
const userControllers = require('../controllers/userControllers');
const loginControllers = require('../controllers/loginControllers');
const { checkEmail,
validateEmail, 
checkSameEmail, 
validatePassword, 
validateDisplayName } = require('../middlewares/userMiddleware');  

router.post('/',
checkEmail,
validateEmail,
checkSameEmail,
validatePassword,
validateDisplayName,
userControllers.createUserController);

router.post('/login',
verifyJWT.verifyJWTMethod,
validateEmail,
validatePassword,
loginControllers.createLoginController);

module.exports = router;