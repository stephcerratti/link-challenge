let chai = require('chai');
var expect = require('chai').expect;

chai.should();

let MarkupCalculator = require('../MarkupCalculator');

describe('MarkupCalculator', () => {
  describe('#markup', () => {
    let markup;

    beforeEach(() => {
      MC = new MarkupCalculator();
    });

    it('should add 13% onto the new subtotal if the category is food', () => {
      MC.additionalMarkup('food').should.equal(0.13)
    })
    // it('should add 7.5% onto the new subtotal if the category is drug or pharmaceutical', () => {
    //   markup.basePrice.should.equal()
    // })
    // it('should add 2% onto the new subtotal if the category is electronic', () => {
    //   markup.basePrice.should.equal()
    // })

    it('should add nothing')
})
});





 /***************** ADD PERSON MARKUP **************************/

 // describe('add person markup', function() {
 // 	it('should return 1.2% for each person on the job', function() {
 // 		let personMarkup = 3;
 // 		expect(3*0.012).to.be.equal(0.036.toFixed(3));
 // 	});
 // });


