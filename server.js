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
app.get('/slides/04', function (req, res) { res.render('slides/s04') })
app.get('/slides/05', function (req, res) { res.render('slides/s05') })
app.get('/slides/06', function (req, res) { res.render('slides/s06') })
app.get('/slides/07', function (req, res) { res.render('slides/s07') })

var server = app.listen(8089, function () {
  var port = server.address().port
  console.log('App listening at http://localhost/%s', port)
})
