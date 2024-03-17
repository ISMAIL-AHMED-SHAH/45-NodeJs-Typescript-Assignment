//Roll # 439714

import { countReset } from "console";

let countries: string[] = ["Canada", "Australia", "Sweden", "Switzerland", "Germany"];

console.log("Original order:", countries);

console.log("Alphabetical order:", [...countries].sort());

console.log("Original order:", countries);

console.log("Reverse alphabetical order:", [...countries].sort().reverse());

console.log("Original order:", countries);

countries.reverse();
console.log("Reversed order:", countries);

countries.reverse();
console.log("Original order:", countries);

countries.sort();
console.log("Alphabetical order:", countries);

countries.reverse();
console.log("Reverse alphabetical order:", countries);