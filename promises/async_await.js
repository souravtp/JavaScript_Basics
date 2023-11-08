function makeRequest(location) {
	return new Promise((resolve, reject) => {
		console.log(`making request to ${location}`)
		if (location==='Google') {
			resolve('Google says hi')
		} else {
			reject('We can only talk to Google')
		}
	})
}

function processRequest(response) {
	return new Promise((resolve, reject) => {
		console.log('Processing response')
		resolve(`Extra Information + ${response}`)
	})
}

// makeRequest('Google').then(response => {
// 	console.log('Request received')
// 	return processRequest(response)
// }).then(processedResponse => {
// 	console.log(processedResponse)
// }).catch((err) => {
// 	console.log(err)
// })

//using async await
async function doWork() {
	try {
	const response = await makeRequest('Google')
	console.log('Request received')
	const processedResponse = await processRequest(response)
	console.log(processedResponse)
	} catch (err) {
		console.log(err)
	}
}

doWork();


//another example
const someFunction =(param)=>{
	return new Promise((resolve, reject) => {
		if (param==='hi') {
			resolve('Hello')
		}else {
			reject('Odraa')
		}
	}
)}

const someAnotherFunction = (param2) => {
	return new Promise((resolve, reject) => {
		if (param2==='Hello') {
			resolve('How are you')
		}else {
			reject('Ok Bye')
		}
	})
}

// someFunction('hi').then((response)=> {
// 	console.log(response)
// }).catch((err)=> {
// 	console.log(err)
// })

async function myFunction() {
	try {
		const firstResponse = await someFunction('hoy')
		console.log(firstResponse);
		const secondResponse = await someAnotherFunction(firstResponse);
		console.log(secondResponse);
	}catch(err){
		console.log(`when the Promise is rejected, the message we given inside reject is passed as an\
 argument of catch() that is what printed out here --> ${err}. the remaining code will not be executed.`)
	}
}

myFunction();