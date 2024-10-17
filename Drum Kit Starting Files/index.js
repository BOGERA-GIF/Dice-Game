
// document.querySelector("button").addEventListener("click", bigButton);
// function bigButton(){
//     alert("This Button was clicked !");
// }

// Select all buttons and loop through them
document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", bigButton);
});
function bigButton() {
var audio = new Audio('tom-1.mp3');
audio.play
}
// function bigButton() {
//     alert("This Button was clicked!");
// }
