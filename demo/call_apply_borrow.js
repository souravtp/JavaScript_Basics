const person = {
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "James",
    lastName : "Cameroon",
}

let x = person.fullName.call(person1);
let y = person.fullName.apply(person1)
console.log(x)
console.log(y)

// with additional arguments
// call()
const human = {
    details : function(city, country) {
        return this.firstName + " " + this.lastName + "," + city +
        "," + country; 
    }
}

const human1 = {
    firstName: "Sourav",
    lastName: "TP",
}

let a = human.details.call(human1, "Payyanur", "India");
console.log(a);


// apply()

let b = human.details.apply(human1, ["Kannur", "India"]);
console.log(b);

let greater = Math.max.apply(null, [1, 2, 3]);
console.log(greater);

// Function Borrowing
//  bind()

const man = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let memberName = man.fullName.bind(member)

console.log(memberName())
