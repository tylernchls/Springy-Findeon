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

router.route('/nameContains/:name')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
            wildcard: {
              name: `*${req.params.name}*`
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

router.route('/nameStartsWith/:name')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
            prefix: {
              name: req.params.name
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

router.route('/typeOR/:type')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
            match: {
              types: req.params.type
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

router.route('/typeAND/:type1/:type2')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
          query_string : {
            default_field : "types",
            query : `${req.params.type1} AND ${req.params.type2}`
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

router.route('/types/:type1/:type2/:type3')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
          query_string : {
            default_field : "types",
            query : `${req.params.type1} AND ${req.params.type2} AND ${req.params.type3}`
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

router.route('/statGreaterThan/:value')
  .get((req, res) => {
    client.search({
      index: 'pokedex',
      type: 'pokemon',
      body: {
        query: {
          range : {
            attack : {
                gt : `${req.params.value}`,
                boost: 2.0
            }
        }
        }
      }
    })
    .then((body) => {
      res.json(body);
    })
    .catch((err) => {
      console.log(err);
    })
  })








module.exports = router;