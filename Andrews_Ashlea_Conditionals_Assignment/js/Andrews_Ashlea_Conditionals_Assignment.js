/*
Ashlea Andrews
 Conditionals Assignment
 May 20, 2015
 Section 01
 */

//It's approaching summer in Maine, you said to use inspiration with what we know.
//With getting the boat and traps ready, there's one thing (other than school, predominantly on the mind..
// Get ready...it's another lobster calculator ;)

//alert("Testing connection");




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
var lobSize = prompt("The most common (and yummy) lobsters are a a pound and a quarter, and a pound and a half each. There are also usually two pound lobsters available. Will you be offering the small, large, or largest sized lobsters?");

//Figure out pounds needed of lobster
if(lobSize ==="small" || lobSize ==="smallest" || lobSize ==="smallest lobsters"){
 console.log("You should get " + (parseInt(numPeople) * parseInt(lobEach) * 1.25) + " pounds of lobster to be safe.");

}else if(lobSize ==="large" || lobSize ==="larger" || lobSize ==="large lobsters"){
 console.log("You should get " + (parseInt(numPeople) * parseInt(lobEach) * 1.5) + " pounds of lobster to be safe.");

}else if(lobSize ==="largest" || lobSize ==="largest lobsters" || lobSize ==="biggest"){
 console.log("You should get at least " + (parseInt(numPeople) * parseInt(lobEach) * 2) + " pounds of lobster to be safe.");

}if(landLubbers ==="Yes" || landLubbers ==="yes"){
 console.log("Don't forget about an alternative for your non-seafood eaters!");
}

//Tested
//tested validation --worked on all prompts
//input 5 people
//with someone not having seafood --correct output in both place
//2 lobsters per person
//largest lobster option --correct end print (20 pounds needed)

//Tested
//tested validation --worked on all prompts
//input 3 people
//no seafood problems --skipped appropriate code
//2 lobsters each
//large lobster option --correct end print (9 pounds needed)

//Tested
//tested validation --worked on all prompts
//input 7 people
//with seafood aversion --correct print in both places
//2 lobsters each
//"smallest" lobster option --correct print out (17.5lbs needed)
