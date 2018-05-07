const express = require('express');
var router = express.Router();

/* GET SERVICE page. */
router.get('/en/', function(req, res, next) {
  res.render('services', {
    title: 'Services'
  });
});

module.exports = router;