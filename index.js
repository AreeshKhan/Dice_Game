var ramdomNumber1= Math.floor(Math.random() * 6) + 1;

var ramdomDiceImage="dice" + ramdomNumber1 + ".png";
var ramdomImageSource="images/" + ramdomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ramdomImageSource);

var ramdomNumber2= Math.floor(Math.random() * 6) + 1;
var ramdomDiceImage2="images/dice" + ramdomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ramdomDiceImage2);

if (ramdomNumber1 > ramdomNumber2)
{
  document.querySelector("h1").innerHTML="&#128512 Player 1 Wins!"

}
else if (ramdomNumber1 < ramdomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! &#128512"

}
else
{
  document.querySelector("h1").innerHTML="Draw!"

}
