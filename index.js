//Dado n1
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDadoImagen = "dado" + randomNumber1 + ".png"

var randomImagenSource = "images/" + randomDadoImagen;
var imagen1 = document.querySelectorAll("img")[0];
imagen1.setAttribute("src", randomImagenSource);

//Dado n2

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDadoImagen2 = "dado" + randomNumber2 + ".png"

var randomImagenSource2 = "images/" + randomDadoImagen2;

document.querySelectorAll("img")[1].setAttribute("src", randomImagenSource2);



if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Empate"
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Gano el jugador 1🚩"
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Gano el jugador 2🚩"
}