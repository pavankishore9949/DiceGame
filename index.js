var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomDiceNumber = "dice" +randomNumber1+".png";
var randomImageSorce = "images/" + randomDiceNumber;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src",randomImageSorce);
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImageSorce2 = "images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSorce2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
