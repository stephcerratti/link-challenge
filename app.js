//this will add a 5% markup to the initial base price.

let basePrice = 0;
let currentSubtotal = 0;
let numberOfPeople = 0;
let category = "";


addBaseMarkup() {
	currentSubtotal = basePrice * 1.05;
	console.log(currentSubtotal);
	return currentSubtotal;
}
//return currentSubtotal to be used by next functions

//this is give the total markup based on the number of people working on the job (1.2% for every person) 
addPersonMarkup() {
	let personMarkup = numberOfPeople * 1.12;
	console.log(personMarkup);
	return personMarkup;
}

//this will add the person on the job markup + the category markup. 
additionalMarkup(){
	addPersonMarkup();
	if (category = "pharmacy") {
		personMarkup = personMarkup + 7.5;
	}

	else { if (category = "food") {
		personMarkup = personMarkup + 13;
	}

	else (category = "electronics") {
		personMarkup = personMarkup + 2;

	} }
	return personMarkup;
}
//return newMarkup

//this will take the currentSubtotal and apply the newMarkup, whith will return the total price of
//the job. 
newTotal() {
	totalPrice = currentSubtotal*personMarkup;
	console.log(totalPrice);
	// return currentSubtotal;

}

