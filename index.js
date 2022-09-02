var randomNumber1 = Math.round(Math.random()*6);
var randomNumber2 = Math.round(Math.random()*6);

var dado1 = "images/dado" + randomNumber1 + ".png"
var dado2 = "images/dado" + randomNumber2 + ".png"

document.querySelector(".dado .img1").setAttribute("src", dado1);
document.querySelector(".dado .img2").setAttribute("src", dado2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Empate"
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Gano el jugador 1🚩"
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Gano el jugador 2🚩"
}