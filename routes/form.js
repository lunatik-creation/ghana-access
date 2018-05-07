const express = require('express');
var router = express.Router();

/* GET form page. */
router.get('/', function(req, res, next) {
  res.render('form', {
    title: 'Formulaire'
  });
});

module.exports = router;