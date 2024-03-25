var current_users = ["kamran", "salman", "imran", "irfan", "sultan"];
var new_users = ["Ismail", "Ahmed", "Shah", "Syed", "Ali"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
