const express = require('express');
var router = express.Router();

/* GET FORM page. */
router.get('/en/', function(req, res, next) {
  res.render('form', {
    title: 'Form'
  });
});

module.exports = router;