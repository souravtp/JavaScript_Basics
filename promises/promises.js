let p = new Promise((resolve, reject) => {
	let a = 1+2
	if (a==2) {
		resolve('success')
	} else {
		reject('failed')
	}
})

p.then((message) => {
	console.log('This is in the then ' + message)
}).catch((message) => {
	console.log('This is in the catch ' + message)
})


//another example
const raining = false;
const tea = false;

let anthass = new Promise((resolve, reject) => {
	if (!raining) {
		reject('OOmbi...')
	} else if (!tea) {
		reject('veendum OOmbi...')
	} else {
		resolve('Aahaa Anthass...')
	}
})


anthass.then((message) => {
	console.log(message)
}).catch((message) => {
	console.log(message)
})


//another one
const recordVideoOne = new Promise((resolve, reject) => {
	resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
	resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
	resolve('Video 3 recorded')
})


Promise.all([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
	]).then((messages) => {
	console.log(messages)
})


Promise.race([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
	]).then((message) => {
	console.log(message)
})