const vehicleOne = {
	brand: "Ford",
	model: "Mustang",
	type: "Car",
	year: 2021,
	color: "Red"
};


// oldway
function myVehicle (vehicle) {
	const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
	return message;
}


console.log(myVehicle(vehicleOne));


// with destructuring
function myNewVehicle ({type, color, brand, model}) {
	const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
	return message;
}

console.log(myNewVehicle(vehicleOne));



// Another example
const vehicleTwo = {
	brand: "BMW",
	model: "M5",
	type: "car",
	year: 2012,
	color : "black",
	registration: {
		city: "Houston",
		state: "Texas",
		country: "USA"
	}
}


const { brand: make, model = 'X3', year: registrationYear = 2015 } = vehicleTwo

console.log(make); //we have used make instead of brand. the 'make' variable takes value of 'brand'.
console.log(model); //we have given a default value for 'model'. So, if the object does not have a 
// 'model' property, this will return the default value 'X3'.


function myVehicle2 ({model, registration: {state}}) {
	const message = 'My ' + model + ' is registered in ' + state + '.';
	return message;
}

console.log(myVehicle2(vehicleTwo));


// Another example
const personOne = {
	name: "John",
	age: 35,
	country: 'USA',
	address: {
		city: "Phoenix",
		state: "Arizona"
	}
};


const {name, age, ...rest} = personOne;
const {country, address: {city: place}} = personOne; //here we have destructured object inside object.

console.log(name);
console.log(age);
console.log(rest);
console.log(country);
console.log(place);


const personTwo = {
	name: "Joey",
	favouriteFood: "Pizza"
}

const personThree = {...personOne, ...personTwo}; //here we have created personThree by using personOne and
//personTwo. The same properties of personOne is got replaced by properties of personTwo, and extra properties
//are added from personTwo.

console.log(personThree);


function printUser({name, age, favouriteFood = 'Watermelon'}) {
	console.log(`Name is: ${name}, age is: ${age}, Food is: ${favouriteFood}`)
}

printUser(personThree);


function userDetails({name, age, ...other}) {
	console.log(`Name: ${name}, Age: ${age}, Other Details:`, other);
}

userDetails(personOne);


function userDeatailsString({name, age, ...other}) {
	console.log(`Name is: ${name}, age is: ${age}, Other Details: ${JSON.stringify(other)}`);
}

userDeatailsString(personThree);