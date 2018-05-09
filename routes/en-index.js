var express = require('express');
var router = express.Router();

/* GET INDEX page. */
router.get('/en/', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

module.exports = router;