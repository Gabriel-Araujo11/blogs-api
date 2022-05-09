const express = require('express');

const router = express.Router();

const verifyJWTMethod = require('../auth/verifyJWT');
const userControllers = require('../controllers/userControllers');
const loginControllers = require('../controllers/loginControllers');
const postCategoriesControllers = require('../controllers/postCategoriesControllers');
const blogPostsControllers = require('../controllers/blogPostsControllers');
const { validateEmail, 
checkSameEmail, 
validatePassword, 
validateDisplayName,
validateNameCategories } = require('../middlewares/userMiddleware');  

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

router.post('/categories',
validateNameCategories,
verifyJWTMethod,
postCategoriesControllers.postCategoriesController);

router.get('/categories',
verifyJWTMethod,
postCategoriesControllers.getAllCategConstroller);

router.get('/post',
verifyJWTMethod,
blogPostsControllers.blogGetAllController);

router.get('/post/:id',
verifyJWTMethod,
blogPostsControllers.blogByIdController);

// router.post('/post',
// verifyJWTMethod,
// blogPostsControllers.blogPostController);

module.exports = router;