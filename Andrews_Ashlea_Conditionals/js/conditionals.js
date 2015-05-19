/*
 Ashlea Andrews
 5/18/2015
 Section 01
Conditionals Worksheet

 alert("testing to see if connected");

*/
var kidHeight = 46;
var minHeight = 48;
var parentHeight = 45


//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 in in height
// expression, not variable
if(kidHeight > minHeight){
    //you can ride--code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > parentHeight){

  //only evaluated if first part of the code isn't true you can ride with a parent present
 console.log("You can ride, but only if you have a parent present!")
}else {
// if the condition is false
 console.log("Sorry kid, you've got some growing to do!")
}
