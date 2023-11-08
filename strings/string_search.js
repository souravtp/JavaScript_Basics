const text = "Please locate where 'locate' occurs!";


console.log(text.indexOf("locate"));
console.log(text.indexOf("locate", 15));
console.log(text.lastIndexOf("locate"))
console.log(text.lastIndexOf("locate", 15)); //second argument is the start index to begin search.
console.log(text.lastIndexOf("John")); //returns -1 since it is not in the string.
console.log(text.search("locate"))
console.log(text.search(/locate/))


let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text2.match("ain"));
console.log(text2.match(/ain/)); //this will return only first match
console.log(text2.match(/ain/g)); //use regular expression global (g) to get all occurances
console.log(text2.match(/ain/gi)); //used i to make it case insensitive


let text3 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text3.matchAll("Cats");
console.log(Array.from(iterator))

const iterator2 = text3.matchAll(/cats/gi)
console.log(Array.from(iterator2))

console.log(text3.includes("cats"));
console.log(text3.includes("cxats", 30));


let text4 = "Hello world, welcome to the universe.";

console.log(text4.startsWith("hello"));
console.log(text4.startsWith("Hello"));
console.log(text4.startsWith("world", 6));

console.log(text4.endsWith("universe."));
console.log(text4.endsWith("world", 11))

// Experiments
const myText = "Hello How Are You?"

console.log(myText.lastIndexOf("How", 5));