const vehicles = ["Alto", "Dominor", "Fortuner"];

const [car, bike, suv] = vehicles;

console.log(car)
console.log(bike)
console.log(suv)


const foods = ['Apple', 'Chicken', 'Onion']

const [fruit,, vegetable] = foods

console.log(fruit)
console.log(vegetable)

// another example
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const number = [1, 2, 3, 4, 5, 6];


// const [a, b] = alphabet;
const [a, b, ...rest] = alphabet;
// the above is called spread operator
const newArray = [...alphabet, ...number]

console.log(a);
console.log(b);
console.log(rest);
console.log(newArray);


// With Functions

function calculate (x, y) {
	const add = x+y;
	const subtract = x-y;
	const multiply = x*y;
	const divide = x/y;

	return [add, subtract, multiply, divide];
}


const result = calculate(5, 3);
console.log(result);

const [add, subtract, multiply, divide, exponent='no exponent'] = calculate(4, 7);
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
console.log(exponent); //since there is no exponent in the function, 'no exponent' will be the output. But if 
//we add exponent option in function. it will be returned.
