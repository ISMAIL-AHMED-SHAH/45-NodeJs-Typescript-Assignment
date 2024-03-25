
let current_users: string[] = ["kamran", "salman", "imran", "irfan", "sultan"];
let new_users: string[] = ["Ismail", "Ahmed", "Shah", "Syed", "Ali"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});