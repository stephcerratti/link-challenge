 var chai = require('chai');
 var assert = chai.assert;
 var expect = require('chai').expect;

 /***************** ADD BASE MARKUP **************************/

describe('Add base markup', function() {
 	it('should return 5% onto the base price', function() {
 		var x = 100;
  		expect(x*1.05).to.be.equal(105);
  	});
 });

 /***************** ADD PERSON MARKUP **************************/

 describe('add person markup', function() {
 	it('should return 1.2% for each person on the job', function() {
 		expect(3*0.012).to.be.equal(0.036);
 	});
 });



  /***************** ADD CATEGORY MARKUP **************************/