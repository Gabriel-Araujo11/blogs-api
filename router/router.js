const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/userControllers');
const loginControllers = require('../controllers/loginControllers');
const { validateUser } = require('../middlewares/userMiddleware');  

router.post('/', validateUser, userControllers.createUserController);
router.post('/login', validateUser, loginControllers.createLoginController);

module.exports = router;