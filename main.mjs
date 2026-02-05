document.addEventListener("DOMContentLoaded", function() {
    var messageSpace = document.getElementById("welcomeMessage");
    messageSpace.innerHTML = "You've connected to the JavaScript!";
    console.log("JavaScript is connected!");
    
})
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme

function changeHeading() {
    var changingMessage = document.getElementById("You pressed the button");
    changingMessage.innerHTML = "You pressed the button!";
    console.log("working")
}

const myButton = document.getElementById("button2");
const textChange = document.getElementById("textChange");
function handleClick() {
  textChange.innerHTML = "Button clicked!"; 
}
myButton.addEventListener("click", handleClick);