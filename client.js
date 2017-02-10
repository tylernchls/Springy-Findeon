const elasticsearch = require('elasticsearch');
const fs = require('fs');
const pokedex = require('./data/pokedex');









// // loaded all pokedex data into index, don't run again
// // or will rewrite data again
// pokedex.map((pokemon) => {

//   client.create({
//     index: 'pokedex',
//     type: 'pokemon',
//     id: pokemon.id,
//     body: {
//       name: pokemon.name,
//       totalStats: pokemon.totalStats,
//       HP: pokemon.HP,
//       attack: pokemon.attack,
//       defense: pokemon.defense,
//       spAtk: pokemon.spAtk,
//       spDef: pokemon.spDef,
//       speed: pokemon.speed,
//       types: pokemon.types
//     }
//   }, function (error, response) {

//   });

// });












