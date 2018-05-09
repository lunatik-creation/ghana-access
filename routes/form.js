const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET form page. */
router.get('/', function(req, res, next) {
  res.render('form', {
    title: 'Formulaire'
  });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'facialucien@gmail.com',
      pass: 'peace96186770'
    }
  });

  var mailOptions = {
    from: 'Ghana Access  <ghanaccess@gmail.com>',
    to: 'facialucien@gmail.com',
    subject: 'Formulaire',
    text: 'text',
    html: '<p>Vous avez recu un nouveau formulaire provenant de Ghana Access</p><ul><li>Name: ' +
      req.body.name + '</li><li>Prenoms: ' + req.body.Prenoms +
      '</li><li>Email: '+ req.body.email +'</li><li>Nationalite: ' + req.body.Nationalite + '</li><li>Profession: ' + req.body.Profession + '</li><li>Niveau scolaire: ' + req.body.Niveau + '</li><li>Telephone: ' + req.body.Telephone + '</li><li>Date de naissance: ' + req.body.Date + '</li><li>Sexe: ' + req.body.Sexe + '</li><li>Duree de sejour: ' + req.body.Sejour + '</li><li>Inscription Scolaire: ' + req.body.Inscription_Scolaire + '</li><li>Hébergement: ' + req.body.Hébergement + '</li><li>Traduction document: ' + req.body.Traduction_document + '</li><li>Etablissement Visa: ' + req.body.Etablissement_Visa + '</li><li>Location e vehicule: ' + req.body.Location_de_vehicule + '</li><li>Reservation_hotel: ' + req.body.Reservation_hotel + '</li><li>Photo: ' + req.body.Photo + '</li><li>Commentaire: ' + req.body.Commentaire + '</li><li>Parain Nom: ' + req.body.Parain_Nom + '</li><li>Parain Prenoms: ' + req.body.Parain_Prenoms + '</li><li>Parain Telephone: ' + req.body.Parain_Telephone + '</li><li>Parain Email: ' + req.body.Parain_Email + '</li></ul>'
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