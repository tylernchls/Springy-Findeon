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

router.route('/:id')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
          match: {
            _id: req.params.id
          }
        }
      }
    })
    .then((body) => {
      let getPokemonById = body.hits.hits.map((pokemon) => {
        return pokemon._source;
      })
      res.json(getPokemonById[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  })

router.route('/name/:id')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
            wildcard: {
              name: `*${req.params.id}*`
            }
        }
      }
    })
    .then((body) => {
      nameByQuerey = body.hits.hits.map((pokemon) => {
        return pokemon._source;
      })
      res.json(nameByQuerey);
    })
    .catch((err) => {
      console.log(err);
    })
  })

router.route('/startsWith/:id')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
            prefix: {
              name: req.params.id
            }
        }
      }
    })
    .then((body) => {
      nameStartsWith = body.hits.hits.map((pokemon) => {
        return pokemon._source;
      })
      res.json(nameStartsWith);
    })
    .catch((err) => {
      console.log(err);
    })
  })

router.route('/types/:id')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
            match: {
              types: req.params.id
            }
        }
      }
    })
    .then((body) => {
      res.json(body.hits.total);
    })
    .catch((err) => {
      console.log(err);
    })
  })





module.exports = router;