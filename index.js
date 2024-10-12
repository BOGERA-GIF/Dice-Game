var randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage = "dice"+randomNumber1+".png"; //dice1- dice6.png
var imageSource = "images/"+randomDiceImage; //images/dice1.png- images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice"+randomNumber2+".png";
var imageSource1 = "images/"+randomDiceImage1;
// var imageSource2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource1);


// Changing the heading 
if (randomNumber1> randomNumber2) {
    document.querySelector("h1").innerHTML ="Player one wins";
}
else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innnerHTML ="Player two wins";
}
else {
    document.querySelector("h1").innerHTML ="It's a tie" ;
}