//alert("Testing connection");
/*
var width = 5;
//out of scope of function, scoped in larger doc


function outputMSg(){
    console.log("Hello!");
}
//setting up the function

function calcArea(){
    var width = 20;
    //^ scoped to calcArea
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();
//invocation : "calling the function"


//argument and parameter

calcArea(30, 20);
 // 30 and 20 are arguments

function(w, h){ // same as w=30 and h=20
    //w and h are parameters, or "storage mins"
    var area = w * h;
    console.log(area);
}


function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old");
}

var age1 = 4;

dogYears(age1);
dogYears(4); //passing the value 4 to age
dogYears(5); //passing the value 5 to age



var total = calcArea(30, 20); //invoking function, need to establish where it's stored ...telling it to store area in variable "total"

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out
}
console.log(total);

 */

//anonymous functions
//also called closures, creates and executes at the same time


var calcArea = function(w, h){ //defining function, must be first in anonymous
    var area = w * h;
    return area; //function spitting the info out
}
var a = calcArea(20, 30); //invoking function, has to happen after in anonymous

console.log(a);

