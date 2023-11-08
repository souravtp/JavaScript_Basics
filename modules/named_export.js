// modules allow us to break up codes into separate files.
// there are two types of exports: Named and Default


// ------Named Exports------

/*
You can create named exports two ways. In-line individually, or all at once at the bottom.
*/

// eg: inline individually
export const personName1 = "Jesse"
export const age = 40


// eg: all at once
const personName2 = "John"
const country = "USA"

export { personName2, country }
