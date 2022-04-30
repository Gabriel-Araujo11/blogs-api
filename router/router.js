const express = require('express');

const userControllers = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/userMiddleware');

const router = express.Router();

router.post('/', validateUser, userControllers.createUserController);

module.exports = router;