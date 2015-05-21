/*
 Ashlea Andrews
 5/18/2015
 Section 01
Conditionals Worksheet

 alert("testing to see if connected");


var kidHeight = 46;
var minHeight = 48;
var wparentHeight = 45


//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 in in height
// expression, not variable
if(kidHeight > minHeight){
    //you can ride--code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wparentHeight){

  //only evaluated if first part of the code isn't true you can ride with a parent present
 console.log("You can ride, but only if you have a parent present!")
}else {
// if the condition is false
 console.log("Sorry kid, you've got some growing to do!")
}


//logical operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is more than 300
if(iPhonePrice < budget || wonLottery){
 //^ Asks is the iphone price less than budget true AND is paycheck greater than 300 true??
  console.log("We can buy the phone!");

}else{
  console.log("No phone for you!!");
}


//ternaries

if(condition){
 do if true;
}else{
 do if false;
}

//ternary equivalent:

(condition) ? do if true : do if false

 */

//var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate
/*if( gpa > 2.0){
 console.log("You can graduate!");
}else{
 console.log("GPA is too low!");
}*/
//( gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low");

var age = 11;
var book;

//If the child is under 10, they get Green Eggs and Ham, otherise they get The Time Machine
/*if(age < 10){
 book = "Green Eggs and Ham";
}else{
 book = "The Time Machine";
}
console.log(book);*/
//same as (in ternary):
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book)