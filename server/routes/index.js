var express = require('express');
var router = express.Router();
const ctrlAuth = require('../controllers/authentication');
const ctrlAbout = require('../controllers/about');
const incomeRouter = require('./income');
const expenseRouter = require('./expense');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

router.get('/about', ctrlAbout.about);
router.use('/income', incomeRouter);
router.use('/expense', expenseRouter);

module.exports = router;
