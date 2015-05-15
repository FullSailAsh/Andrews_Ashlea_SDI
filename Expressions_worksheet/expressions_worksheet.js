/*
 Ashlea Andrews
 5/13/2015
 Section 01
 Expressions Worksheet


//Dog Years

//Sparky's age in dog years
var dogsAge = prompt("How old is Sparky?");

//Multiply by seven to find dogs age in human years
var humanYears = dogsAge * 7;

//String it together for print
var output = "Sparky is " + humanYears + " years old, which is " + dogsAge + " in dog years.";
console.log(output);

//convey answer to user
alert(output);
 */

//Slice of Pie Part 1

//find out how many people at party
var numPeople = prompt("Hey! How many people are at your party?");

//find out how many pizzas there are
var numPizza = prompt("Cool! How many pizzas did you all order?");

//find out how many slices per pizza there are
var slicesPP = prompt("Wow! How many slices are there per pizza?");

//compute number of slices of pizza total
var totalSlices = slicesPP * numPizza;

//compute how many slices per person
var slicesPerPerson = totalSlices / numPeople;
console.log(slicesPerPerson);

//tell user how many slices per person
alert("Holy smokes! Each person ate " + slicesPerPerson + " slices of pizza at the party!");