const express = require('express');
const router = express.Router();
const elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

router.route('/')
  .get((req, res) => {
    client.search({

    })
    .then((body) => {
      let allPokemon = body.hits.hits.map((pokemon) =>{
        return pokemon._source;
      })
      res.json(allPokemon);
    })
    .catch((err) => {
      console.log(err);

    })
  })



module.exports = router;