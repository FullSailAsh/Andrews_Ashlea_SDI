//alert("Testing connection");

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

