
class MarkupCalculator {
	constructor() {
		this.basePrice = 0;
		this.currentSubtotal = 0;
		this.numberOfPeople = 0;
		this.personMarkup = 0;
		this.category = "";
		this.newMarkup = 0;
	};

//this will add a 5% markup to the initial base price.
addBaseMarkup() {
	this.currentSubtotal = basePrice * 1.05;
	return this.currentSubtotal;
}
//return currentSubtotal to be used by next functions

//this is give the total markup based on the number of people working on the job (1.2% for every person) 
addPersonMarkup(numberOfPeople) {
	this.numberOfPeople = numberOfPeople;
	this.personMarkup = this.numberOfPeople * 0.012;
	return Number(Math.round(this.personMarkup +'e3') + 'e-3');
}

//this will add the person on the job markup + the category markup. 
additionalMarkup(category){
	this.category = category;

	if (this.category == "pharmacy") {
		this.newMarkup = this.personMarkup + 0.075;
	}

	if (this.category == "food") {
		this.newMarkup = this.personMarkup + 0.13;
	}

	if (this.category == "electronics") {
		this.newMarkup = this.personMarkup + 0.02;
	} 

	else {
	return this.newMarkup;
	}
}

//this will take the currentSubtotal and apply the newMarkup, whith will return the total price of
//the job. 
newTotal() {
	let totalPrice = this.currentSubtotal+this.currentSubtotal*this.newMarkup;
	console.log(totalPrice);
	return totalPrice;
}
}

module.exports = MarkupCalculator;
