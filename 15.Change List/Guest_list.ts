let Guest_list :string [] = ['ismail','ahmed','shah'];

let absent_Guest = Guest_list[0]

console.log(absent_Guest, "is unable to join us");

Guest_list.splice(0, 1, "Syed")

Guest_list.forEach(guest => console.log(`Dear ${guest} I am hosting a party on coming weekend.Looking forward to catching up and having a fantastic time together.`));

// let Guest_list :string [] = ['ismail','ahmed','shah'];

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+ Guest_list[i] + ',\n\n I am hosting a party on coming weekend. Looking forward to catching up and having a fantastic time together. \n\nThank you!\n\n')
// }
// let absent_Guest :string = 'ismail'; 

// let new_Guest = 'Syed' ;

// Guest_list[0] = new_Guest ;


// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+ Guest_list[i] + ',\n\n I am hosting a party on coming weekend.Looking forward to catching up and having a fantastic time together. \n\nThank you!\n\n')
// }

// console.log(`Mr. ${absent_Guest} is not able to join us.`)
