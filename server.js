const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const elasticsearch = require('elasticsearch');
const PORT = 3000;
const pokedex = require('./routes/pokedex');

app.use(bodyParser.urlencoded({
  extended:true
}))

app.use('/api/pokedex', pokedex);

if(process.env.ENVIRONMENT !== 'TEST') {
  app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
  });

}

module.exports = app;

