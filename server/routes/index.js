var express = require('express');
var router = express.Router();
const ctrlAuth = require('../controllers/authentication');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

module.exports = router;
