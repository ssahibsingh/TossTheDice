// Photos Change karniya ne 
// Heading Change Karni hai
// random number

function randomNumber() {
    var num = Math.random();
    num = Math.floor(num * 6) + 1  
    return num; 
}




var player1 = randomNumber();
var player2 = randomNumber();

var playerImg1 = "images/"+"dice"+player1+".png";
var playerImg2 = "images/"+"dice"+player2+".png";

console.log(playerImg1);
console.log(playerImg2);
document.querySelector("#Player1 img").setAttribute("src", playerImg1);
document.querySelector("#Player2 img").setAttribute("src", playerImg2);

if(player1 > player2){
    document.querySelector("h1").innerText = "🏆 Player 1 Wins"
}
else if(player1 < player2){
    document.querySelector("h1").innerText = "Player 2 Wins 🏆"
}
else if(player1 == player2){
    document.querySelector("h1").innerText = "Refresh Me"
}




