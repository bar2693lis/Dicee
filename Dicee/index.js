var randomNumber1 = Math.floor((Math.random()*6)+1); // 1 - 6
var randomCube1 = "images/dice" + randomNumber1 +".png"; // dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomCube1); // images/dice1.png - images/dice6.png


var randomNumber2 = Math.floor((Math.random()*6)+1); // 1 - 6
var randomCube2 = "images/dice" + randomNumber2 +".png"; // dice2.png - dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomCube2); // images/dice2.png - images/dice6.png

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
