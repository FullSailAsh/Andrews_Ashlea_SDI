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
} console.log("There will be " + numPeople +" people at dinner.");

//find out if there are any non-seafood eaters
var landLubbers = prompt("Are there any people who don't like (or are allergic to) seafood?");
if(landLubbers ===""){
 landLubbers = prompt("Oops, this is an important question to answer! \nAre there any people that don't like (or are allergic to) seafood?")
}
(landLubbers ==="Yes" || landLubbers ==="yes") ? console.log("You'll probably want to be sure to get some chicken too!") : console.log("Perfect! You only need to worry about buying lobsters!");


//Find out how many lobsters a piece everyone will be having
var lobEach = prompt("Usually for dinners people have one or two lobsters a piece.  Which would you like to offer? 1 per person, or 2 per person?");
 //validate prompt
if(lobEach===""){
 lobEach = prompt("This is important information as well, please don't skip over it.  Will you be offering 1 lobster or 2 lobsters for each person?");
} console.log("Each person will be having " + lobEach + " lobsters a piece.");

//Find out what size lobster is desired.
var lobSize = prompt("The most common (and yummy) lobsters area a pound and a quarter, and a pound and a half. There are also usually two pound lobsters available. Will you be offering the small, large, or largest sized lobsters?");

//Figure out pounds needed of lobster
if(lobSize ==="small" || lobSize ==="smallest" || lobSize ==="smallest lobsters"){
 console.log("You will need " + (parseInt(numPeople) * parseInt(lobEach) * 1.25) + " pounds of lobster.");

}else if(lobSize ==="large" || lobSize ==="larger" || lobSize ==="large lobsters"){
 console.log("You will need " + (parseInt(numPeople) * parseInt(lobEach) * 1.5) + " pounds of lobster.");

}else if(lobSize ==="largest" || lobSize ==="largest lobsters" || lobSize ==="biggest"){
 console.log("You will need " (parseInt(numPeople) * parseInt(lobEach) * 2) + " pounds of lobster.");

}