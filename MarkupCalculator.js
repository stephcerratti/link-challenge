
class MarkupCalculator {
	constructor() {
		this.numberOfPeople = 0;
		this.personMarkup = 0;
		this.category = "";
		this.categoryMarkup = 0;
	};

totalMarkup(base, numberOfPeople, category) {
	let currentSubtotal = base * 1.05;
	let personMarkup = numberOfPeople * 0.012;
	let newMarkup = personMarkup + this.additionalMarkup(category);
	let finalPrice = currentSubtotal * (newMarkup+1);
	// return Number(Math.round(this.finalPrice +'e3') + 'e-3');
	return Math.round(finalPrice * 100)/100;	
}

additionalMarkup(category){
	this.category = category;

	if (this.category == "pharmacy") {
		this.categoryMarkup = 0.075;
	}
	else if (this.category == "food") {
		this.categoryMarkup = 0.13;
	}
	else if (this.category == "electronics") {
		this.categoryMarkup = 0.02;
	} 
	else if (this.category == "") {
		this.categoryMarkup = 0;
	}
		return this.categoryMarkup;
}

addPersonMarkup(numberOfPeople) {
	this.personMarkup = numberOfPeople * 0.012;
	return Number(Math.round(this.personMarkup +'e3') + 'e-3');
}

}

module.exports = MarkupCalculator;
