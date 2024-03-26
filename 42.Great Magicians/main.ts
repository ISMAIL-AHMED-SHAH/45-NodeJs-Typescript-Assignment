// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define the array of magicians
// Step 1: Define the array of magicians
let magicians1 = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Step 2: Write a function to make the magicians great
function make_great1(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = 'the Great ' + magicians1[i];
    }
}

// Step 3: Call the make_great() function to modify the array
make_great1(magicians1);

// Step 4: Function to show the list of magicians
function show_magicians1(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        console.log(magicians1[i]);
    }
}

// Step 5: Call the show_magicians() function to verify the modifications
show_magicians1(magicians1);
