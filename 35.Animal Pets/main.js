// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animalList = ['Cat', 'Rabbit', 'Dog'];
for (var _i = 0, animalList_1 = animalList; _i < animalList_1.length; _i++) {
    var animal = animalList_1[_i];
    console.log(animal);
}
;
//modify list
for (var _a = 0, animalList_2 = animalList; _a < animalList_2.length; _a++) {
    var animal = animalList_2[_a];
    console.log("A ".concat(animal, " would make a great pet"));
}
;
console.log("Any of these animals would make a great pet!");
