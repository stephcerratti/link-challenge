 var chai = require('chai');
 var assert = chai.assert;
 var expect = require('chai').expect;

 /***************** ADD BASE MARKUP **************************/

describe('Add base markup', function() {
 	it('should return 5% onto the base price', function() {
 		let basePrice = 100;
  		expect(basePrice * 1.05).to.be.equal(105);
  	});
 });

 /***************** ADD PERSON MARKUP **************************/

 describe('add person markup', function() {
 	it('should return 1.2% for each person on the job', function() {
 		let personMarkup = 3;
 		expect(3*0.012).to.be.equal(0.036.toFixed(3));
 	});
 });



  /***************** ADD CATEGORY MARKUP **************************/

  describe('add category markup', function() {
  	it('should add 13% to the person markup if food', function() {
  		personMarkup = 3;
  		expect(personMarkup + 13).to.be.equal();
  	it('should add 7.5% to the person markup if drug', function() {
  		expect(personMarkup + 7.5).to.be.equal();
  	it('should add 2% to the person markup if electronic', function () {
  		expect(personMarkup + 2).to.be.equal();
  	})
  	})
  	})
  })