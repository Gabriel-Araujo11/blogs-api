const express = require('express');

const router = express.Router();

const verifyJWTMethod = require('../auth/verifyJWT');
const userControllers = require('../controllers/userControllers');
const loginControllers = require('../controllers/loginControllers');
const { validateEmail, 
checkSameEmail, 
validatePassword, 
validateDisplayName } = require('../middlewares/userMiddleware');  

router.get('/user',
verifyJWTMethod,
userControllers.allUsersController);

router.get('/user/:id',
verifyJWTMethod,
userControllers.getByIdUsersController);

router.post('/user',
validateEmail,
checkSameEmail,
validatePassword,
validateDisplayName,
userControllers.createUserController);

router.post('/login',
validateEmail,
validatePassword,
loginControllers.createLoginController);

module.exports = router;