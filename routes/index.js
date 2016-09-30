var express = require('express');
var router = express.Router();

/* GET Karl page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karl Kovacs'});
});

// GET Tim page
router.get('/tim', function (req, res, next) {

  res.render('tim', {title: 'Tim Kovacs'});

});

// GET Tim page
router.get('/martin', function (req, res, next) {

    res.render('martin', {title: 'Martin Kovacs'});

});

// GET Tim page
router.get('/ursula', function (req, res, next) {

    res.render('ursula', {title: 'Ursula Kovacs'});

});

// GET Tim page
router.get('/lara', function (req, res, next) {

    res.render('lara', {title: 'Lara Jimenez'});

});

// GET Tim page
router.get('/deborah', function (req, res, next) {

    res.render('deborah', {title: 'Deborah Hancock'});

});

module.exports = router;
