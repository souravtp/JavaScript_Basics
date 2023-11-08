const cars = ['Alto', 'Thar', 'Baleno', 'Verna', 'Seltos'];

cars.map((elem, index,arr)=> {
	arr[index] = elem.toUpperCase();
})

console.log(cars);


//Difference between map and forEach

const nums = [2, 3, 5, 8, 9];

//squaring using forEach
const returnValue1 = nums.forEach((num) => {
	return num*num;
})


//squaring using map
const returnValue2 = nums.map((num) => {
	return num*num;
})


console.log(returnValue1);  //undefined
console.log(returnValue2); //returns squared array


//another example

const persons = [
	{firstname : "Malcom", lastname: "Reynolds"},
 	{firstname : "Kaylee", lastname: "Frye"},
 	{firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
	return item.firstname + ' ' + item.lastname
}

	
const fullNames = persons.map(getFullName);

console.log(fullNames);