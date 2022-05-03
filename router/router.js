const router = require('express').Router();

const userControllers = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/userMiddleware');  

router.post('/', validateUser, userControllers.createUserController);

module.exports = router;