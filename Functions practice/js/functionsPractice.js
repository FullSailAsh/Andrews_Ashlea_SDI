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
 */

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old");
}

dogYears(5);
