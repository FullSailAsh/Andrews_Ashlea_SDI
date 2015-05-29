/*
Ashlea Andrews
Functions Assignment
May 27, 2015
Section 01

It wouldn't be right to have this last one not fall in the lobstering theme! :)
 */

//alert("Testing connection");

alert("Hi There! Today we're going to be figuring out what you need for bait, if you were going to be going lobstering!");

//Find out how many pounds of bait are needed using an anonymous function


var totalPounds = function calcBait(numTraps, numTimes, howMuch){ //defines the function

 var numTraps = prompt("How many traps do you plan on hauling each day?"); //user input, how many traps hauled
 while(numTraps ==="" || isNaN(numTraps)){ //will reprompt if user input is blank or not a number
  numTraps = prompt("I'm sorry, please enter the number of traps you plan to be hauling each day. \nThis needs to be a numerical value."); //reprompt
 }

 var numTimes = prompt("How many days will you be hauling your traps this week?"); //find out how many days the traps will be hauled
 while(numTimes ==="" || isNaN(numTimes)) { //validate user input as not blank, and an number
  numTimes = prompt("I'm sorry, we need to know how many days you'll be hauling this week.\nThis needs to be a numerical value."); //reprompt
 }

 var howMuch = ("How much bait are planning to use in each trap?  The most common increments of pounds are 2, 2.5, and 3"); //find out how much bait per trap user is planning to use.
 while(howMuch ==="" || isNaN(howMuch)){ //validate with while loop that user has put in proper variable
  howMuch = prompt("I'm sorry, please tell us how much bait, in pounds, you'll be using per trap.\nThis should be a numerical value."); //reprompt

//figure out the math
 var totalBait = parseInt(numTraps) * parseInt(numTimes) * parseInt(howMuch);
 return totalBait; //putting the information out of the function
}
var output = calcBait(numTimes, numTraps, howMuch); //invoking the function

console.log("You will need " + totalPounds + " pounds of bait to go hauling this week.");


