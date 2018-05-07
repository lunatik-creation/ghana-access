const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact us page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ghanaccess@gmail.com',
      pass: 'awoko2018'
    }
  });

  var mailOptions = {
    from: 'Ghana Access  <ghanaccess@gmail.com>',
    to: 'facialucien@gmail.com',
    subject: 'Contactez Nous',
    text: 'Vous avez recu un nouveau formulaire provenant de Ghana avec les detail suivants...Nom:' +
      req.body.name + 'Email: ' + req.body.email + 'Sujet: '+ req.body.sujet +' Message: ' + req.body
      .message,
    html: '<p>Vous avez recu un nouveau formulaire provenant de Ghana</p><ul><li>Name: ' +
      req.body.name + '</li><li>Email: ' + req.body.email +
      '</li><li>Sujet: '+ req.body.sujet +'</li><li>Message: ' + req.body.message + '</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent:' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;