const myVar = ["Audi", "BMW", "Suzuki"]

const car = myVar[0]

console.log(car)


let x = -100;

x>>>=5;

console.log(x)

function myFunction(x, y) {
    return x*y
}

function toCelsius(farenheit) {
    return (5/9)*(farenheit-32);
}

let value = toCelsius;
let text = "the temperature is " + value +" Celsius";

console.log(text)


let random;

random = Math.random()*16;

let int = Math.floor(random)

console.log(int);


// JS Objects

const myCar = {type:"Fiat", model:"500", color:"White"}

console.log(myCar.type)


hello = () => "hello world";

console.log(hello());
