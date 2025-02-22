var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainController');
const storeController = require('../Controllers/storeController');
const taskController = require('../Controllers/taskController');

router.get('/', mainController);
router.get('/about', mainController);
router.get('/store', storeController.browseStore);
router.get('/task', taskController.task);
router.get('/privacy-policy', mainController);

module.exports = router;
