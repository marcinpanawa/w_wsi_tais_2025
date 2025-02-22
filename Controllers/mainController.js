const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  });

router.get('/about', (req, res) => {
  res.render('about' );
});

router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy' );
});



module.exports = router; 