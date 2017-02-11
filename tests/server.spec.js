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
  it('should return the pokemon object that corresponds to id searched', function(done) {
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

describe('GET /api/pokedex/nameContains/:name',  function() {
  it('should return an array of pokemon names where name property matches query (ex. nameContains/sy) ', function(done) {
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

describe('GET /api/pokedex/nameStartsWith/name',  function() {
  it('should return an array of pokemon names where name property starts with prefix (ex. nameStartsWith/star) ', function(done) {
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

describe('GET /api/pokedex/typeOR/type',  function() {
  it('should return a total of 105 pokemon of types fire OR ICE  ', function(done) {
    request(app)
      .get('/api/pokedex/typeOR/fire&ice')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body).to.equal(105);
        done()
      });
  });

});

describe('GET /api/pokedex/typeAND/:type1/:type2',  function() {
  it('should return a total of pokemon that has type1 AND type2 (ex.water AND grass)  ', function(done) {
    request(app)
      .get('/api/pokedex/typeAND/water/grass')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body).to.equal(3);
        done()
      });
  });

});

describe('GET /api/pokedex/types/:type1/:type2/:type3',  function() {
  it('should return a total of pokemon that has type1, type2, AND type3 (ex.water,grass, AND flying)  ', function(done) {
    request(app)
      .get('/api/pokedex/types/water/grass/flying')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body).to.equal(0);
        done()
      });
  });

});

describe('GET /api/pokedex/statGreaterThan/:stat/:value',  function() {
  it('it should return an array of pokemon whose stat value is >= stat-value searched for (ex. attack/180) ', function(done) {
    request(app)
      .get('/api/pokedex/statGreaterThan/attack/180')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body.length).to.equal(5);
        expect(res.body).to.be.instanceof(Array);
        expect(res.body[0].name).to.equal("mewtwomegamewtwox");
        expect(res.body[1].name).to.equal("heracrossmegaheracross");
        expect(res.body[2].name).to.equal("groudonprimalgroudon");
        expect(res.body[3].name).to.equal("deoxysattackforme");
        expect(res.body[4].name).to.equal("rayquazamegarayquaza");
        done()
      });
  });

});

describe('GET /api/pokedex/statLessThan/:stat/:value',  function() {
  it('it should return an array of pokemon whose stat value is < stat-value searched for (ex. defense/10) ', function(done) {
    request(app)
      .get('/api/pokedex/statLessThan/defense/10')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body.length).to.equal(2);
        expect(res.body).to.be.instanceof(Array);
        expect(res.body[0].name).to.equal("chansey");
        expect(res.body[1].name).to.equal("happiny");
        done()
      });
  });

});

describe('GET /api/pokedex/statBetween/:stat/:value1/:value2',  function() {
  it('it should return an array of pokemon whose stat value is >= low value & < high value (ex. totalStats/750/800)', function(done) {
    request(app)
      .get('/api/pokedex/statBetween/totalStats/750/800')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body.length).to.equal(5);
        expect(res.body).to.be.instanceof(Array);
        expect(res.body[0].name).to.equal("mewtwomegamewtwoy");
        expect(res.body[1].name).to.equal("mewtwomegamewtwox");
        expect(res.body[2].name).to.equal("kyogreprimalkyogre");
        expect(res.body[3].name).to.equal("groudonprimalgroudon");
        expect(res.body[4].name).to.equal("rayquazamegarayquaza");
        done()
      });
  });

});