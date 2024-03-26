// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
        return;
    }
    else {
        console.log("Your sandwich includes:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
}
// Call the function with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Banana");
