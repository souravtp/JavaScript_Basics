/* we can import modules into a file in two ways, based on if they are named exports
or default exports.
Named exports must be destructures using curly braces. Default exports do not.
*/

import { personName2, country } from "./named_export.js"
import message from "./default_export.js"

console.log(personName2, country);
console.log(message())
