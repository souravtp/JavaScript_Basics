//the filter() returns an array filled with the elements which pass the test provided by a function.

const names = ["Messi", "Neymar", "Ronaldo", "Lewandowski", "Aubemayang"];

function lengthFunction(name) {
	return name.length > 6;
}

result = names.filter(lengthFunction);

console.log(result);