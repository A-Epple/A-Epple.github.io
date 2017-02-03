function check(){

var question1 = document.remember.question1.value;
var question3 = document.remember.question3.value;
var question4 = document.remember.question4.value;
var question5 = document.remember.question5.value;
var question6 = document.remember.question6.value;
var question7 = document.remember.question7.value;
var question8 = document.remember.question8.value;
var correct = 0;

if (question3 == "grey") { 
correct++;
}
if (question4 == "a") {  
correct++;
}
if (question5 == "Washington D.C.") { 
correct++;
}
if (question6 == "big cat") { 
correct++;
}
if (question7 == "black") { 
correct++;
}
if (question8 == question1) { 
correct++;
}


var messages = ["ALBERT EINSTEIN!", "great!", "well. done.", "this is a goat. A screaming goat.", "meh"
, "try a LITTLE next time! pleease?", "...   I GIVE UP!!! GO TO SCHOOL OR SOMETHING! COME BACK WHEN YOU CAN GET 100 PERCENT! THANKS! NOW MY IMAGE WON'T WORK EITHER! "];

var pictures = ["img/albert_einstein.gif","img/great.gif","img/well_done.gif",
"img/this_is_a_goat.gif", "img/meh.gif", "img/try_a_little_next_time.gif"]

var range;

if (correct == 0 ) {

     range = 6;
}

if (correct == 1 ) {

     range = 5;
}

if (correct == 2 ) {

     range = 4;
}

if (correct == 3 ) {

     range = 3;
}


if (correct == 4 ) {

     range = 2;
}


if (correct == 5 ) {

     range = 1;
}

if (correct == 6 ) {

     range = 0;
}




document.getElementById("after_submit").style.visibility = "visible";




document.getElementById("message").innerHTML = messages[range];


document.getElementById("number_correct").innerHTML = "you got " +  correct  + " correct";

document.getElementById("picture").src = pictures[range];


}