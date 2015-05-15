/*
 Ashlea Andrews
 5/13/2015
 Section 01
 Expressions Assignment

alert("testing to see if connected");
 */

//find out users name
var name = prompt("Hey there, what is your name?");
console.log(name + "'s Lobster Dinner");

//reason for calculator
alert("Well, hello " + name + "! Let's figure out everything you would need for a Maine lobster dinner!");

//how many people
var numPeople = prompt("How many people would you be planning this dinner for?");

//how many lobsters per person
var lobsters = prompt("How many lobsters a piece do you think they'll each want?");

//calculate how many lobsters each
lobsters *= Number(numPeople);
console.log("Total lobsters needed: " + lobsters);

//convert number of lobsters to pounds of lobster
 lobsters *= 1.25;
console.log("Total pounds of lobster: " + lobsters);

//find out how many ears of corn
var corn = parseInt(numPeople) * 1;
console.log(corn + " ears of corn");

//find out how much cake to bake
var cake = parseInt(numPeople) * 4;
console.log(cake + " square inches of blueberry cake");


//find out how many sticks of butter are needed for dipping lobster, number of people multiplied by 4 tbsp butter each, divided by 8 tbsp in a stick of butter
var butter = parseInt(numPeople) * 4 / 8;
console.log("Sticks of butter needed: " + butter);

//create an array for prices of components
var prices = [(Number(corn) *.75), (Number(butter) * 1.25), (Number(lobsters) * 6.75)];

//deliver output
alert("For this dinner " + name + " find a lobsterman, and tell him you need " + lobsters + " pounds of lobster.  You'll also need " + butter + " sticks of butter, and " + corn + " ears of corn.  For the blueberry cake, it would be wise to bake " + cake + " square inches of cake.");

//calculate total meal cost per person
var pricePP = ((Number(prices[0]) + Number(prices[1]) + Number(prices[2])) / Number(numPeople));
console.log("It will cost $" + pricePP + " per person for this dinner, plus whatever you need to buy to make the cake!");
alert("It will cost $" + pricePP + " per person for this dinner, plus whatever you need to buy to make the cake.  Enjoy!");


/* I typed in 8 people
and 2 lobsters a piece.
The calculator gave me:
16 lobsters needed --correct
20 pounds lobster needed --correct
8 ears of corn --correct
32 sq. in of cake --correct
4 sticks of butter --correct
costing $18.25/person --correct
 */

/* I typed in 9 people
and 3 lobsters a piece.
The calculator gave me:
27 lobsters needed --correct
33.75 pounds of lobster --correct
9 ears of corn --correct
36 square inches of blueberry cake --correct
4.5 sticks of butter --correct
costing $26.6875 per person --correct
 */