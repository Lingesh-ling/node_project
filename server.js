const express = require('express')
const hbs = require('hbs');

const port = process.env.PORT || 5000;
var app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('fullcaps', (txt) => {
  return txt.toUpperCase();
});

app.use((req,res,next) => {
next();
})

app.get('/',(req,res) => {
  res.render('home.hbs',{
    pageTitle: 'homePage upadted'
  });
})

app.listen(port)
