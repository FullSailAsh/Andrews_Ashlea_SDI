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

var numTraps = prompt("How many traps do you plan on hauling each day?"); //user input, how many traps hauled
 while(numTraps ==="" || isNaN(numTraps)){ //will reprompt if user input is blank or not a number
 numTraps = prompt("I'm sorry, please enter the number of traps you plan to be hauling each day. \nThis needs to be a numerical value."); //reprompt
}

var numTimes = prompt("How many days do you plan to go hauling?"); //find out how many days user will be hauling
while(numTimes ==="" || isNaN(numTimes)) { //will reprompt if user input is blank or not a number
 numTimes = prompt("I'm sorry, please enter the number of days you plan to go hauling."); //reprompt
}

var howMuch = prompt("How much bait are you planning on using per trap?"); //user input, how much bait per trap
while(howMuch ==="" || isNaN(howMuch)){ //will reprompt if user input is blank or not a number
 howMuch = prompt("I'm sorry, please enter how much bait you plan on using per trap.  The most common amounts are 2 pounds, 2.5 pounds, and 3 pounds per trap."); //reprompt
}



var calcBait = function(traps, times, amt){ //defining the function
 var totalBait = parseInt(traps) * parseInt(times) * parseInt(amt); //doing the math
 return totalBait; //putting the information out of the function
}
var poundsBait = calcBait(numTraps, numTimes, howMuch); //invoking the function

console.log("That comes out to " + poundsBait + " pounds of bait."); //print the results

//find out how many barrels of bait that translates into using an anonymous function

var numBarrels = barrelsBait(); //set up place for return

function barrelsBait(){ //defines the function
 var barrels = poundsBait / 500; //compute
 return barrels; //puts information out of function
}
console.log("Which means you'll need " + numBarrels + " barrels to go hauling this week." ); //print result


//Test functions


//I entered 400 traps
// 2 days
// 2 pounds of bait
//Calculator gave me
//1600 pounds --correct
//3.2 barrels --correct

//I entered cat
//calculator reprompted
//entered ""
//calculator reprompted
//entered 2
//next prompt entered ten
//reprompted
//entered ""
//reprompted
//entered 10
//next prompt entered three
//reprompted
//entered ""
//reprompted
//entered 3
//calculator gave me
//60 pounds --correct
//.12 barrels --correct