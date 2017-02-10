const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
chai.should();


describe('GET /api/pokedex',  function() {
  it('should return an array of objects that contains all pokemon in the index', function(done) {
    request(app)
      .get('/api/pokedex')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body).to.be.instanceof(Array);
        done()
      });
  });

});

describe('GET /api/pokedex/:id',  function() {
  it('should return the pokemon object that corresponds to its id', function(done) {
    request(app)
      .get('/api/pokedex/0')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body.name).to.equal("bulbasaur");
        expect(res.body).to.be.instanceof(Object);
        done()
      });
  });

});

describe('GET /api/pokedex/nameContains/:id',  function() {
  it('should return an array of pokemon names that have "sy" in their name ', function(done) {
    request(app)
      .get('/api/pokedex/nameContains/sy')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body[0].name).to.equal("psyduck");
        expect(res.body[1].name).to.equal("sylveon");
        expect(res.body).to.be.instanceof(Array);
        done()
      });
  });

});

describe('GET /api/pokedex/nameStartsWith/:id',  function() {
  it('should return an array of pokemon names that "star" ', function(done) {
    request(app)
      .get('/api/pokedex/nameStartsWith/star')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body.length).to.equal(5);
        expect(res.body).to.be.instanceof(Array);
        expect(res.body[0].name).to.equal("staryu");
        expect(res.body[1].name).to.equal("starmie");
        expect(res.body[2].name).to.equal("starly");
        expect(res.body[3].name).to.equal("staraptor");
        expect(res.body[4].name).to.equal("staravia");
        done()
      });
  });

});

describe('GET /api/pokedex/types/:id',  function() {
  it('should return a total of 64 pokemon of types fire  ', function(done) {
    request(app)
      .get('/api/pokedex/types/fire')
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body).to.equal(64);
        done()
      });
  });

});

