var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trek and Stay'});
});

router.get('/login',function(req, res){
	res.render('login', {title: 'Trek and Stay'});
});

router.get('/signup',function(req, res){
	res.render('signup');
});

module.exports = router;
