const express = require('express');
var router = express.Router();

/* GET PARTNER page. */
router.get('/en/', function(req, res, next) {
  res.render('partner', {
    title: 'Partner'
  });
});

module.exports = router;