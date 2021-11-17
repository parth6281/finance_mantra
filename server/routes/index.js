var express = require('express');
var router = express.Router();
const ctrlAuth = require('../controllers/authentication');
const ctrlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

router.get('/about', ctrlAbout.about);

module.exports = router;
