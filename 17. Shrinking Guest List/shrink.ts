//Roll # 439714

// creating an array
let Guest_list :string [] = ['ismail','ahmed','shah'];

let absent_Guest = Guest_list[0]

//one guest is unable to come
console.log(absent_Guest, "is unable to join us.\n");

//a friend is replaced in the list on beginning through splice function 
Guest_list.splice(0, 1, "Syed")

// adding on the starting index
Guest_list.unshift("Ameen Alam");

//adding on the ending index
Guest_list.push("Asharib Ali");

//getting middle index
let middleIndex: number = Math.floor(Guest_list.length / 2);

//adding new guest on the middle index
Guest_list.splice(middleIndex, 0, "Okasha Aijaz")

console.log("I'm glad to announce that we've found a bigger table for our dinner gathering.")


Guest_list.forEach(guest => console.log(`Dear ${guest} I am hosting a party on coming weekend.Looking forward to having a fantastic time together.\n`));


//only two guest are invited due to unavailability of bigger table
console.log("unfortunately, i can only invite two guests.");

//remove guests through while loop
while (Guest_list.length > 2) {
    let removeguest = Guest_list.pop();
    console.log(`${removeguest} sorry for this time due to shortage of space`)
}

console.log("Last two guests are invited.");
Guest_list.forEach(lasttwo => console.log(`${lasttwo}, you are still invited.`));

Guest_list.pop();
Guest_list.pop();

console.log("Empty List" , Guest_list)

