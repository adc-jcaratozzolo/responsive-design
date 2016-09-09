var express = require('express')
var app = express()

// Assets Folder (public)
app.use(express.static('public'))

// For templates
app.set('view engine', 'ejs')

// Index
app.get('/', function (req, res) { res.render('index') })

// Slides
app.get('/slides', function (req, res) { res.redirect('/slides/01') })
app.get('/slides/01', function (req, res) { res.render('slides/s01') })
app.get('/slides/02', function (req, res) { res.render('slides/s02') })
app.get('/slides/03', function (req, res) { res.render('slides/s03') })

var server = app.listen(8089, function () {
  var port = server.address().port
  console.log('App listening at %s', port)
})
