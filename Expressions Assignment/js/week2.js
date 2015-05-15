/*
 Ashlea Andrews
 5/13/2015
 Section 01
 Expressions Assignment

alert("testing to see if connected");
 */
//find out users name
var name = prompt("Hey there, what is your name?");
console.log(name);

//reason for calculator
alert("Well, hello " + name + "! Let's figure out everything you would need for a Maine lobster dinner!");

//how many people
var numPeople = prompt("How many people would you be planning this dinner for?");

//how many lobsters per person
var lobsters = prompt("How many lobsters a piece do you think they'll each want?");


//convert number of lobsters to pounds of lobster
 lobsters *= 1.25;
console.log(lobsters);

//find out how many ears of corn
var corn = parseInt(numPeople) * 1;

//find out how much cake to bake
var cake = parseInt(numPeople) * 4;

//find out how much butter is needed for dipping lobster
var butter = parseInt(numPeople) * 4 / 8;
console.log(butter);

