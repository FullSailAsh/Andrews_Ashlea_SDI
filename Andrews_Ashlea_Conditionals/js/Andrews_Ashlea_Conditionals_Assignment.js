/*
Ashlea Andrews
 Conditionals Assignment
 May 20, 2015
 Section 01
 */

//alert("Testing connection");

//It's approaching summer in Maine, get ready...it's another lobster calculator ;)


//Goal of calculator:  Find out how many pounds of lobster are needed, dependent on number of people and what size lobsters.

//Find out how many people
var numPeople = prompt("Hi! Let's find out how much lobster you'll need for your meal! \nHow many people will there be?");

//validate prompt
if(numPeople===""){
numPeople=prompt("Oops! We need to know how many people will be having lobster, please don't leave this blank!");
} console.log("There will be " + numPeople +" people having lobster.");


//Find out how many lobsters a piece everyone will be having
var lobEach = prompt("Usually for dinners people have one or two lobsters a piece.  Which would you like to offer? 1 per person, or 2 per person?");
 //validate prompt
if(lobEach===""){
 lobEach = prompt("This is important information as well, please don't skip over it.  Will you be offering 1 lobster or 2 lobsters for each person?")
} console.log("Each person will be having " + lobEach + " lobsters a piece.");
