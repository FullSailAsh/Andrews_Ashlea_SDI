/*
Conditionals Worksheet
Ashlea Andrews
section 01
 */

//alert("testing connection");

//Group 1:  Expressions with Conditionals
//Celsius to Fahrenheit converter

//find the temperature
var temp = prompt("Hi there!  What's the temperature where you are?");

//find if that temperature is celsius or fahrenheit
var unit = prompt("Is that Celsius or Fahrenheit?");

//if unit is celsius, print to console degrees converted in Fahrenheit, if Fahrenheit, print conversion into celsius
if(unit ==="celsius"){
    //convert to fahrenheit, print to console
    console.log("The temperature is " + (Number(temp) * 9 / 5 +32) + " degrees Fahreinheit");

}else{
    console.log("The temperature is " + (((Number(temp) - 32)) / 5 + 32) + "degrees Celsius");
}