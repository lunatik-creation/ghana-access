const express = require('express');
var router = express.Router();

/* GET CONTACT page. */
router.get('/en', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Us'
  });
});

module.exports = router;