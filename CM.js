

// Saves and retrieves value pair.
localStorage.setItem("month", "May");
var month = JSON.parse(localStorage.getItem("May"));

// Creates object and property
const sold = {

cakes: "Cakes sold this week: 56"

};

// Allows access to property in console log.
console.log(sold.cakes);



/** Gets elements with this class. This section was inspired by w3schools.
 www.w3schools.com/howto/howto_js_image_grid.asp */
var elements = document.getElementsByClassName("columnW");

// Declares a loop variable
var i;

// Sets full width images for funcion one.
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Allows for two images to be side by side.
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";
    elements[i].style.flex = "50%";
  }
}

// Allows for three images to be side by side
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";
    elements[i].style.flex = "25%";
  }
}

// Lets user know which button is active when hovered over.
var header = document.getElementById("headW");
var buttonW = header.getElementsByClassName("buttonW");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Changes px height and width of image once mouse is hovered over.
function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

// Changes px height and width of image once mouse is hovered over.
function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

/** Gets element from html and checks if there is input or not.
Displays correct message depending on the input state. */

function newsletter()
{
var empt = document.Emailform.email1.value;
if (empt === "")
{
alert("Please input an email address.");
return false;
}
else
{
alert("Thank you! You have sucessfully signed up to our newsletter.");
return true;
}
}

// Displays pop up box on form page depending on user input.
function formFunction() {
var txt;
if (confirm("Are you sure you would like to submit?")) {
  txt = "Your enquiry has been recieved!";
} else {
txt = "Your enquiry has been canceled!";
}
document.getElementById("feedback").innerHTML = txt;

}
