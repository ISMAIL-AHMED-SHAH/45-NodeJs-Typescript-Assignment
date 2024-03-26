// 43.Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Define the array of magicians
let magicians1: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Function to make the magicians great without modifying the original array
function make_great1(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Call the make_great() function to create a new array with "the Great" added to each magician's name
const greatMagicians1: string[] = make_great1([...magicians1]);

// Function to show the list of magicians
function show_magicians1(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Call the show_magicians() function to display the original array
show_magicians1(magicians1);

// Call the show_magicians() function to display the new "great" array
show_magicians1(greatMagicians1);
