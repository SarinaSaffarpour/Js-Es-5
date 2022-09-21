// Create the variables here
let isDoorClosed = true;
let isDogOutside = false;
console.log("isDoorClosed is true and isDogOutside is false: ");
// Don't modify this block. This is an if statement, you'll study it later in this course.
if (isDoorClosed == true && isDogOutside == false) {
  console.log("the door is closed and the dog is inside");
} else if (isDoorClosed == false && isDogOutside == true) {
  console.log("The door is open and the dog is outside");
} else console.log("Modify the variables values");

isDoorClosed = false;
isDogOutside = true;
console.log("isDoorClosed is false and isDogOutside is true: ");
if (isDoorClosed == true && isDogOutside == false) {
  console.log("the door is closed and the dog is inside");
} else if (isDoorClosed == false && isDogOutside == true) {
  console.log("The door is open and the dog is outside");
} else console.log("Modify the variables values");
