/*
Ashlea Andrews
May 27, 2015
Functions Worksheet
 */

//alert("This is in the js file");

//Circumference
//Calculate the circumference of a circle using anonymous function
var radius = prompt("What is the radius of your circle?") //find out radius of circle

var calcC = function(r){        //defines the function
    var circumference = 2 * r * 3.14;
    return circumference; //putting the information out of the function
}
var output = calcC(radius); //invoking the function

console.log("The circumference of the circle is " + output); //printing results


//Stung!
//Calculate how many stings needed to kill an animal based on animals weight in pounds

var weight = prompt("How many pounds did the victim weigh?"); //find out how much the victim weighed

var totalBees = numBees(weight); //set up place for return

function numBees(){ //defines the function
    var stings = weight * 8.666666667;
    return stings; //puts information out of function
}
console.log("It takes " + totalBees + " bee stings to kill this animal."); //print result
