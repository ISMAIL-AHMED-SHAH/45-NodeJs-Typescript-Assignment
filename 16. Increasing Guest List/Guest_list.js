"use strict";
//Roll # 439714
// creating an array
let Guest_list = ['ismail', 'ahmed', 'shah'];
let absent_Guest = Guest_list[0];
//one guest is unable to come
console.log(absent_Guest, "is unable to join us.\n");
//a friend is replaced in the list on beginning through splice function 
Guest_list.splice(0, 1, "Syed");
// adding on the starting index
Guest_list.unshift("Ameen Alam");
//adding on the ending index
Guest_list.push("Asharib Ali");
//getting middle index
let middleIndex = Math.floor(Guest_list.length / 2);
//adding new guest on the middle index
Guest_list.splice(middleIndex, 0, "Okasha Aijaz");
console.log("I'm glad to announce that we've found a bigger table for our dinner gathering.");
Guest_list.forEach(guest => console.log(`Dear ${guest} I am hosting a party on coming weekend.Looking forward to having a fantastic time together.\n`));
