var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainController');
const storeController = require('../Controllers/storeController');
const taskController = require('../Controllers/taskController');
const userController = require('../Controllers/userController');
const commentController = require('../Controllers/commentController');

// Middleware sprawdzający autentykację
const requireLogin = (req, res, next) => {
    if (req.session.userId) {
        console.log('.....req.session', req.session)
      next();
    } else {
      res.redirect('/login');
    }
  };

router.get('/', mainController);
router.get('/about', mainController);
router.get('/store', storeController.browseStore);
router.get('/fetchStore', storeController.fetchStore);
router.get('/getAllItems', storeController.getAllItems);
router.get('/task', taskController.task);
router.get('/privacy-policy', mainController);
router.get("/store/:itemId", storeController.getItem);
router.get('/login', userController.login);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/register', userController.register);
router.post('/register', userController.register);
router.get('/private', requireLogin, userController.private);
router.post('/comments', requireLogin, commentController.addComment);
router.get('/products/:product_id/comments', commentController.getCommentsByProductId);
router.post('/postlogin', userController.postlogin);
router.post('/postregister', userController.postregister);
module.exports = router;
