/*
 Ashlea Andrews
 5/13/2015
 Section 01
 Expressions Worksheet


//Dog Years

//Sparky's age in dog years
var dogsAge = prompt("Let's find out how old Sparky would be in human years!\nHow old is Sparky?");

//Multiply by seven to find dogs age in human years
var humanYears = dogsAge * 7;

//String it together for print
var output = "Sparky is " + humanYears + " years old, which is " + dogsAge + " in dog years.";
console.log(output);

//convey answer to user
alert(output);


//Slice of Pie Part 1

//find out how many people at party
var numPeople = prompt("Hey! Let's find out how much pizza everyone is going to eat!\nHow many people are at your party?");

//find out how many pizzas there are
var numPizza = prompt("Cool! How many pizzas did you all order?");

//find out how many slices per pizza there are
var slicesPP = prompt("Wow! How many slices are there per pizza?");

//compute number of slices of pizza total
var totalSlices = slicesPP * numPizza;

//compute how many slices per person
var slicesPerPerson = totalSlices / numPeople;
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//tell user how many slices per person
alert("Holy smokes! Each person ate " + slicesPerPerson + " slices of pizza at the party!");

//Slice of Pie part II

//how many slices Sparky got
var sparkysShare = totalSlices % numPeople;
console.log("Sparky got " + sparkysShare + " slices of pizza.");

//tell user how many slices Sparky gets
alert("If you were fair, Sparky got " + sparkysShare + " slices of pizza.");

 */

//Average Shopping Bill

//create an array with grocery totals for past five weeks
var groceryTotals = [130, 113, 157, 104, 121];

//add them up
var groceryAll = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4]

//find the average
var grocAvg = groceryAll / 5
//print
console.log("You have spent a total of $" + groceryAll + "on groceries over 5 weeks.  That is an average of $" + grocAvg + " per week");

