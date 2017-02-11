const elasticsearch = require('elasticsearch');
const fs = require('fs');
const pokedex = require('./data/pokedex');

// var client = new elasticsearch.Client({
//   host: 'localhost:9200',
//   log: 'trace'
// });

// // loaded all pokedex data into index, don't run again
// // or will rewrite data again
// pokedex.map((pokemon, index) => {

//   client.create({
//     index: 'pokedex',
//     type: 'pokemon',
//     id: index,
//     body: {
//       name: pokemon.name,
//       totalStats: Number(pokemon.totalStats),
//       HP: Number(pokemon.HP),
//       attack: Number(pokemon.attack),
//       defense: Number(pokemon.defense),
//       spAtk: Number(pokemon.spAtk),
//       spDef: Number(pokemon.spDef),
//       speed: Number(pokemon.speed),
//       types: pokemon.types
//     }
//   }, function (error, response) {

//   });

// });






// curl -XGET 'localhost:9200/_cat/indices?v&pretty'

// curl -XDELETE 'localhost:9200/pokedex?pretty&pretty'













