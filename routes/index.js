var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainController');
const storeController = require('../Controllers/storeController');

router.get('/', mainController);
router.get('/store', storeController.browseStore);


module.exports = router;
