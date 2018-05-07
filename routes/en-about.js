const express = require('express');
var router = express.Router();

/* GET ABOUT page. */
router.get('/en/', function(req, res, next) {
  res.render('about', {
    title: 'About Us'
  });
});

module.exports = router;