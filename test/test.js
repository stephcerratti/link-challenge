let chai = require('chai');
var expect = require('chai').expect;
let should = chai.should();

let MarkupCalculator = require('../MarkupCalculator');

let markup = new MarkupCalculator();

describe('MarkupCalculator', () => {
  describe('#markup', () => {
    it('should return 1,591.58 when the base price is $1,299.99, 3 people are working on the job with food', () => {
      markup.totalMarkup(1299.99, 3, 'food').should.equal(1591.58);
    })
    it('should return 6,199.81 when the base price is $5,432.00, 1 person is working on the job with drugs', () => {
      markup.totalMarkup(5432.00, 1, 'pharmacy').should.equal(6199.81);
    })
    it('should return 13,707.63 when the base price is $12,456.95, 4 people are working on the job with books', () => {
      markup.totalMarkup(12456.95, 4, "").should.equal(13707.63);
    })
  });

describe("categoryMarkup", () => {
    it('should add 7.5% onto the new subtotal if the category is drugs or pharmaceuticals', () => {
      markup.additionalMarkup('pharmacy').should.equal(0.075);
    });
    it('should add 13% onto the new subtotal if the category is food', () => {
      markup.additionalMarkup('food').should.equal(0.13);
    });
    it('should add 2% onto the new subtotal if the category is electronics', () => {
      markup.additionalMarkup('electronics').should.equal(0.02);
    });
    it('should add nothing if it is from any other category', () => {
      markup.additionalMarkup("").should.equal(0);
    });
});


  describe("personMarkup", () => {
    it('should add 1.2% for every perosn required on the job', () => {
      markup.addPersonMarkup(3).should.equal(0.036);
    })
  });

});



