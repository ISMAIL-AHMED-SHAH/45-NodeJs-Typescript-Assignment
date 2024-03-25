// Question#37 : Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//for default large size
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered ".concat(size, " sized T-shirt with the message: ").concat(message));
}
make_shirt("Large", "Coding King");
//for default medium size
make_shirt("Medium");
//for customised shirt
make_shirt("Small", "Coding Holic");
