function randomNumber() {
    var num = Math.random();
    num = Math.floor(num * 6) + 1
    return num;
}

function tossthedice() {

    var player1 = randomNumber();
    var player2 = randomNumber();

    var playerImg1 = "assets/images/" + "dice" + player1 + ".png";
    var playerImg2 = "assets/images/" + "dice" + player2 + ".png";

    document.querySelector("#Player1 img").setAttribute("src", playerImg1);
    document.querySelector("#Player2 img").setAttribute("src", playerImg2);

    if (player1 > player2) {
        document.querySelector("h1").innerText = "🏆 Player 1 Wins"
    }
    else if (player1 < player2) {
        document.querySelector("h1").innerText = "Player 2 Wins 🏆"
    }
    else if (player1 == player2) {
        document.querySelector("h1").innerText = "Toss Again 🎲"
    }
}