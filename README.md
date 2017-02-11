# Springy Findeon

ElasticSearch exercise on an express api

Use the raw `elastic-search` npm library

# Run and Test this project

- Fork and clone to local machine
- navigate to corresponding directory
- npm install

Index The Data
- run 'elasticsearch' in cmd line to start ElasticSearch server (default port is 9200)
- run node client.js in cmd line, this will create your new index, and index the data
- check that index was created using curl -XGET 'localhost:9200/_cat/indices?v&pretty' (should contain 800 items)

Run Tests
- npm test

Test The Routes
- run node server.js, this will start the server (default port is 3000)
- navigate to localhost:3000/api/pokedex/ in your browser
- follow the routes specified below to start getting data from your index
- ENJOY


Helpful Commands & Resources
- delete index : curl -XDELETE 'localhost:9200/pokedex?pretty&pretty'
- list all indices : curl -XGET 'localhost:9200/_cat/indices?v&pretty'

http://elasticsearch-cheatsheet.jolicode.com/


## Focus

Using ElasticSearch and node library to access the server api.

Working with data. Seeding data. Formatting Data. Accessing (querying) data.

Understanding the ElasticSearch query DSL and library api.

_you will be reading lots of these docs_

https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html

Designing the api endpoints.

## Blur

The following will be used, though is not the focus of this exercise.

Express API.

TDD with supertest, mocha, chai.


## Goals

Fork and clone this project.

Update the top of this readme to add:

- requirements
- how to seed the database
- how to run the project

### 1. Write a data import script

Create an elasticsearch client using the [elasticsearch](https://www.npmjs.com/package/elasticsearch) npm package.

Set the client `log` option to `trace`.

Make sure the es client connection is valid.

Create an es index named `pokedex` and type `pokemon`.

Read the data from `./data/pokedex.json` and import each document into the `pokedex` index.

Verify that the documents have been successfully added.
(use curl)

### 2. Design and Implement an API

Based on the requirements in the following table, design your own API endpoints that would be used to access the corresponding queried dataset.

All api routes should be mounted on the `/api/` route.
example: `/api/pokedex ...`

##Get all

**User params** : (none)

**Result** : An array with all documents in the index.

**Example**: Will not return all 800 results, just a snippet of the total index.

**Testable Route**: http://localhost:3000/api/pokedex

##Get by id

**User params : id**

**Result** : An array of 0 or 1 document that has an id that matches the id.

**Example**: Parameter **id** = 0 will return the bulbasaur document.

**Testable Route**: localhost:3000/api/pokedex/0



##Search name

**User params** : query

**Result** : An array of documents where the name property matches query.

**Example** : query = sy will return 2 results: psyduck, and sylveon.

**Testable Route**: localhost:3000/api/pokedex/nameContains/sy

##Name starts with

**User params : prefix**

**Result** : An array of documents where the name property starts with prefix.

**Example** : prefix = star will return 5 results: staryu, starmie, starly, staraptor, and staravia.

**Testable Route**: localhost:3000/api/pokedex/nameStartsWith/star

##Types, or

**User params** : Types as a set of strings.

**Result** : An array of documents where the types property includes any of the types passed in as a parameter.

**Example** : **types** = fire will return 64 results.

**Example** : **types** = fire and ice will return 105 results.

**Testable Route**: localhost:3000/api/pokedex/typeOR/fire

**Testable Route**: localhost:3000/api/pokedex/typeOR/fire&ice

##Types, and

**User params** : Types as a set of strings.

**Result** : An array of documents where the types property includes all the types passed in as a parameter.

**Example** : **types** = fire will return 64 results.

**Example** : **types** = water and grass will return 3 results.

**Example** : **types** = water, grass and flying will return 0 results.

**Testable Route**: localhost:3000/api/pokedex/typeAND/water/grass

**Testable Route**: localhost:3000/api/pokedex/typeAND/water/grass/flying


##Stat equals value

**User params** : stat - value.

**Result** : An array of documents where the stat property matches value.

**Example** : **stat** = HP **value** = 160 will return 1 result: snorlax.

**Testable Route**: localhost:3000/api/pokedex/stat/HP/160


##Stat above value

**User params** : stat - value.

**Result** : An array of documents where the **stat** property is greater or equal than the **value** parameter.

**Example** : **stat** = attack **value** = 180 will return 5 results: mewtwomegamewtwox, heracrossmegaheracross, groudonprimalgroudon, deoxysattackforme, and rayquazamegarayquaza.

**Testable Route**: localhost:3000/api/pokedex/statGreaterThan/attack/180


##Stat below value

**User params** : stat - value.

**Result** : An array of documents where the **stat** property is less than the **value** parameter.

**Example** : **stat** = defense **value** = 10 will return 2 results: chansey and happiny.

**Testable Route**: localhost:3000/api/pokedex/statLessThan/defense/10


##Stat between low and high values

**User params** : stat - low - high.

**Result** : An array of documents where the **stat** property is greater than or equal to **low** and less than the **high** parameter.

**Example** : **stat** = totalStats **low** = 750 **high** = 800 will return 5 results: mewtwomegamewtwox, mewtwomegamewtwox, kyogreprimalkyogre, groudonprimalgroudon, and rayquazamegarayquaza.

**Testable Route**: localhost:3000/api/pokedex/statBetween/totalStats/750/800


