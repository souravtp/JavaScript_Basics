const array = ["apple", "orange", "grapes", "kiwi"];

array.forEach((fruit) => console.log(`the fruit is ${fruit}`));


//multiplying array elements by 10

const array2 = [15, 22, 40, 8];

console.log(array2);

array2.forEach(multiply);

console.log(array2);

function multiply(item, index, arr) {
	arr[index] = item * 10;
}

console.log(array2);


//add 10 to each array items

const addedArray = []

function addTen(elem) {
	addedArray.push(elem+10);
}

array2.forEach(addTen);

console.log(addedArray);