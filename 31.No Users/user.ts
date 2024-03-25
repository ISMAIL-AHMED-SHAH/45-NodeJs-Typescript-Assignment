// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!


let usernames: string[] = ['ismail', 'ahmed', 'shah'];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {

  usernames = [];
  console.log("All usernames have been removed. " + usernames.length);
}



//  Removimg all usernames from the array
// let usernames: string[] = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
   
// }
// Removing all usernames ensures the message "We need to find some users!" is printed.