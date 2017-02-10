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
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.body).to.be.instanceof(Array);
        done()
      });
  });

});


