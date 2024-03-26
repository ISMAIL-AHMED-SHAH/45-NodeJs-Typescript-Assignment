// 43.Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of magicians
var magicians1 = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Function to make the magicians great without modifying the original array
function make_great1(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Call the make_great() function to create a new array with "the Great" added to each magician's name
var greatMagicians1 = make_great1(__spreadArray([], magicians1, true));
// Function to show the list of magicians
function show_magicians1(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Call the show_magicians() function to display the original array
show_magicians1(magicians1);
// Call the show_magicians() function to display the new "great" array
show_magicians1(greatMagicians1);
