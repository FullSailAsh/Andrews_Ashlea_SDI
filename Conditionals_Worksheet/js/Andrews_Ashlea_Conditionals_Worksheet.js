/*
Conditionals Worksheet
Ashlea Andrews
section 01


//alert("testing connection");

//Group 1:  Expressions with Conditionals
//Celsius to Fahrenheit converter

//find the temperature
var temp = prompt("Hi there!  What's the temperature where you are?");

//find if that temperature is celsius or fahrenheit
var unit = prompt("Is that Celsius or Fahrenheit? \nPlease be sure your first letter is upper case.");

//if unit is celsius, print to console degrees converted in Fahrenheit, if Fahrenheit, print conversion into celsius
if(unit ==="Celsius"){
    //convert to fahrenheit, print to console
    console.log("The temperature is " + ((parseInt(temp) * 9 / 5) +32) + " degrees Fahreinheit");

}else{
    console.log("The temperature is " + (((parseInt(temp) - 32)) * 5 / 9) + " degrees Celsius");
}


//Group 2
//Grade Letter Calculator

//find out grade
var grade = prompt("Hey there! What number grade did you receive in your course?");

//match number to letter grade, and repeat
if(grade >=95){
    console.log("You have a " + grade + "% which means you have earned an A+ in the class!");

}else if(grade >= 90 && grade <= 94){
    console.log("You have a " + grade + "% which means you have earned an A in the class!");

}
else if(grade >=85 && grade <= 89){
    console.log("You have a " + grade + "% which means you have earned a B+ in the class!");

}else if(grade >= 80 && grade <= 84){
 console.log("You have a " + grade + "% which means you have earned a B in the class!");

}else if(grade >= 76 && grade <= 79){
    console.log("You have a " + grade + "% which means you have earned a C+ in the class!");

}else if(grade >= 73 && grade <= 75){
    console.log("You have a " + grade + "% which means you have earned a C in the class!");

}else if(grade >= 70 && grade <= 72){
    console.log("You have a " + grade + "% which means you have earned a D in the class!");

}else if(grade >= 0 && grade <= 69) {
    console.log("Yikes! You have a " + grade + "% which means you have earned an F in the class!");
}

    */

