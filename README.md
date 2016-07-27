# Springy Findeon

ElasticSearch exercise on an express api

Use the raw `elastic-search` npm library, do not use any extra query building libraries for this exercise.

# Run and Test this project

_TO BE FILLED IN BY YOU_




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

#### Get all

**User params** : (none)
**Result** : all documents in the index

#### Get by id

**User params** : **id**
**Result** : an array of 0 or 1 document that has an id that matches the **id** parameter **id** = `1`

will return the bulbasaur document

#### Search name

**User params** : **query**
**Result** : an array of documents where the name property matches **query**. **query** = `sy`

will return the psyduck, and sylveon documents

#### Name starts with

**User params** : **prefix**
**Result** : an array of documents where the name property starts with **prefix**. **prefix** = `star`

should return 5 results, staryu, staravia, starly and staraptor

#### Types, or

**User params** : types as a set of strings
**Result** : an array of documents where the types property includes any of the types passed in as a parameter.

**types** = `fire`

should return 57 results

**types** = `fire and ice`

should return 92 results

#### Types, and

**User params** : types as a set of strings
**Result** : an array of documents where the types property includes all the types passed in as a parameter.

**types** = `fire`

should return 57 results

**types** = `water and grass`

should return 3 results

**types** = `water, grass and flying`

should return 0 results

#### Stat equals value

**User params** : **stat** - **value**
**Result** : an array of documents where the **stat** property matches **value**.

**stat** = `HP` **value** = `160`

should return 1 result, the snorlax document

#### Stat above value

**User params** : **stat** - **value**
**Result** : an array of documents where the **stat** property is greater or equal than the **value** parameter.

**stat** = `attack` **value** = `180`

should return 2 results, mewtwomegamewtwox and rayquazamegarayquaza

#### Stat below value

**User params** : **stat** - **value**
**Result** : an array of documents where the **stat** property is less than the **value** parameter.

**stat** = `defense` **value** = `10`

should return 2 results, mewtwomegamewtwox and rayquazamegarayquaza

#### Stat between low and high values

**User params** : **stat** - **low** - **high**
**Result** : an array of documents where the **stat** property is greater than or equal to **low** and less than the **high** parameter.

**stat** = `totalStats` **low** = `750` **high** = `800`

should return 3 results, mewtwomegamewtwox, rayquazamegarayquaza, and kyogreprimalkyogre

---

Once your endpoints have been approved by an instructor, implement each endpoint one at a time, while providing the requested subset of data.

In express, create an es client, and query the es database to retrieve data for each endpoint.


### Optional

Create a browser application with user controls to display query results.

Hint: express static, `./public`, xhr requests to api
