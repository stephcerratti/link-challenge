
let basePrice = 0;
let currentSubtotal = 0;
let numberOfPeople = 0;
let category = "";

//this will add a 5% markup to the initial base price.
addBaseMarkup() {
	currentSubtotal = basePrice * 1.05;
	console.log(currentSubtotal);
	return currentSubtotal;
}
//return currentSubtotal to be used by next functions

//this is give the total markup based on the number of people working on the job (1.2% for every person) 
addPersonMarkup() {
	personMarkup = numberOfPeople * 0.012;
	console.log(personMarkup);
	return personMarkup;
}

//this will add the person on the job markup + the category markup. 
additionalMarkup(){
	console.log(personMarkup);
	if (category == "pharmacy") {
		newMarkup = personMarkup + 0.075;
		console.log(newMarkup);
	}

	if (category == "food") {
		newMarkup = personMarkup + 0.13;
		console.log(newMarkup);
	}

	if (category == "electronics") {
		newMarkup = personMarkup + 0.02;
		console.log(newMarkup);

	} 
	else {
	return newMarkup;
	}
}

//this will take the currentSubtotal and apply the newMarkup, whith will return the total price of
//the job. 
newTotal() {
	console.log(currentSubtotal * newMarkup);
	totalPrice = currentSubtotal+currentSubtotal*newMarkup;
	console.log(totalPrice);
	return totalPrice;
}

