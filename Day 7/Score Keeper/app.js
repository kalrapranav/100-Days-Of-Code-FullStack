var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var bodyBackground = document.querySelector("body");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            bodyBackground.classList.add("back");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
   
});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            bodyBackground.classList.add("back");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0,
        p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    bodyBackground.classList.remove("back");
    gameOver = false;
}

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent =   this.value;
    winningScore = Number(numInput.value);
    reset();
});